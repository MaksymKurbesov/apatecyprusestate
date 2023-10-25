import React, { useContext, useEffect, useState } from "react";
import styles from "./Partners.module.scss";
import ReferralLink from "./ReferralLink/ReferralLink";
import Percentage from "./Percentage/Percentage";
import UserInfo from "./UserInfo/UserInfo";
import Levels from "./Levels/Levels";
import { doc, getDoc } from "firebase/firestore";
import { useOutletContext } from "react-router-dom";
import { FirebaseContext } from "../../../index";
import { secondsToString } from "../../../utils/helpers/date";
import {
  getTotalActiveReferrals,
  getTotalReferrals,
} from "../../../utils/helpers/calculates";

const Partners = () => {
  const { userData, userDeposits } = useOutletContext();
  const { db } = useContext(FirebaseContext);
  const [referrals, setReferrals] = useState({});

  const fetchAdditionalDataForUser = async (user) => {
    const userDoc = doc(db, "users", user);
    const userSnap = await getDoc(userDoc);

    return userSnap.data();
  };

  useEffect(() => {
    const fetchData = async () => {
      let updatedData = {};

      const promises = Object.keys(userData.referredTo).map(async (key) => {
        const usersArray = userData.referredTo[key];

        updatedData[key] = await Promise.all(
          usersArray.map(async (userNick) => {
            const user = await fetchAdditionalDataForUser(userNick);

            return {
              ...user,
              sponsor: user.referredBy,
              registrationDate: secondsToString(user.registrationDate.seconds),
            };
          })
        );
      });

      await Promise.all(promises);

      setReferrals(updatedData);
    };

    fetchData();
  }, []);

  const totalReferralsCount = getTotalReferrals(referrals);

  const activeReferralsCount = getTotalActiveReferrals(referrals);

  if (!referrals) {
    return;
  }

  return (
    <div className={styles["partners"]}>
      <ReferralLink
        referredBy={userData.referredBy}
        nickname={userData.nickname}
      />
      <Percentage />
      <UserInfo
        totalReferralsCount={totalReferralsCount}
        totalActiveReferrals={activeReferralsCount}
        purchasedDeposits={userDeposits.length}
        userRank={userData.rank || "DEFAULT"}
      />
      <Levels referrals={referrals} userRank={userData.rank || "DEFAULT"} />
    </div>
  );
};

export default Partners;
