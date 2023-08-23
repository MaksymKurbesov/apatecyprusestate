import React from "react";
import Logo from "../../assets/images/logo.png";
import styles from "./Footer.module.scss";
import Navbar from "../Navbar/Navbar";
import InstagramIcon from "../../assets/SVG/instagram.svg";
import FacebookIcon from "../../assets/SVG/facebook.svg";
import TelegramIcon from "../../assets/SVG/telegram.svg";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["top-row"]}>
        <div className={`${styles["footer-wrapper"]} container`}>
          <img src={Logo} alt={"Logotype"} />
          <Navbar position={"footer"} />
          <ul className={styles["social-links"]}>
            <li>
              <a href={"/#"}>
                <img src={InstagramIcon} alt={"Instagram Icon"} />
              </a>
            </li>
            <li>
              <a href={"/#"}>
                <img src={FacebookIcon} alt={"Facebook Icon"} />
              </a>
            </li>
            <li>
              <a href={"/#"}>
                <img src={TelegramIcon} alt={"Telegram Icon"} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["bottom-row"]}>
        <p>
          COPYRIGHT © 2013 – 2023. TRUST INVESTMENT INC. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
