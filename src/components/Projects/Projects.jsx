import React, { useState } from "react";
import styles from "./Projects.module.scss";
import FireIcon from "../../assets/SVG/fire.svg";
import RadioButton from "../../Shared UI/RadioButton/RadioButton";
import { useFormContext } from "react-hook-form";
import { PROJECTS } from "../../utils/projects";
import { closeModal, openModal } from "../../utils/helpers";
import Project from "../Project/Project";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");
  const { watch, register } = useFormContext();
  const [aboutProjectModalIsOpen, setAboutProjectModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={styles["projects"]}>
      {PROJECTS[watch("region")].map((project, index) => {
        const isChecked = watch("project") === project.name;
        const checkedClassName = isChecked && styles["isChecked"];

        return (
          <div
            className={`${styles["project"]} ${checkedClassName}`}
            key={index}
          >
            <RadioButton
              register={register}
              value={project.name}
              radioName={"project"}
            >
              <img
                className={styles["project-image"]}
                src={project.images[0]}
                alt={""}
                width={"100%"}
              />
              <div className={styles["project-label"]}>
                <img
                  src={FireIcon}
                  alt={"Fire Icon"}
                  className={styles["fire-icon"]}
                />{" "}
                <span>{t("project")}</span>
              </div>
              <h3>{project.name}</h3>
              <div className={styles["description-wrapper"]}>
                <p>
                  {t("from")} {project.price} €
                </p>
                <p>
                  ID: {project.id} | {project.floors}{" "}
                  {t("floors", { count: project.floors })} |{" "}
                  {t(`${project.type}`)}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  openModal(setAboutProjectModalIsOpen);
                  setSelectedProject({
                    ...project,
                    projectNumber: index + 1,
                    region: watch("region"),
                  });
                }}
                className={`${styles["more-button"]} button`}
              >
                {t("more")}
              </button>
            </RadioButton>
          </div>
        );
      })}
      <Project
        project={selectedProject}
        closeHandler={() => closeModal(setAboutProjectModalIsOpen)}
        modalStatus={aboutProjectModalIsOpen}
      />
    </div>
  );
};

export default Projects;
