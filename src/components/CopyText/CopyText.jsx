import React from "react";
import styles from "./CopyText.module.scss";
import { ReactComponent as CopyLink } from "../../assets/SVG/copy link icon.svg";

const CopyText = ({ text }) => {
  return (
    // <div className={styles["copy-text-wrapper"]}>
    <div className={styles["copy-text"]}>
      <span className={styles["link"]}>{text}</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigator.clipboard.writeText(text);
        }}
        className={styles["copy-link-button"]}
      >
        <CopyLink />
      </button>
    </div>
    // </div>
  );
};

export default CopyText;
