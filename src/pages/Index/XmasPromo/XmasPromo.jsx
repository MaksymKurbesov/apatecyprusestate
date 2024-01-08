import React, { useEffect, useState } from "react";
import TopBorder from "../../../assets/images/xmas-border.png";
import styles from "./XmasPromo.module.scss";
import { Link, useLocation } from "react-router-dom";

const XmasPromo = () => {
  const [bannerIsOpen, setBannerIsOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname, "location.pathname");

    if (location.pathname === "/xmas-promotion") {
      setBannerIsOpen(false);
    }
  }, [location.pathname]);

  return (
    <div
      className={bannerIsOpen ? styles["xmas-promo"] : styles["xmas-promo-off"]}
    >
      <img src={TopBorder} width={"100%"} height={250} />
      <p>
        C 25 декабря, при пополнении вашего инвестиционного счета, мы начислим
        вам 10% бонусом!
      </p>
      <Link to={"/xmas-promotion"}>Подробнее</Link>
      <button
        onClick={() => setBannerIsOpen(false)}
        className={styles["close"]}
      >
        <span />
        <span />
      </button>
    </div>
  );
};

export default XmasPromo;
