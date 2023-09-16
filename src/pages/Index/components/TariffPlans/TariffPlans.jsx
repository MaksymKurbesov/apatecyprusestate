import React from "react";
import styles from "./TariffPlans.module.scss";
import Title from "../../../../../Shared UI/Title/Title";
import PlansList from "../../../../../components/PlansList/PlansList";

const TariffPlans = () => {
  return (
    <section className={`${styles["tariff-plans"]}`}>
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
        <PlansList />
      </div>
    </section>
  );
};

export default TariffPlans;
