import React from "react";
import styles from "./Presentation.module.scss";
import Title from "../../../Shared UI/Title/Title";
import MacbookImage from "../../../assets/images/Macbook-Air-_2022_.webp";
import { useTranslation } from "react-i18next";

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <section className={styles["presentation"]}>
      <div className={"container"}>
        <div className={`${styles["presentation-wrapper"]}`}>
          <div className={styles["information"]}>
            <Title text={t("presentation.title")} />
            <p>{t("presentation.subtitle")}</p>
          </div>
          <img
            src={MacbookImage}
            alt={"Macbook"}
            className={styles["macbook"]}
            width={"60%"}
          />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
