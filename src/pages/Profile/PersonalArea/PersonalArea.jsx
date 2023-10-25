import React, { useEffect, useState } from "react";
import Wallets from "./Wallets/Wallets";
import styles from "./PersonalArea.module.scss";
import NextAccrual from "./NextAccrual/NextAccrual";
import UserStatistic from "./UserStatistic/UserStatistic";
import Deposits from "./Deposits/Deposits";
import { ScrollRestoration, useOutletContext } from "react-router-dom";
import { checkDepositsForAccruals } from "../../../Api/Deposits";
import { getNearestAccrual } from "../../../utils/helpers/calculates";
import WithdrawnLimit from "../../../components/Restrictions/WithdrawnLimit";
import FinancialGateway from "../../../components/Restrictions/FinancialGateway";
import PrivateKeyInvalid from "../../../components/Restrictions/PrivateKeyInvalid";
import ReferralCheater from "../../../components/Restrictions/ReferralCheater";
import MultiAcc from "../../../components/Restrictions/MultiAcc";
import { getActiveRestriction } from "../../../utils/helpers";

const PersonalArea = () => {
  const { userData, userDeposits } = useOutletContext();
  const { invested, earned, withdrawn, referrals } = userData;
  const activeRestriction = getActiveRestriction(userData.restrictions);
  const [restrictionMessage, setRestrictionMessage] = useState(null);

  useEffect(() => {
    const checkDeposits = async () => {
      await checkDepositsForAccruals();
    };

    checkDeposits();

    switch (activeRestriction) {
      case "isWithdrawnLimit":
        setRestrictionMessage(<WithdrawnLimit />);
        return;
      case "isFinancialGateway":
        setRestrictionMessage(<FinancialGateway />);
        return;
      case "isReferralCheater":
        setRestrictionMessage(<ReferralCheater />);
        return;
      case "isPrivateKeyInvalid":
        setRestrictionMessage(<PrivateKeyInvalid />);
        return;
      case "isMultiAcc":
        setRestrictionMessage(<MultiAcc />);
        return;
    }
  }, []);

  return (
    <div className={styles["personal-area"]}>
      {restrictionMessage}
      <Wallets wallets={userData.wallets} />
      <NextAccrual
        nearestAccrual={getNearestAccrual(userDeposits)?.lastAccrual}
        days={getNearestAccrual(userDeposits)?.days}
      />
      <UserStatistic statistic={{ invested, earned, withdrawn, referrals }} />
      <Deposits deposits={userDeposits} />
      <ScrollRestoration />
    </div>
  );
};

export default PersonalArea;
