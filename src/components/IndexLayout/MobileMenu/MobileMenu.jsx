import React from "react";
import styles from "./MobileMenu.module.scss";
import { Link } from "react-router-dom";
import { useAuthState } from "../../../hooks/useAuthState";
import { auth } from "../../../index";
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../../assets/SVG/logo2.svg";

const MobileMenu = ({ menuStatus }) => {
  const { t, i18n } = useTranslation(["main", "our-contacts"]);
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
            <Link to={"/"} className={styles["logotype"]}>
              <Logo />
            </Link>
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
              <button
                className={i18n.language === "gr" ? styles["langIsActive"] : ""}
              >
                GR
              </button>
              <button
                className={i18n.language === "en" ? styles["langIsActive"] : ""}
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={i18n.language === "ru" ? styles["langIsActive"] : ""}
                onClick={() => i18n.changeLanguage("ru")}
              >
                RU
              </button>
            </div>
          </div>

          <ul className={styles["nav-links"]}>
            <li>
              <Link to={"/"}>{t("menu.Home")}</Link>
            </li>
            <li>
              <Link to={"/partner-program"}>{t("menu.Partner Program")}</Link>
            </li>
            <li>
              <Link to={"/about-us"}>{t("menu.About Us")}</Link>
            </li>
            <li>
              <Link to={"/our-contacts"}>{t("menu.Our Contacts")}</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/token"}>{t("menu.Token")}</Link>
            </li>
            {user ? (
              <li className={styles["cabinet"]}>
                <Link to={"/profile/personal-area"}>{t("menu.cabinet")}</Link>
              </li>
            ) : (
              <>
                <li className={styles["sign-in"]}>
                  <Link to={"/authorization/sign-in"}>
                    {t("menu.log_in_cabinet")}
                  </Link>
                </li>
                <li className={styles["registration"]}>
                  <Link to={"/authorization/sign-up"}>{t("menu.sign_up")}</Link>
                </li>
              </>
            )}
          </ul>

          <div className={styles["contacts"]}>
            <p>
              <span>Email:</span> support@apatecyprusestate.com
            </p>
            <p>
              <span>{t("phone_number", { ns: "our-contacts" })}:</span> +357 22
              761795
            </p>
            <p>
              <span>{t("our_address", { ns: "our-contacts" })}:</span> Tower 25,
              Stasinou, Nicosia 1060, Cyprus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
