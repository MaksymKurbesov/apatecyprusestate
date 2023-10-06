import React from "react";
import styles from "./Navbar.module.scss";
import CustomNavLink from "./CustomNavLink";
import { MENU_LIST } from "../../utils/consts";
import { useTranslation } from "react-i18next";

const Navbar = ({ position }) => {
  const { t } = useTranslation();

  return (
    <nav className={styles[`nav-${position}`]}>
      <ul className={`${styles[`nav-list`]} ${styles[`nav-list-${position}`]}`}>
        {MENU_LIST.map((item, index) => {
          return (
            <li key={index}>
              <CustomNavLink to={item.to} title={t(`menu.${item.title}`)} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
