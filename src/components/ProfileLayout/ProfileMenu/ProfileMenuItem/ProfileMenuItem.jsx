import React from "react";
import styles from "./ProfileMenuItem.module.scss";

const ProfileMenuItem = ({ icon, title, isHeader }) => {
  return (
    <div
      className={`${styles["menu-item"]} ${isHeader ? styles["header"] : ""}`}
    >
      {icon} <span>{title}</span>
    </div>
  );
};

export default ProfileMenuItem;
