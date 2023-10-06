import React, { useEffect } from "react";
import styles from "./Modal.module.scss";
import ReactPortal from "./ReactPortal/ReactPortal";

const Modal = ({ children, isOpen, handleClose, closeOnEsc = false }) => {
  useEffect(() => {
    if (!closeOnEsc) return;

    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className={styles["modal"]}>
        <div className={`${styles["modal-content"]}`}>{children}</div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
