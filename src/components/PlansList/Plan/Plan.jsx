import React from "react";
import styles from "./Plan.module.scss";
import FireIcon from "../../../assets/SVG/fire.svg";
import CyprusRegions from "../../CyprusRegions/CyprusRegions";
import { ReactComponent as AccrualTypeIcon } from "../../../assets/SVG/accrual-type.svg";
import { useTranslation } from "react-i18next";

const Plan = ({ plan }) => {
  const { t } = useTranslation();

  const {
    planNumber,
    name,
    inDay,
    days,
    minDeposit,
    maxDeposit,
    accrualsEveryday,
  } = plan;

  return (
    <div className={styles["plan"]}>
      <CyprusRegions activeRegion={name} />
      <div className={styles["information-wrapper"]}>
        <div className={styles["information"]}>
          <img
            src={FireIcon}
            alt={"Fire Icon"}
            className={styles["fire-icon"]}
          />
          <span>{t("tariff_plans.region")}</span>
          <h3>{name}</h3>
        </div>
        <div className={styles["accrual-type"]}>
          <AccrualTypeIcon />
          <span>{t("tariff_plans.accruals")}</span>
          <p>
            {accrualsEveryday
              ? t("tariff_plans.daily")
              : t("tariff_plans.at_the_end_of_the_term")}
          </p>
        </div>
      </div>
      <ul className={styles["statistic"]}>
        <li>
          <p>
            {planNumber > 3
              ? t("tariff_plans.at_the_end_of_the_term")
              : t("tariff_plans.daily")}
          </p>
          <span>{inDay}%</span>
        </li>
        <li>
          <p>{t("tariff_plans.days")}</p>
          <span>{days}</span>
        </li>
        <li>
          <p>{t("tariff_plans.min_deposit")}</p>
          <span>{minDeposit}$</span>
        </li>
        <li>
          <p>{t("tariff_plans.max_deposit")}</p>
          <span>{name === "Individual" ? `∞` : `${maxDeposit}$`}</span>
        </li>
      </ul>
    </div>
  );
};

export default Plan;
