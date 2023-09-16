import React from "react";

const ProfileMenuItem = ({ icon, title }) => {
  return (
    <div className={styles["menu-item"]}>
      {icon} <span>{title}</span>
    </div>
  );
};

export default ProfileMenuItem;
