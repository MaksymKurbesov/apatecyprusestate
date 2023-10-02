import React, { useEffect } from "react";
import Wallets from "./Wallets/Wallets";
import styles from "./PersonalArea.module.scss";
import NextAccrual from "./NextAccrual/NextAccrual";
import UserStatistic from "./UserStatistic/UserStatistic";
import Deposits from "./Deposits/Deposits";
import { ScrollRestoration, useOutletContext } from "react-router-dom";
import { getNearestAccrual } from "../../../utils/helpers";
import { checkDepositsForAccruals } from "../../../Api/Deposits";

const PersonalArea = () => {
  const { userData, userDeposits } = useOutletContext();
  const { invested, earned, withdrawn, referrals } = userData;

  useEffect(() => {
    const checkDeposits = async () => {
      await checkDepositsForAccruals();
    };

    checkDeposits();
  }, []);

  return (
    <div className={styles["personal-area"]}>
      <Wallets wallets={userData.wallets} />
      <NextAccrual
        nearestAccrual={getNearestAccrual(userDeposits).lastAccrual}
        days={getNearestAccrual(userDeposits).days}
      />
      <UserStatistic statistic={{ invested, earned, withdrawn, referrals }} />
      <Deposits deposits={userDeposits} />
      <ScrollRestoration />
    </div>
  );
};

export default PersonalArea;
