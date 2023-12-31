import React from "react";
import styles from "./ReferralLink.module.scss";
import { ReactComponent as ReferralArrows } from "../../../../assets/SVG/referral link.svg";
import CopyText from "../../../../components/CopyText/CopyText";
import { useTranslation } from "react-i18next";

const ReferralLink = ({ referredBy, nickname }) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles["referral-link"]} custom-bg custom-border`}>
      <div className={styles["title"]}>
        <div className={styles["your-referral-link"]}>
          <ReferralArrows />
          <p>{t("referrals.your_referral_link")}</p>
        </div>
        <div className={styles["your-sponsor"]}>
          <p className={styles["sponsor"]}>{t("referrals.your_sponsor")}</p>
          <span className={styles["referred-by"]}>{referredBy}</span>
        </div>
      </div>
      <div className={styles["copy-text-wrapper"]}>
        <CopyText
          text={`https://${
            new URL(window.location.href).hostname
          }/authorization/sign-up?ref=${nickname}`}
        />
      </div>
    </div>
  );
};

export default ReferralLink;
