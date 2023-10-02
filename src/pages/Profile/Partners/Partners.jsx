import React, { useContext, useEffect, useState } from "react";
import styles from "./Partners.module.scss";
import ReferralLink from "./ReferralLink/ReferralLink";
import Percentage from "./Percentage/Percentage";
import UserInfo from "./UserInfo/UserInfo";
import Levels from "./Levels/Levels";
import { doc, getDoc } from "firebase/firestore";
import { useOutletContext } from "react-router-dom";
import { FirebaseContext } from "../../../index";
import {
  getTotalActiveReferrals,
  getTotalReferrals,
} from "../../../utils/helpers/calculates";
import { secondsToString } from "../../../utils/helpers/date";

const Partners = () => {
  const { userData, userDeposits } = useOutletContext();
  const { db } = useContext(FirebaseContext);

  const [referrals, setReferrals] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  });

  useEffect(() => {
    Object.values(userData.referredTo).forEach((level, index) => {
      level.map(async (user) => {
        const userDoc = doc(db, "users", user);
        const userSnap = await getDoc(userDoc);

        if (!userSnap.exists()) return;

        const { referredBy, registrationDate, referredTo, ...props } =
          userSnap.data();

        const referredByRef = await getDoc(doc(db, "users", referredBy));

        if (!referredByRef.exists()) return;

        setReferrals((prevState) => {
          return {
            ...prevState,
            [index + 1]: [
              ...prevState[index + 1],
              {
                ...props,
                sponsor: referredBy,
                referrals: getTotalReferrals(referredTo),
                registrationDate: secondsToString(registrationDate.seconds),
                // invested: `$${props.invested}`,
              },
            ],
          };
        });
      });
    });
  }, []);

  // if (loading) {
  //   return null;
  // }

  return (
    <div className={styles["partners"]}>
      <ReferralLink
        referredBy={userData.referredBy}
        nickname={userData.nickname}
      />
      <Percentage />
      <UserInfo
        totalReferrals={getTotalReferrals(referrals)}
        totalActiveReferrals={getTotalActiveReferrals(referrals)}
        purchasedDeposits={userDeposits.length}
      />
      <Levels referrals={referrals} />
    </div>
  );
};

export default Partners;
