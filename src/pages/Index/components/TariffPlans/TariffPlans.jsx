import React from "react";
import styles from "./TariffPlans.module.scss";
import Title from "../../../../Shared UI/Title/Title";
import Plan1Image from "../../../../assets/images/plans images/1.png";
import Plan2Image from "../../../../assets/images/plans images/2.png";
import Plan3Image from "../../../../assets/images/plans images/3.png";
import TariffPlan from "./TariffPlan/TariffPlan";

const PLANS = [
  {
    name: "Canal Heights",
    planImage: Plan1Image,
    inDay: 2.3,
    days: 24,
    minDeposit: 1500,
    maxDeposit: 8000,
  },
  {
    name: "Canal Heights",
    planImage: Plan2Image,
    inDay: 2.3,
    days: 24,
    minDeposit: 1500,
    maxDeposit: 8000,
  },
  {
    name: "Canal Heights",
    planImage: Plan3Image,
    inDay: 2.3,
    days: 24,
    minDeposit: 1500,
    maxDeposit: 8000,
  },
];

const TariffPlans = () => {
  return (
    <div className={`${styles["tariff-plans"]}`}>
      <div className={"container"}>
        <Title
          text={"Tariff Plans"}
          align={"center"}
          style={{ marginBottom: 30 }}
        />
        <h3 className={styles["subtitle"]}>
          Market that combines several global areas such as: investment online
          platform
        </h3>
        <ul className={styles["tariff-plans-list"]}>
          {PLANS.map((plan, index) => {
            return (
              <li key={index} className={styles["plan"]}>
                <TariffPlan plan={plan} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TariffPlans;
