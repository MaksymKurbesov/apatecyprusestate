import React from "react";
import styles from "./MobileMenu.module.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logout } from "../../../Api/Auth";

const MobileMenu = ({ menuStatus }) => {
  const { t, i18n } = useTranslation(["main"]);

  return (
    <div
      className={`${styles["bg-cover"]} ${
        menuStatus && styles["menu-open-cover"]
      }`}
    >
      <div
        className={`${styles["menu-wrapper"]} ${
          menuStatus && styles["menu-open"]
        } custom-bg`}
      >
        <div className={`${styles["mobile-menu"]}`}>
          <div className={styles["top-row"]}>
            <ul className={styles["social-links"]}>
              <li>
                <a href={"/#"}>Youtube</a>
              </li>
              <li>
                <a href={"https://t.me/apatenews"}>Telegram</a>
              </li>
              <li>
                <a href={"/#"}>Instagram</a>
              </li>
            </ul>
            <div className={styles["lang"]}>
              {/*<button*/}
              {/*  className={i18n.language === "gr" ? styles["langIsActive"] : ""}*/}
              {/*>*/}
              {/*  GR*/}
              {/*</button>*/}
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={i18n.language === "en" ? styles["langIsActive"] : ""}
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage("ru")}
                className={i18n.language === "ru" ? styles["langIsActive"] : ""}
              >
                RU
              </button>
            </div>
          </div>

          <ul className={styles["nav-links"]}>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/personal-area"}
              >
                {t(`menu.personal-area`)}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/cash-in"}
              >
                {t(`menu.cash-in`)}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/make-deposit"}
              >
                {t(`menu.make-deposit`)}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/withdrawal"}
              >
                {t(`menu.withdrawal`)}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/transactions"}
              >
                {t(`menu.transactions`)}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/referrals"}
              >
                {t(`menu.referrals`)}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/settings"}
              >
                {t(`menu.settings`)}
              </NavLink>
            </li>
            <li className={styles["quit"]}>
              <button onClick={() => logout()}>{t(`menu.log_out`)}</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
