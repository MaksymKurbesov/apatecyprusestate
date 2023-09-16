import React from "react";
import styles from "./MobileMenu.module.scss";
import Language from "../Language/Language";
import Navbar from "../Navbar/Navbar";

const MobileMenu = () => {
  return (
    <div>
      <Navbar />
      <ul>
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
      <Language />
    </div>
  );
};

export default MobileMenu;
