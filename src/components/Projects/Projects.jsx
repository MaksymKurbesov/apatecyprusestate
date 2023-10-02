import React from "react";
import styles from "./Projects.module.scss";
import { PROJECTS } from "../../utils/consts";
import { Link } from "react-router-dom";
import FireIcon from "../../assets/SVG/fire.svg";
import RadioButton from "../../Shared UI/RadioButton/RadioButton";
import { useFormContext } from "react-hook-form";

const Projects = () => {
  const { watch, register } = useFormContext();

  return (
    <div className={styles["projects"]}>
      {PROJECTS["Limassol"].map((project, index) => {
        const isChecked = watch("project") === project.name;
        const checkedClassName = isChecked && styles["isChecked"];

        return (
          <div
            className={`${styles["project"]} ${checkedClassName}`}
            key={project.name}
          >
            <RadioButton
              register={register}
              value={project.name}
              radioName={"project"}
            >
              <img
                className={styles["project-image"]}
                src={project.images[index]}
                alt={""}
                width={"100%"}
                // height={"50%"}
              />
              <div className={styles["project-label"]}>
                <img
                  src={FireIcon}
                  alt={"Fire Icon"}
                  className={styles["fire-icon"]}
                />{" "}
                <span>Проект</span>
              </div>
              <h3>{project.name}</h3>
              <div className={styles["description-wrapper"]}>
                <p>
                  От {project.pricePerSquare}$ / м<sup>2</sup>
                </p>
                <p>
                  ID: 23862 | {project.floors} этажа | {project.type}
                </p>
              </div>
              <Link className={`${styles["more-button"]} button`} to={"/"}>
                Узнать больше
              </Link>
            </RadioButton>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
