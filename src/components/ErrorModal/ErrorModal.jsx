import React from "react";
import Modal from "../../Shared UI/Modal/Modal";
import styles from "../../Shared UI/Modal/Modal.module.scss";
import ErrorIcon from "../../assets/images/error-modal.webp";
import { NavLink } from "react-router-dom";

const ErrorModal = ({ closeHandler, modalStatus, children }) => {
  return (
    <Modal handleClose={closeHandler} isOpen={modalStatus}>
      <img
        className={styles["img"]}
        src={ErrorIcon}
        width={200}
        height={200}
        alt={"modal status"}
      />
      {children}
      <div className={"buttons"}>
        <NavLink to={"/profile/personal-area"}>
          <button onClick={closeHandler} className={"button"}>
            В кабинет
          </button>
        </NavLink>
      </div>
    </Modal>
  );
};

export default ErrorModal;
