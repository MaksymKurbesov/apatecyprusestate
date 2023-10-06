import React from "react";
import { ReactComponent as Logo } from "../../../assets/SVG/logo2.svg";
import styles from "./Footer.module.scss";
import Navbar from "../../Navbar/Navbar";
import { ReactComponent as PhoneIcon } from "../../../assets/SVG/phone.svg";
import { ReactComponent as EmailIcon } from "../../../assets/SVG/mail.svg";
import { ReactComponent as YoutubeIcon } from "../../../assets/SVG/youtube.svg";
import { ReactComponent as TelegramIcon } from "../../../assets/SVG/telegram.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles["footer"]}>
      <div className={"container"}>
        <div className={styles["top-row"]}>
          <Link to={"/"} className={styles["logotype"]}>
            <Logo />
          </Link>

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
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
