import React from "react";
import Logo from "../../assets/images/logo.png";
import styles from "./Footer.module.scss";
import Navbar from "../Navbar/Navbar";
import { ReactComponent as PhoneIcon } from "../../assets/SVG/phone.svg";
import { ReactComponent as EmailIcon } from "../../assets/SVG/mail.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/SVG/youtube.svg";
import { ReactComponent as TelegramIcon } from "../../assets/SVG/telegram.svg";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={"container"}>
        <div className={styles["top-row"]}>
          <img src={Logo} alt={"Logotype"} />
          <Navbar position={"footer"} />
          <ul className={styles["social-links"]}>
            <li>
              <a href={"/#"}>
                <PhoneIcon />
              </a>
            </li>
            <li>
              <a href={"/#"}>
                <EmailIcon />
              </a>
            </li>
            <li>
              <a href={"/#"}>
                <TelegramIcon />
              </a>
            </li>
            <li>
              <a href={"/#"}>
                <YoutubeIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["bottom-row"]}>
          <p>
            COPYRIGHT © 2013 – 2023. APATE CYPRUS ESTATE INC. ALL RIGHTS
            RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
