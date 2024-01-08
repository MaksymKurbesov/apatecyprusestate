import React from "react";
import styles from "./Statistic.module.scss";
import SectionLabel from "../../../Shared UI/SectionLabel/SectionLabel";
import Title from "../../../Shared UI/Title/Title";
import { useTranslation } from "react-i18next";
import { STATISTIC } from "../../../utils/consts";

const Statistic = () => {
  const { t } = useTranslation("about-us");

  return (
    <section className={styles["main"]}>
      <div className={"container"}>
        <div className={styles["text"]}>
          <SectionLabel
            text={t("company_in_digits.label")}
            style={{ marginBottom: 30 }}
          />
          <Title text={t("company_in_digits.title")} />
          <p>{t("company_in_digits.description")}</p>
        </div>
        <div className={styles["statistic"]}>
          <ul>
            {STATISTIC.map(({ count, title }, index) => {
              const isCapital = title === "Capital";
              const isROI = title === "ROI";

              let updatedCount;

              if (isCapital) updatedCount = `${count}B+`;
              if (isROI) updatedCount = `~${count}%`;

              return (
                <li className={styles["statistic-item"]} key={index}>
                  <p>{updatedCount ? updatedCount : `${count}+`}</p>
                  <span>{t(`company_in_digits.${title}`)}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
