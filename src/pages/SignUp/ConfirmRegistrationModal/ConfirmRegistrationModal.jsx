import React from "react";
import Modal from "../../../Shared UI/Modal/Modal";
import SuccessIcon from "../../../assets/images/success-modal.webp";
import { NavLink } from "react-router-dom";
import styles from "../../../Shared UI/Modal/Modal.module.scss";

const ConfirmRegistrationModal = ({ closeHandler, modalStatus }) => {
  return (
    <Modal handleClose={closeHandler} isOpen={modalStatus}>
      <img
        className={styles["img"]}
        src={SuccessIcon}
        width={200}
        height={200}
        alt={"modal status"}
      />
      <h3>Вы сделали это!</h3>
      <p>
        Поздравляем вас с успешной регистрацией на нашей инвестиционной
        платформе!
        <br /> Этот важный шаг приближает вас к достижению ваших финансовых
        целей и инвестиционным успехам.
      </p>
      <div className={"buttons"}>
        <button onClick={closeHandler} className={`close-button button`}>
          Закрыть
        </button>
        <NavLink to={"/authorization/sign-in"}>
          <button className={"button"}>Войти в кабинет</button>
        </NavLink>
      </div>
    </Modal>
  );
};

export default ConfirmRegistrationModal;
