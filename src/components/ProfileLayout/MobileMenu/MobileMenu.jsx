import React from "react";
import styles from "./MobileMenu.module.scss";
import { NavLink, Link } from "react-router-dom";

const MobileMenu = ({ menuStatus }) => {
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
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/cash-in"}
              >
                Пополнить счёт
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/make-deposit"}
              >
                Открыть депозит
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/withdrawal"}
              >
                Вывод средств
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/transactions"}
              >
                Операции
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/partners"}
              >
                Рефералы
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/profile/settings"}
              >
                Настройки
              </NavLink>
            </li>
            <li className={styles["quit"]}>
              <Link to={"/"}>Выйти с кабинета</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
