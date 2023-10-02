import React, { useEffect, useState } from "react";
import Language from "../../Language/Language";
import Logo from "../../../assets/images/logo.png";
import UserInfo from "../../UserInfo/UserInfo";
import styles from "./Header.module.scss";
import ProfileMenuItem from "../../ProfileMenu/ProfileMenuItem/ProfileMenuItem";
import { Link, useLocation } from "react-router-dom";
import { getActiveMenuItem } from "../../../utils/helpers";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Hamburger from "../../Hamburger/Hamburger";
import MobileMenu from "../MobileMenu/MobileMenu";

const isDesktopMenu = () => {
  return (
    <div className={styles["settings"]}>
      <Language />
      <UserInfo />
    </div>
  );
};

const isMobileMenu = (menuStatus, setIsMenuOpenHandler) => {
  return (
    <div className={styles["settings"]}>
      <Language />
      <Hamburger
        menuStatus={menuStatus}
        openMenuHandler={() => {
          if (!menuStatus) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "visible";
          }
          setIsMenuOpenHandler(!menuStatus);
        }}
      />
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowSize = useWindowSize();
  const isDesktop = windowSize > 1024;

  useEffect(() => {
    setActiveMenuItem(getActiveMenuItem(location.pathname));

    setIsMenuOpen(false);
    document.body.style.overflow = "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [location.pathname]);

  return (
    <header className={styles["header"]}>
      <Link to={"/"}>
        <img className={styles["logotype"]} src={Logo} alt={"Logotype"} />
      </Link>

      {isDesktop ? (
        <div className={styles["current-page"]}>
          <ProfileMenuItem
            title={activeMenuItem?.title}
            icon={activeMenuItem?.icon}
            isHeader
          />
        </div>
      ) : null}

      {isDesktop ? isDesktopMenu() : isMobileMenu(isMenuOpen, setIsMenuOpen)}
      <MobileMenu menuStatus={isMenuOpen} />
    </header>
  );
};

export default Header;
