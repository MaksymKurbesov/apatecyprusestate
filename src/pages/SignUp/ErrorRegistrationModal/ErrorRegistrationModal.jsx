import React from "react";
import Modal from "../../../Shared UI/Modal/Modal";
import styles from "./ErrorRegistrationModal.module.scss";
import ErrorIcon from "../../../assets/images/error-modal.png";

const ErrorRegistrationModal = ({ closeHandler, modalStatus, error }) => {
  return (
    <Modal handleClose={closeHandler} isOpen={modalStatus}>
      <div className={`${styles["modal"]} custom-bg`}>
        <img src={ErrorIcon} width={200} height={200} alt={"modal status"} />
        <h3>Ошибка!</h3>
        <p>
          {error
            ? error
            : `Извините, но этот никнейм уже занят. <br /> Пожалуйста, выберите
          другой никнейм для вашей учетной записи.`}
        </p>
        <div className={styles["buttons"]}>
          <button
            onClick={closeHandler}
            className={`${styles["close-button"]} button`}
          >
            Закрыть
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorRegistrationModal;
