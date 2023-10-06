import React from "react";
import {
  calculateIncomeInDay,
  calculateTotalIncome,
} from "../../../utils/helpers/calculates";
import { useTranslation } from "react-i18next";

const EnterTheAmountAddInfo = ({ amount, selectedPlan }) => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        {t("bill.income_in_day")}:
        <span>{calculateIncomeInDay(amount, selectedPlan)} USD</span>
      </p>
      <p>
        {t("bill.total_income")}:
        <span>{calculateTotalIncome(amount, selectedPlan)} USD</span>
      </p>
    </>
  );
};

export default EnterTheAmountAddInfo;
