import React, { useState } from "react";
import styles from "./Project.module.scss";
import Slider from "react-slick";
import Modal from "../../Shared UI/Modal/Modal";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { ReactComponent as DescriptionIcon } from "../../assets/SVG/description.svg";
import { ReactComponent as FeaturesIcon } from "../../assets/SVG/features.svg";
import { ReactComponent as GeoIcon } from "../../assets/SVG/geo.svg";
import { Trans, useTranslation } from "react-i18next";
import { ReactComponent as Chevron } from "../../assets/SVG/chevron-down.svg";
import { useWindowSize } from "../../hooks/useWindowSize";

const Project = ({ project, closeHandler, modalStatus }) => {
  const { t } = useTranslation(["projects"]);
  const windowSize = useWindowSize();
  const [sliderFor, setSliderFor] = useState(null);
  const [sliderNav, setSliderNav] = useState(null);

  if (!project) {
    return null;
  }

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  const settingsNav = {
    slidesToShow: windowSize >= 768 ? 3 : 4,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    vertical: windowSize >= 768,
    verticalSwiping: windowSize >= 768,
  };

  const name = project.name.replace(/#\d+$/, "");
  const id = project.name.match(/#\d+$/);

  return (
    <Modal handleClose={closeHandler} isOpen={modalStatus} closeOnEsc>
      <div className={styles["wrapper"]}>
        <h3 className={styles["name"]}>
          {name}
          <span>{id}</span>
        </h3>
        <div className={styles["images"]}>
          <div className={styles["slider-for"]}>
            <Slider
              {...settingsFor}
              asNavFor={sliderNav}
              ref={(slider1) => setSliderFor(slider1)}
            >
              {project.images.map((image, index) => {
                return (
                  <div className={styles["slide"]} key={index}>
                    <img src={image} alt={""} width={"100%"} />
                  </div>
                );
              })}
            </Slider>
            <>
              <button
                className={styles["slick-arrow-prev"]}
                onClick={() => sliderNav.slickPrev()}
              >
                <Chevron />
              </button>
              <button
                className={styles["slick-arrow-next"]}
                onClick={() => sliderNav.slickNext()}
              >
                <Chevron />
              </button>
            </>
          </div>
          <div className={styles["slider-nav"]}>
            <Slider
              {...settingsNav}
              asNavFor={sliderFor}
              ref={(slider2) => setSliderNav(slider2)}
            >
              {project.images.map((image, index) => {
                return (
                  <div className={styles["slide"]} key={index}>
                    <img src={image} alt={""} width={"100%"} height={"100%"} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <Tabs>
          <TabList className={styles["tab-list"]}>
            <Tab
              className={styles["tab"]}
              selectedClassName={styles["selected-tab"]}
            >
              <div className={styles["tab-wrapper"]}>
                <DescriptionIcon className={styles["tab-icon"]} />
                <span>{t("description")}</span>
              </div>
            </Tab>
            <Tab
              className={styles["tab"]}
              selectedClassName={styles["selected-tab"]}
            >
              <div className={styles["tab-wrapper"]}>
                <FeaturesIcon className={styles["tab-icon"]} />
                <span>{t("features")}</span>
              </div>
            </Tab>
            <Tab
              className={styles["tab"]}
              selectedClassName={styles["selected-tab"]}
            >
              <div className={styles["tab-wrapper"]}>
                <GeoIcon className={styles["tab-icon"]} />
                <span>{t("distances")}</span>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <div className={styles["description"]}>
              <Trans
                i18nKey={t(`${project.region}.${project.projectNumber}`)}
                t={t}
                components={[<p />, <br />]}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <table className={styles["features-table"]}>
              <tbody>
                <tr>
                  <td>{t("type")}</td>
                  <td>{t(`${project.type}`)}</td>
                </tr>
                <tr>
                  <td>{t("district")}</td>
                  <td>{t(`${project.district}`)}</td>
                </tr>
                <tr>
                  <td>{t("square")}</td>
                  <td>
                    {project.square} {t("m")}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>{t("terrace_square")}</td>
                  <td>
                    {project.terraceSquare} {t("m")}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>{t("sleeping_rooms")}</td>
                  <td>{project.bedRooms}</td>
                </tr>
                <tr>
                  <td>{t("bathrooms")}</td>
                  <td>{project.bathrooms}</td>
                </tr>
                <tr>
                  <td>{t("floors", { count: project.floors })}</td>
                  <td>{project.floors}</td>
                </tr>
                {project.features.map((feature, index) => (
                  <tr key={index}>
                    <td>{t(`${feature}`)}</td>
                    <td>{t(`Есть`)}</td>
                  </tr>
                ))}
                <tr>
                  <td>{t("energy_efficiency")}</td>
                  <td>{project.energyEfficiency}</td>
                </tr>
                <tr>
                  <td>{t("status")}</td>
                  <td>{t(`${project.status}`)}</td>
                </tr>
                <tr>
                  <td>{t("commissioning")}</td>
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
                        <td>{t(`${key}`)}</td>
                        <td>
                          {item[key][0]} {t(`${item[key][1]}`)}
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
