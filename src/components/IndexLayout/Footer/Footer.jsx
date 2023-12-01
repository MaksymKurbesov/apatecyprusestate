import React from "react";
import { ReactComponent as Logo } from "../../../assets/SVG/logo2.svg";
import styles from "./Footer.module.scss";
import Navbar from "../../Navbar/Navbar";
import { ReactComponent as PhoneIcon } from "../../../assets/SVG/phone.svg";
import { ReactComponent as EmailIcon } from "../../../assets/SVG/mail.svg";
import { ReactComponent as YoutubeIcon } from "../../../assets/SVG/youtube.svg";
import { ReactComponent as TelegramIcon } from "../../../assets/SVG/telegram.svg";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ReactComponent as InstagramIcon } from "../../../assets/SVG/instagram.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles["footer"]}>
      <div className={"container"}>
        <div className={styles["top-row"]}>
          <Link aria-label={"Logotype"} to={"/"} className={styles["logotype"]}>
            <Logo />
          </Link>

          <Navbar position={"footer"} />
          <ul className={styles["social-links"]}>
            <li>
              <a aria-label={"phone"} href={"tel:35722761795"}>
                <PhoneIcon />
              </a>
            </li>
            <li>
              <a
                aria-label={"youtube"}
                href={"https://www.youtube.com/@apatecyprusestate"}
              >
                <YoutubeIcon />
              </a>
            </li>
            <li>
              <a
                aria-label={"Instagram"}
                href={"https://www.instagram.com/apatecyprusestate/"}
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                aria-label={"Email"}
                href={"mailto:support@apatecyprusestate.com"}
              >
                <EmailIcon />
              </a>
            </li>
            <li>
              <a aria-label={"Telegram"} href={"https://t.me/apatenews"}>
                <TelegramIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["bottom-row"]}>
          <div className={styles["links"]}>
            <NavLink to={"/documents"}>{t("footer.documents")}</NavLink>
            <NavLink to={"/privacy-policy"}>{t("footer.privacy")}</NavLink>
            <NavLink to={"/terms-of-use"}>{t("footer.terms")}</NavLink>
          </div>
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
