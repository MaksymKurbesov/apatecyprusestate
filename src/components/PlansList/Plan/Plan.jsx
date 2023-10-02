import React from "react";
import styles from "./Plan.module.scss";
import FireIcon from "../../../assets/SVG/fire.svg";
import CyprusRegions from "../../CyprusRegions/CyprusRegions";

const Plan = ({ plan, isPayNow = true }) => {
  const { planNumber, name, inDay, days, minDeposit, maxDeposit } = plan;

  return (
    <div className={styles["plan"]}>
      <CyprusRegions activeRegion={name} />
      <div className={styles["information-wrapper"]}>
        <div className={styles["information"]}>
          <img
            src={FireIcon}
            alt={"Fire Icon"}
            className={styles["fire-icon"]}
          />
          <span>Region</span>
          <h3>{name}</h3>
        </div>
        {isPayNow && (
          <button className={`${styles["pay-now"]} button`}>Pay Now</button>
        )}
      </div>
      <ul className={styles["statistic"]}>
        <li>
          <p>{planNumber > 3 ? "В конце срока" : "В день"}</p>
          <span>{inDay}%</span>
        </li>
        <li>
          <p>Days</p>
          <span>{days}</span>
        </li>
        <li>
          <p>Min. deposit</p>
          <span>{minDeposit}$</span>
        </li>
        <li>
          <p>Max. deposit</p>
          <span>{name === "Canal Heights6" ? `∞` : `${maxDeposit}$`}</span>
        </li>
      </ul>
    </div>
  );
};

export default Plan;
