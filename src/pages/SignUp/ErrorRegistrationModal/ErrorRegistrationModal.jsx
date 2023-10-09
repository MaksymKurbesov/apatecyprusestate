import React from "react";
import Modal from "../../../Shared UI/Modal/Modal";
import ErrorIcon from "../../../assets/images/error-modal.webp";
import styles from "../../../Shared UI/Modal/Modal.module.scss";

const ErrorRegistrationModal = ({ closeHandler, modalStatus, error }) => {
  return (
    <Modal handleClose={closeHandler} isOpen={modalStatus}>
      <img
        className={styles["img"]}
        src={ErrorIcon}
        width={200}
        height={200}
        alt={"modal status"}
      />
      <h3>Ошибка!</h3>
      {error ? (
        <p>error</p>
      ) : (
        <p>
          Извините, но этот никнейм уже занят. <br /> Пожалуйста, выберите
          другой никнейм для вашей учетной записи.
        </p>
      )}

      <div className={"buttons"}>
        <button onClick={closeHandler} className={`close-button button`}>
          Закрыть
        </button>
      </div>
    </Modal>
  );
};

export default ErrorRegistrationModal;
