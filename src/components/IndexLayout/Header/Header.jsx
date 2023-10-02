import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo.png";
import Navbar from "../../Navbar/Navbar";
import styles from "./Header.module.scss";
import Language from "../../Language/Language";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useAuthState } from "../../../hooks/useAuthState";
import { auth } from "../../../index";
import Hamburger from "../../Hamburger/Hamburger";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
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
      <div className={"container"}>
        <header className={`${styles["header"]}`}>
          <Link to={"/"} className={styles["logotype"]}>
            <img src={Logo} alt={"Logotype"} />
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
                    Cabinet
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      className={`button ${styles["sign-in-button"]}`}
                      to={"/authorization/sign-in"}
                    >
                      Log In
                    </NavLink>
                    <NavLink className={"button"} to={"/authorization/sign-up"}>
                      Sign Up
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
