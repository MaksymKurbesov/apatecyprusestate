import React, { useEffect, useState } from "react";
import ExitIcon from "../../assets/SVG/quit.svg";
import styles from "./UserInfo.module.scss";
import { logout } from "../../Api/Auth";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { auth } from "../../index";
import AvatarPlaceholder from "../../assets/images/avatar-placeholder.jpg";
import { ReactComponent as DefaultStatus } from "../../assets/SVG/referral status/default.svg";
import { SPONSOR_NAME_MAP } from "../../utils/consts";

const UserInfo = ({ rank }) => {
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
        <NavLink
          to={"/profile/referrals"}
          className={styles["referral-status-icon"]}
        >
          <img src={SPONSOR_NAME_MAP[rank].icon} alt={""} width={25} />
        </NavLink>
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
