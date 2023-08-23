import React from "react";
import Icon1 from "../../../../assets/SVG/1 benefit icon.svg";
import Icon2 from "../../../../assets/SVG/2 benefit icon.svg";
import Icon3 from "../../../../assets/SVG/3 benefit icon.svg";
import Icon4 from "../../../../assets/SVG/4 benefit icon.svg";
import Icon5 from "../../../../assets/SVG/5 benefit icon.svg";
import Icon6 from "../../../../assets/SVG/6 benefit icon.svg";
import styles from "./JobBenefits.module.scss";
import Title from "../../../../Shared UI/Title/Title";

const BENEFITS = [
  {
    title: "Impressive results for the company",
    text: "Demand and interest in Trust Investment is constantly growing and our experience accumulates and always allows us to achieve our goals.",
    icon: Icon1,
  },
  {
    title: "A modern online investment platform",
    text: "An online platform with a simple and informative interface has been developed for customer convenience.",
    icon: Icon2,
  },
  {
    title: "Quick profit withdrawal",
    text: "You will get your profit within 24 hours after submitting your order, even on weekends and public holidays.",
    icon: Icon3,
  },
  {
    title: "Low entry threshold",
    text: "You can start investing and earning with as little as $100. Advantageous plans for everyone.",
    icon: Icon4,
  },
  {
    title: "Our referral program",
    text: "With us you get the opportunity to attract friends and associates to invest, while receiving additional income.",
    icon: Icon5,
  },
  {
    title: "Protection of our clients",
    text: "Our partners' peace of mind and their confidence in us is a priority for our company, which is why our platform is protected from the misuse of third parties.",
    icon: Icon6,
  },
];

const JobBenefits = () => {
  return (
    <section className={`${styles["job-benefits"]} container`}>
      <Title text={"Job Benefits"} />
      <ul className={styles["benefits-list"]}>
        {BENEFITS.map(({ title, text, icon }) => {
          return (
            <li key={title} className={styles["benefit"]}>
              <div className={styles["icon"]}>
                <img src={icon} alt={"Icon"} />
              </div>

              <h4>{title}</h4>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default JobBenefits;
