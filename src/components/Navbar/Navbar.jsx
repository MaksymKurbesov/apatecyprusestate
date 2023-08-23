import React from "react";
import styles from "./Navbar.module.scss";
import CustomNavLink from "./CustomNavLink";

const MENU_LIST = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/partner-program",
    title: "Partner Program",
  },
  {
    to: "/about-us",
    title: "About Us",
  },
  {
    to: "/our-contacts",
    title: "Our Contacts",
  },
  {
    to: "/faq",
    title: "FAQ",
  },
];

const Navbar = ({ position }) => {
  return (
    <nav>
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
