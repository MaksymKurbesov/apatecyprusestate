import React, { useEffect, useState } from "react";
import ExitIcon from "../../assets/SVG/quit.svg";
import styles from "./UserInfo.module.scss";
import { logout } from "../../Api/Auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../index";
import AvatarPlaceholder from "../../assets/images/avatar-placeholder.jpg";

const UserInfo = () => {
  const navigate = useNavigate();
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    if (auth.currentUser.photoURL) {
      setUserAvatar(auth.currentUser.photoURL);
    } else {
      setUserAvatar(AvatarPlaceholder);
    }
  }, []);

  return (
    <div className={`${styles["user-info"]}`}>
      <img
        onClick={() => navigate("settings")}
        className={styles["avatar"]}
        src={userAvatar}
        width={42}
        height={42}
        alt={"User Avatar"}
      />
      <span className={styles["username"]}>
        {auth.currentUser?.displayName}
      </span>
      <img
        onClick={() => logout()}
        className={styles["exit-icon"]}
        src={ExitIcon}
        alt={"Exit Icon"}
        width={22}
        height={22}
      />
    </div>
  );
};

export default UserInfo;
