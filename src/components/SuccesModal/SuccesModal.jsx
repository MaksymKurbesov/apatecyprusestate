import React from "react";
import styles from "./SuccesModal.module.scss";
import Modal from "../../Shared UI/Modal/Modal";
import SuccessIcon from "../../assets/images/success-modal.png";
import { NavLink } from "react-router-dom";

const SuccesModal = ({
  closeHandler,
  modalStatus,
  children,
  toTransactionButton,
}) => {
  return (
    <Modal handleClose={closeHandler} isOpen={modalStatus}>
      <div className={`${styles["success"]} custom-bg`}>
        <img src={SuccessIcon} width={200} height={200} alt={"modal status"} />
        {children}
        <div className={styles["buttons"]}>
          {toTransactionButton && (
            <NavLink to={"/profile/transactions"}>
              <button onClick={closeHandler} className={"button"}>
                Транзакции
              </button>
            </NavLink>
          )}
          <NavLink to={"/profile/personal-area"}>
            <button onClick={closeHandler} className={"button"}>
              В кабинет
            </button>
          </NavLink>
        </div>
      </div>
    </Modal>
  );
};

export default SuccesModal;
