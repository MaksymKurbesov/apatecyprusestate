import React from "react";
import styles from "./MobileMenu.module.scss";
import { Link } from "react-router-dom";
import { useAuthState } from "../../../hooks/useAuthState";
import { auth } from "../../../index";

const MobileMenu = ({ menuStatus }) => {
  const [user, loading] = useAuthState(auth);

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
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/partner-program"}>Partner Program</Link>
            </li>
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"/our-contacts"}>Contacts</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/token"}>Token</Link>
            </li>
            {user ? (
              <li className={styles["cabinet"]}>
                <Link to={"/profile/personal-area"}>Войти в кабинет</Link>
              </li>
            ) : (
              <>
                <li className={styles["sign-in"]}>
                  <Link to={"/authorization/sign-in"}>Войти в кабинет</Link>
                </li>
                <li className={styles["registration"]}>
                  <Link to={"/authorization/sign-up"}>Регистрация</Link>
                </li>
              </>
            )}
          </ul>

          <div className={styles["contacts"]}>
            <p>
              <span>Email:</span> support@apatecyprusestate.com
            </p>
            <p>
              <span>Phone:</span> +7458359454
            </p>
            <p>
              <span>Address:</span> Nicosia, 9 Megalou Alexandrou 1026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
