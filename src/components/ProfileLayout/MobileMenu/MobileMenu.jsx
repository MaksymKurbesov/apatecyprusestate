import React from "react";
import styles from "./MobileMenu.module.scss";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileMenu = ({ menuStatus }) => {
  const { t } = useTranslation(["main"]);

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
                <a>Youtube</a>
              </li>
              <li>
                <a>Telegram</a>
              </li>
              <li>
                <a>Instagram</a>
              </li>
            </ul>
            <div className={styles["lang"]}>
              <p>GR</p>
              <p>EN</p>
              <p>RU</p>
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
              <Link to={"/"}>{t(`menu.log_out`)}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
