import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const CustomNavLink = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles["active"] : "")}
    >
      {title}
    </NavLink>
  );
};

export default CustomNavLink;
