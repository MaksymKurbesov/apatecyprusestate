import React from "react";
import {
  calculateIncomeInDay,
  calculateTotalIncome,
} from "../../../utils/helpers/calculates";

const EnterTheAmountAddInfo = ({ amount, selectedPlan }) => {
  return (
    <>
      <p>
        Доход в день:
        <span>{calculateIncomeInDay(amount, selectedPlan)} USD</span>
      </p>
      <p>
        Общий доход:
        <span>{calculateTotalIncome(amount, selectedPlan)} USD</span>
      </p>
    </>
  );
};

export default EnterTheAmountAddInfo;
