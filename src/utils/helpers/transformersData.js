import { ONE_DAY_IN_SECONDS, WALLETS } from "../consts";
import Progress from "../../Shared UI/Progress/Progress";
import Countdown from "../../components/Countdown/Countdown";
import ColoredLabel from "../../components/ColoredLabel/ColoredLabel";
import React from "react";
import { calculateTotalDeposit } from "./calculates";
import { addDays, secondsToString } from "./date";

export const normalizeReferralLevel = (referralLevel) => {
  return referralLevel.map((item) => {
    const totalDeposit = calculateTotalDeposit(item.wallets);

    return {
      ...item,
      deposited: `$${totalDeposit}`,
    };
  });
};

export const normalizeUserWallets = (userWallets) => {
  return WALLETS.map((wallet) => {
    return {
      ...wallet,
      number: userWallets[wallet.name].number,
    };
  });
};

export const normalizeDeposits = (deposits) => {
  return deposits.map((deposit) => {
    const {
      planNumber,
      region,
      amount,
      received,
      willReceived,
      date,
      lastAccrual,
      days,
      charges,
      isActive,
    } = deposit;

    return {
      region,
      progress: (
        <div className={"charges-wrapper"}>
          <Progress percent={(charges / (planNumber > 3 ? 1 : days)) * 100} />
          <p className={"charges"}>
            {charges} / {planNumber > 3 ? 1 : days}
          </p>
        </div>
      ),
      nextAccrual: isActive ? (
        planNumber > 3 ? (
          <Countdown deadline={(lastAccrual.seconds + days * 86400) * 1000} />
        ) : (
          <Countdown
            deadline={(lastAccrual.seconds + ONE_DAY_IN_SECONDS) * 1000}
          />
        )
      ) : (
        <ColoredLabel text={"Выполнено"} />
      ),
      amount: `$${amount.toFixed(2)}`,
      received: `$${received.toFixed(2)}`,
      willReceived: `$${willReceived.toFixed(2)}`,
      dateOpen: secondsToString(date.seconds, true),
      dateClose: secondsToString(addDays(date, days) / 1000, true),
      isActive,
    };
  });
};
