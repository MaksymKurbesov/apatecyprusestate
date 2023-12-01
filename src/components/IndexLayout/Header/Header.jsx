import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import styles from "./Header.module.scss";
import Language from "../../Language/Language";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useAuthState } from "../../../hooks/useAuthState";
import { auth } from "../../../index";
import Hamburger from "../../Hamburger/Hamburger";
import MobileMenu from "../MobileMenu/MobileMenu";
import { ReactComponent as Logo } from "../../../assets/SVG/logo2.svg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const [user, loading] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [location.pathname]);

  return (
    <>
      <div className={"container"} data-aos={"fade-down"} data-aos-delay={200}>
        <header className={`${styles["header"]}`}>
          <Link aria-label={"Logotype"} to={"/"} className={styles["logotype"]}>
            <Logo />
          </Link>
          <div className={styles["settings"]}>
            {windowSize > 1200 ? (
              <>
                <Navbar position={"header"} />
                <Language />
              </>
            ) : (
              <Hamburger
                menuStatus={isMenuOpen}
                openMenuHandler={() => {
                  if (!isMenuOpen) {
                    document.body.style.overflow = "hidden";
                  } else {
                    document.body.style.overflow = "visible";
                  }
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
            )}

            {!loading && (
              <div className={styles["buttons"]}>
                {user ? (
                  <NavLink className={`button`} to={"profile/personal-area"}>
                    {t("menu.cabinet")}
                  </NavLink>
                ) : (
                  <>
                    <NavLink className={`button`} to={"/authorization/sign-in"}>
                      {t("menu.log_in")}
                    </NavLink>
                    <NavLink className={"button"} to={"/authorization/sign-up"}>
                      {t("menu.sign_up")}
                    </NavLink>
                  </>
                )}
              </div>
            )}
          </div>
        </header>
      </div>
      <MobileMenu menuStatus={isMenuOpen} />
    </>
  );
};

export default Header;
