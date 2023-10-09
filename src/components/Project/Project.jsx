import React from "react";
import styles from "./Project.module.scss";
import Slider from "react-slick";
import Modal from "../../Shared UI/Modal/Modal";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { ReactComponent as DescriptionIcon } from "../../assets/SVG/description.svg";
import { ReactComponent as FeaturesIcon } from "../../assets/SVG/features.svg";
import { ReactComponent as GeoIcon } from "../../assets/SVG/geo.svg";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../hooks/useWindowSize";

const setSlidesToShow = (windowSize) => {
  let slidesToShow;

  if (windowSize > 1200) {
    slidesToShow = 3;
  }

  if (windowSize <= 1200) {
    slidesToShow = 2;
  }

  if (windowSize <= 768) {
    slidesToShow = 1;
  }

  return slidesToShow;
};

const Project = ({ project, closeHandler, modalStatus }) => {
  const { t } = useTranslation();
  const windowDimension = useWindowSize();

  if (!project) {
    return null;
  }

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: setSlidesToShow(windowDimension),
    slidesToScroll: 1,
  };

  return (
    <Modal handleClose={closeHandler} isOpen={modalStatus} closeOnEsc>
      <div className={styles["wrapper"]}>
        <h3 className={styles["name"]}>{project.name}</h3>
        <div className={styles["images"]}>
          <Slider {...settings}>
            {project.images.map((image, index) => {
              return (
                <div className={styles["slide"]} key={index}>
                  <img src={image} alt={""} width={"100%"} height={350} />
                </div>
              );
            })}
          </Slider>
        </div>
        <Tabs>
          <TabList className={styles["tab-list"]}>
            <Tab
              className={styles["tab"]}
              selectedClassName={styles["selected-tab"]}
            >
              <div className={styles["tab-wrapper"]}>
                <DescriptionIcon className={styles["tab-icon"]} />
                <span>{t("projects.description")}</span>
              </div>
            </Tab>
            <Tab
              className={styles["tab"]}
              selectedClassName={styles["selected-tab"]}
            >
              <div className={styles["tab-wrapper"]}>
                <FeaturesIcon className={styles["tab-icon"]} />
                <span>{t("projects.features")}</span>
              </div>
            </Tab>
            <Tab
              className={styles["tab"]}
              selectedClassName={styles["selected-tab"]}
            >
              <div className={styles["tab-wrapper"]}>
                <GeoIcon className={styles["tab-icon"]} />
                <span>{t("projects.distances")}</span>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <div className={styles["description"]}>{project.description}</div>
          </TabPanel>
          <TabPanel>
            <table className={styles["features-table"]}>
              <tbody>
                <tr>
                  <td>{t("projects.type")}</td>
                  <td>{t(`projects.${project.type}`)}</td>
                </tr>
                <tr>
                  <td>{t("projects.district")}</td>
                  <td>{t(`projects.${project.district}`)}</td>
                </tr>
                <tr>
                  <td>{t("projects.square")}</td>
                  <td>
                    {project.square} {t("projects.m")}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>{t("projects.terrace_square")}</td>
                  <td>
                    {project.terraceSquare} {t("projects.m")}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>{t("projects.sleeping_rooms")}</td>
                  <td>{project.bedRooms}</td>
                </tr>
                <tr>
                  <td>{t("projects.bathrooms")}</td>
                  <td>{project.bathrooms}</td>
                </tr>
                <tr>
                  <td>{t("projects.floors", { count: project.floors })}</td>
                  <td>{project.floors}</td>
                </tr>
                {project.features.map((feature, index) => (
                  <tr key={index}>
                    <td>{t(`projects.${feature}`)}</td>
                    <td>{t(`projects.Есть`)}</td>
                  </tr>
                ))}
                <tr>
                  <td>{t("projects.energy_efficiency")}</td>
                  <td>{project.energyEfficiency}</td>
                </tr>
                <tr>
                  <td>{t("projects.status")}</td>
                  <td>{t(`projects.${project.status}`)}</td>
                </tr>
                <tr>
                  <td>{t("projects.commissioning")}</td>
                  <td>
                    {project.endDateMonth !== "" &&
                      t(`months.${project.endDateMonth}`)}{" "}
                    {project.endDateYear}
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
          <TabPanel>
            <table className={styles["distance-table"]}>
              <tbody>
                {project.distances.map((item) => {
                  for (const key in item) {
                    return (
                      <tr key={key}>
                        <td>{t(`projects.${key}`)}</td>
                        <td>
                          {item[key][0]} {t(`projects.${item[key][1]}`)}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </div>
      <div onClick={closeHandler} className={styles["close-button"]}>
        <span></span>
        <span></span>
      </div>
    </Modal>
  );
};

export default Project;
