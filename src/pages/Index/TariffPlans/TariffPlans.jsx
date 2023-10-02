import React from "react";
import styles from "./TariffPlans.module.scss";
import Title from "../../../Shared UI/Title/Title";
import PlansList from "../../../components/PlansList/PlansList";
import { FormProvider, useForm } from "react-hook-form";

const TariffPlans = () => {
  const methods = useForm({
    defaultValues: {
      amount: 0,
    },
    mode: "onChange",
  });

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
        <div className={styles["plans-wrapper"]}>
          <FormProvider {...methods}>
            <PlansList isPayNow />
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default TariffPlans;
