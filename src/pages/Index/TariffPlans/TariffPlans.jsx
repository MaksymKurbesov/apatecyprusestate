import React from "react";
import styles from "./TariffPlans.module.scss";
import Title from "../../../Shared UI/Title/Title";
import PlansList from "../../../components/PlansList/PlansList";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const TariffPlans = () => {
  const { t } = useTranslation();
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
          text={t("tariff_plans.title")}
          align={"center"}
          style={{ marginBottom: 30 }}
        />
        <h3 data-aos={"fade-down"} className={styles["subtitle"]}>
          {t("tariff_plans.subtitle")}
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
