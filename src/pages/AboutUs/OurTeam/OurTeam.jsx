import React from "react";
import styles from "./OurTeam.module.scss";
import Title from "../../../Shared UI/Title/Title";
import Angelos from "../../../assets/images/team members/Angelos Georgiou.jfif";
import Alexandra from "../../../assets/images/team members/Alexandra Cleovoulou.jfif";
import Niki from "../../../assets/images/team members/Niki Chatzimina.jfif";
import Stefanos from "../../../assets/images/team members/stefanos-kyriakou.jpg";
import Trifonos from "../../../assets/images/team members/Trifonas Mamas.jfif";
import Pampina from "../../../assets/images/team members/Pampina Votsi.jfif";
import { useTranslation } from "react-i18next";

const TEAM = [
  {
    position: "Director",
    name: "Pampina Votsi",
    photo: Pampina,
  },
  {
    position: "Registered Estate Agent",
    name: "Trifonas Mamas",
    photo: Trifonos,
  },
  {
    position: "Managing Director",
    name: "Angelos Georgiou",
    photo: Angelos,
  },
  {
    position: "Property Consultant",
    name: "Alexandra Cleovoulou",
    photo: Alexandra,
  },
  {
    position: "Property Consultant",
    name: "Stefanos Kyriakou",
    photo: Stefanos,
  },
  {
    position: "Analyst and Academic Advisor",
    name: "Niki Chatzimina",
    photo: Niki,
  },
];

const OurTeam = () => {
  const { t } = useTranslation("about-us");

  return (
    <section className={styles["our-team"]}>
      <div className={"container"}>
        <Title text={t("our_team.title")} style={{ marginBottom: 20 }} />
        <p className={styles["subtitle"]}>{t("our_team.description")}</p>
        <ul className={styles["team-list"]}>
          {TEAM.map(({ position, name, photo }, index) => {
            return (
              <li className={styles["member"]} key={index}>
                <img
                  className={styles["photo"]}
                  src={photo}
                  alt={"Team member"}
                  width={"100%"}
                  height={350}
                />
                <span>{position}</span>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OurTeam;
