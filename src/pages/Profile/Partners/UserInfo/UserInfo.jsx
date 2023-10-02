import React from "react";
import styles from "./UserInfo.module.scss";
import { ReactComponent as Coins } from "../../../../assets/SVG/coins.svg";
import { ReactComponent as TotalReferrals } from "../../../../assets/SVG/total-referrals.svg";
import { ReactComponent as PurchasedDeposits } from "../../../../assets/SVG/purchased-deposits.svg";

const UserInfo = ({
  totalReferrals,
  totalActiveReferrals,
  purchasedDeposits,
}) => {
  return (
    <div className={`${styles["user-info-wrapper"]} custom-bg custom-border`}>
      <div className={`${styles["user-info"]}`}>
        <div className={styles["column"]}>
          <Coins />
          <div>
            <p>Your status</p>
            <span>Partner</span>
          </div>
        </div>
        <div className={styles["column"]}>
          <TotalReferrals />
          <div className={styles["total-referrals"]}>
            <div>
              <p>Total referrals</p>
              <span>{totalReferrals}</span>
            </div>
            <div className={styles["active-referrals"]}>
              <p>Active</p>
              <span>{totalActiveReferrals}</span>
            </div>
          </div>
        </div>
        <div
          className={`${styles["column"]} ${styles["active-referrals-column"]}`}
        >
          <TotalReferrals />
          <div>
            <p>Active</p>
            <span>{totalActiveReferrals}</span>
          </div>
        </div>
        <div className={styles["column"]}>
          <PurchasedDeposits />
          <div className={styles["info"]}>
            <p>Purchased deposits</p>
            <span>{purchasedDeposits}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
