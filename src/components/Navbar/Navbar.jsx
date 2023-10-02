import React from "react";
import styles from "./Navbar.module.scss";
import CustomNavLink from "./CustomNavLink";
import { MENU_LIST } from "../../utils/consts";

const Navbar = ({ position }) => {
  return (
    <nav className={styles[`nav-${position}`]}>
      <ul className={`${styles[`nav-list`]} ${styles[`nav-list-${position}`]}`}>
        {MENU_LIST.map((item, index) => {
          return (
            <li key={index}>
              <CustomNavLink to={item.to} title={item.title} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
