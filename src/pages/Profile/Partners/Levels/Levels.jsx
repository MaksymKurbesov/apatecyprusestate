import React from "react";
import styles from "./Levels.module.scss";
import Table from "../../../../Shared UI/Table/Table";
import Accordion from "../../../../components/Accordion/Accordion";
import {
  getTotalActiveReferralsByLevel,
  getTotalIncomeFromReferrals,
} from "../../../../utils/helpers/calculates";
import { normalizeReferralLevel } from "../../../../utils/helpers/transformersData";

const columns = [
  {
    title: "Nickname",
    key: "nickname",
  },
  {
    title: "Sponsor",
    key: "sponsor",
  },
  {
    title: "Referrals",
    key: "referrals",
  },
  {
    title: "Registration Date",
    key: "registrationDate",
  },
  {
    title: "Deposited",
    key: "deposited",
  },
];

const Levels = ({ referrals }) => {
  const accordionData = Object.values(referrals).map((level, index) => {
    return {
      title: (
        <div className={styles["level"]}>
          <p className={styles["level-number"]}>Level {index + 1}</p>
          <p>
            Referrals: <span>{level.length}</span>
          </p>
          <p className={styles["active-referrals"]}>
            Active: <span>{getTotalActiveReferralsByLevel(level)}</span>
          </p>
          <p>
            Total Income:{" "}
            <span>${getTotalIncomeFromReferrals(level, index + 1)}</span>
          </p>
        </div>
      ),
      content: (
        <Table
          columns={columns}
          data={normalizeReferralLevel(level)}
          className={"levels"}
        />
      ),
    };
  });

  return (
    <div className={styles["levels"]}>
      <Accordion data={accordionData} className={"levels"} />
    </div>
  );
};

export default Levels;
