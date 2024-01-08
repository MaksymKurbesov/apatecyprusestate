import React from "react";
import { useTranslation } from "react-i18next";

const COMMISSION = {
  "TRC20 Tether": [1, "USD"],
  "Perfect Money": [0.5, "%"],
  Bitcoin: [5.8, "USD"],
  Ethereum: [3.5, "USD"],
};

const calculateCommission = (amount, wallet) => {
  if (wallet === "Perfect Money") {
    return (amount - amount * 0.05).toFixed(2);
  }

  if (amount === 0) return 0;

  return (amount - COMMISSION[wallet][0]).toFixed(2);
};

const EnterTheAmountAddInfo = ({ amount, selectedWallet }) => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        {t("bill.will_be_withdrawn")}:
        <span>
          {!isNaN(amount) ? calculateCommission(amount, selectedWallet) : 0} USD
        </span>
      </p>
      <p>
        {t("bill.commission")}:
        <span>
          {COMMISSION[selectedWallet][0]} {COMMISSION[selectedWallet][1]}
        </span>
      </p>
    </>
  );
};

export default EnterTheAmountAddInfo;
