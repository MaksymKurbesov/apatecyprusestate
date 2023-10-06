import React from "react";
import { useTranslation } from "react-i18next";

const EnterTheAmountAddInfo = ({ amount }) => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        {t("bill.will_be_withdrawn")}:
        <span>{!isNaN(amount) ? amount.toFixed(2) : 0} USD</span>
      </p>
      <p>
        {t("bill.commission")}:<span> 0.00 USD</span>
      </p>
    </>
  );
};

export default EnterTheAmountAddInfo;
