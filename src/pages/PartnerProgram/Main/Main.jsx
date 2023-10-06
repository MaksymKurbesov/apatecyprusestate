import React from "react";
import SectionLabel from "../../../Shared UI/SectionLabel/SectionLabel";
import Title from "../../../Shared UI/Title/Title";
import styles from "./Main.module.scss";
import HeroImage from "../../../assets/images/partner-hero-image.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation("partners-program");

  return (
    <section className={styles["main"]}>
      <SectionLabel text={t("label")} style={{ marginBottom: 25 }} />
      <Title text={t("title")} style={{ marginBottom: 25 }} />
      <p className={styles["subtitle"]}>{t("subtitle")}</p>
      <Link
        to={"/authorization/sign-up"}
        className={`${styles["register-button"]} button`}
      >
        {t("register_button")}
      </Link>
      <div className={styles["hero-image"]}>
        <img src={HeroImage} alt={"main decor"} width={"60%"} />
      </div>
    </section>
  );
};

export default Main;
