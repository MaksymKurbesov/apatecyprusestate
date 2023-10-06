import React, { useEffect, useState } from "react";
import { ReactComponent as MakeDeposit } from "../../assets/SVG/menu icons/MakeDeposit.svg";
import { ReactComponent as Withdrawal } from "../../assets/SVG/menu icons/Withdrawn.svg";
import { ReactComponent as Transactions } from "../../assets/SVG/menu icons/Transactions.svg";
import { ReactComponent as PersonalArea } from "../../assets/SVG/menu icons/PersonalArea.svg";
import { ReactComponent as CashIn } from "../../assets/SVG/menu icons/CashIn.svg";
import { ReactComponent as Partners } from "../../assets/SVG/menu icons/Partners.svg";
import { ReactComponent as Settings } from "../../assets/SVG/menu icons/settings.svg";
import { ReactComponent as Instagram } from "../../assets/SVG/instagram.svg";
import { ReactComponent as Youtube } from "../../assets/SVG/youtube.svg";
import { ReactComponent as Telegram } from "../../assets/SVG/telegram.svg";

import styles from "./ProfileMenu.module.scss";
import { NavLink, useOutletContext } from "react-router-dom";
import ProfileMenuItem from "./ProfileMenuItem/ProfileMenuItem";
import { useTranslation } from "react-i18next";

export const MENU_ITEMS = [
  {
    title: "Personal Area",
    icon: <PersonalArea />,
    path: "personal-area",
  },
  {
    title: "Cash In",
    icon: <CashIn />,
    path: "cash-in",
  },
  {
    title: "Make a deposit",
    icon: <MakeDeposit />,
    path: "make-deposit",
  },
  {
    title: "Withdrawal",
    icon: <Withdrawal />,
    path: "withdrawal",
  },
  {
    title: "Transactions",
    icon: <Transactions />,
    path: "transactions",
  },
  {
    title: "Referrals",
    icon: <Partners />,
    path: "referrals",
  },
  {
    title: "Settings",
    icon: <Settings />,
    path: "settings",
  },
];

const ProfileMenu = ({ userData }) => {
  const [menu, setMenu] = useState(MENU_ITEMS);
  const { t } = useTranslation();

  useEffect(() => {
    if (userData.isAdmin) {
      setMenu((prevState) => [
        ...prevState,
        {
          title: "Admin",
          icon: <Settings />,
          path: "admin",
        },
      ]);
    }
  }, []);

  return (
    <nav className={`${styles["menu-list"]} custom-bg custom-border`}>
      <ul>
        {menu.map(({ title, icon, path }) => {
          return (
            <li className={styles["link"]} key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? styles["active"] : "")}
              >
                <ProfileMenuItem icon={icon} title={t(`menu.${path}`)} />
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className={styles["social-links"]}>
        <li>
          <Instagram />
        </li>
        <li>
          <Youtube />
        </li>
        <li>
          <Telegram />
        </li>
      </ul>
    </nav>
  );
};

export default ProfileMenu;
