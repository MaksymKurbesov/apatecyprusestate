import React from "react";
import styles from "./Plan.module.scss";
import Button from "../../Shared UI/Button/Button";
import FireIcon from "../../assets/SVG/fire.svg";

const Plan = ({ plan }) => {
  const { name, planImage, inDay, days, minDeposit, maxDeposit } = plan;

  return (
    <div className={styles["plan"]}>
      <img src={planImage} alt={"Plan"} width={"100%"} />
      <div className={styles["information-wrapper"]}>
        <div className={styles["information"]}>
          <img
            src={FireIcon}
            alt={"Fire Icon"}
            className={styles["fire-icon"]}
          />
          <span>Plan</span>
          <h3>{name}</h3>
        </div>
        <Button text={"Pay Now"} />
      </div>
      <ul className={styles["statistic"]}>
        <li>
          <p>In a day</p>
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
          <span>{maxDeposit}$</span>
        </li>
      </ul>
    </div>
  );
};

export default Plan;
