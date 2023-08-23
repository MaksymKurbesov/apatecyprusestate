import React from "react";
import Logo from "../../assets/images/logo.png";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import Button from "../../Shared UI/Button/Button";
import Language from "../Language/Language";

const Header = () => {
  return (
    <header className={`${styles["header"]} container`}>
      <div className={styles["header"]}>
        <img src={Logo} alt={"Logotype"} />
        <Navbar position={"header"} />
        <div className={styles["settings"]}>
          <Language />
          <Button text={"Sign In"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
