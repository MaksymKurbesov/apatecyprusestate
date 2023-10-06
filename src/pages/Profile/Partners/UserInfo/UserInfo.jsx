import React from "react";
import styles from "./UserInfo.module.scss";
import { ReactComponent as Coins } from "../../../../assets/SVG/coins.svg";
import { ReactComponent as TotalReferrals } from "../../../../assets/SVG/total-referrals.svg";
import { ReactComponent as PurchasedDeposits } from "../../../../assets/SVG/purchased-deposits.svg";
import { useTranslation } from "react-i18next";

const UserInfo = ({
  totalReferrals,
  totalActiveReferrals,
  purchasedDeposits,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles["user-info-wrapper"]} custom-bg custom-border`}>
      <div className={`${styles["user-info"]}`}>
        <div className={styles["column"]}>
          <Coins />
          <div>
            <p>{t("referrals.referrals")}</p>
            <span>{t("referrals.partner")}</span>
          </div>
        </div>
        <div className={styles["column"]}>
          <TotalReferrals />
          <div className={styles["total-referrals"]}>
            <div>
              <p>{t("referrals.total_referrals")}</p>
              <span>{totalReferrals}</span>
            </div>
            <div className={styles["active-referrals"]}>
              <p>{t("referrals.active_referrals")}</p>
              <span>{totalActiveReferrals}</span>
            </div>
          </div>
        </div>
        <div
          className={`${styles["column"]} ${styles["active-referrals-column"]}`}
        >
          <TotalReferrals />
          <div>
            <p>{t("referrals.active_referrals")}</p>
            <span>{totalActiveReferrals}</span>
          </div>
        </div>
        <div className={styles["column"]}>
          <PurchasedDeposits />
          <div className={styles["info"]}>
            <p>{t("referrals.purchased_deposits")}</p>
            <span>{purchasedDeposits}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
