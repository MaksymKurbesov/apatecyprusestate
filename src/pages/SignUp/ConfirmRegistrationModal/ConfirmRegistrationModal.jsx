import React from "react";
import Modal from "../../../Shared UI/Modal/Modal";
import styles from "./ConfirmRegistrationModal.module.scss";
import SuccessIcon from "../../../assets/images/success-modal.webp";
import { NavLink } from "react-router-dom";

const ConfirmRegistrationModal = ({ closeHandler, modalStatus }) => {
  return (
    <Modal handleClose={closeHandler} isOpen={modalStatus}>
      <div className={`${styles["modal"]} custom-bg`}>
        <img src={SuccessIcon} width={200} height={200} alt={"modal status"} />
        <h3>Вы сделали это!</h3>
        <p>
          Поздравляем вас с успешной регистрацией на нашей инвестиционной
          платформе! Этот важный шаг приближает вас к достижению ваших
          финансовых целей и инвестиционным успехам.
        </p>
        <div className={styles["buttons"]}>
          <button
            onClick={closeHandler}
            className={`${styles["close-button"]} button`}
          >
            Закрыть
          </button>
          <NavLink to={"/authorization/sign-in"}>
            <button className={"button"}>Войти в кабинет</button>
          </NavLink>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmRegistrationModal;
