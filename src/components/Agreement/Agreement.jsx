import React, { useCallback, useState } from "react";
import Modal from "../../Shared UI/Modal/Modal";
import styles from "./Agreement.module.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useTranslation } from "react-i18next";

const Agreement = ({ agreementHandler, closeHandler, modalStatus }) => {
  const { t } = useTranslation("agreement");
  const [agreementHeight, setAgreementHeight] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

  const agreementRef = useCallback(
    (node) => {
      if (node !== null) {
        setAgreementHeight(node.getBoundingClientRect().height);
      }
    },
    [tabIndex]
  );

  const declineAgreementHandler = () => {
    agreementHandler(false);
    closeHandler();
    setTabIndex(0);
  };

  const acceptAgreementHandler = () => {
    agreementHandler(true);
    closeHandler();
    setTabIndex(0);
  };

  return (
    <Modal handleClose={closeHandler} isOpen={modalStatus}>
      <div
        className={`${styles["agreement"]}`}
        style={{ "--height": `${agreementHeight + 90}px` }}
      >
        <h2>{t("title")}</h2>
        <p className={styles["subtitle"]}>{t("subtitle")}</p>
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className={styles["tabs"]}
        >
          <TabList className={styles["tab-list"]}>
            <Tab selectedClassName={styles["selected-tab"]}>
              1. {t("1.title")}
            </Tab>
            <Tab selectedClassName={styles["selected-tab"]}>
              2. {t("2.title")}
            </Tab>
            <Tab selectedClassName={styles["selected-tab"]}>
              3. {t("3.title")}
            </Tab>
            <Tab selectedClassName={styles["selected-tab"]}>
              4. {t("4.title")}
            </Tab>
            <Tab selectedClassName={styles["selected-tab"]}>
              5. {t("5.title")}
            </Tab>
          </TabList>
          <div ref={agreementRef} className={styles["tab"]}>
            <TabPanel className={styles["tab-panel"]}>
              <ul>
                <li>
                  <span>1.1</span> {t("1.1.1")}
                </li>
                <li>
                  <span>1.2</span> {t("1.1.2")}
                </li>
                <li>
                  <span>1.3</span> {t("1.1.3")}
                </li>
                <li>
                  <span>1.4</span> {t("1.1.4")}
                </li>
                <li>
                  <span>1.5</span> {t("1.1.5")}
                </li>
              </ul>
            </TabPanel>
            <TabPanel className={styles["tab-panel"]}>
              <ul>
                <li>
                  <span>2.1</span> {t("2.2.1")}
                </li>
                <li>
                  <span>2.2</span> {t("2.2.2")}
                </li>
                <li>
                  <span>2.3</span> {t("2.2.3")}
                </li>
                <li>
                  <span>2.4</span> {t("2.2.4")}
                </li>
                <li>
                  <span>2.5</span> {t("2.2.5")}
                </li>
                <li>
                  <span>2.6</span> {t("2.2.6")}
                </li>
                <li>
                  <span>2.7</span> {t("2.2.7")}
                </li>
                <li>
                  <span>2.8</span> {t("2.2.8")}
                </li>
                <li>
                  <span>2.9</span> {t("2.2.9")}
                </li>
              </ul>
            </TabPanel>
            <TabPanel className={styles["tab-panel"]}>
              <ul>
                <li>
                  <span>3.1</span> {t("3.3.1")}
                </li>
                <li>
                  <span>3.2</span> {t("3.3.2")}
                </li>
                <li>
                  <span>3.3</span> {t("3.3.3.3.3.0")}
                  <ul>
                    <li>
                      <span>3.3.1</span> {t("3.3.3.3.3.1")}
                    </li>
                    <li>
                      <span>3.3.2</span> {t("3.3.3.3.3.2")}
                    </li>
                  </ul>
                </li>
                <li>
                  <span>3.4</span> {t("3.3.4.3.4.0")}
                  <ul>
                    <li>
                      <span>3.4.1</span> {t("3.3.4.3.4.1")}
                    </li>
                    <li>
                      <span>3.4.2</span> {t("3.3.4.3.4.2")}
                    </li>
                    <li>
                      <span>3.4.3</span> {t("3.3.4.3.4.3")}
                    </li>
                    <li>
                      <span>3.4.4</span> {t("3.3.4.3.4.4")}
                    </li>
                  </ul>
                </li>
                <li>
                  <span>3.5</span> {t("3.3.5.3.5.0")}
                  <ul>
                    <li>
                      <span>3.5.1</span> {t("3.3.5.3.5.1")}
                    </li>
                    <li>
                      <span>3.5.2</span> {t("3.3.5.3.5.2")}
                    </li>
                  </ul>
                </li>
                <li>
                  <span>3.6</span> {t("3.3.6.3.6.0")}
                  <ul>
                    <li>
                      <span>3.6.1</span> {t("3.3.6.3.6.1")}
                    </li>
                  </ul>
                </li>
                <li>
                  <span>3.7</span> {t("3.3.7")}
                </li>
                <li>
                  <span>3.8</span> {t("3.3.8")}
                </li>
              </ul>
            </TabPanel>
            <TabPanel className={styles["tab-panel"]}>
              <ul>
                <li>
                  <span>4.1</span> {t("4.4.1")}
                </li>
                <li>
                  <span>4.2</span> {t("4.4.2")}
                </li>
              </ul>
            </TabPanel>
            <TabPanel className={styles["tab-panel"]}>
              <ul>
                <li>
                  <span>5.1</span> {t("5.5.1.5.1.0")}
                  <ul>
                    <li>
                      <span>5.1.1</span> {t("5.5.1.5.1.1")}
                    </li>
                  </ul>
                </li>
                <li>
                  <span>5.2</span> {t("5.5.2.5.2.0")}
                  <ul>
                    <li>
                      <span>5.2.1</span> {t("5.5.2.5.2.1")}
                    </li>
                    <li>
                      <span>5.2.2</span> {t("5.5.2.5.2.2")}
                    </li>
                    <li>
                      <span>5.2.3</span> {t("5.5.2.5.2.3")}
                    </li>
                    <li>
                      <span>5.2.4</span> {t("5.5.2.5.2.4")}
                    </li>
                  </ul>
                </li>
                <li>
                  <span>5.3</span> {t("5.5.3.5.3.0")}
                  <ul>
                    <li>
                      <span>5.3.1</span> {t("5.5.3.5.3.1")}
                    </li>
                    <li>
                      <span>5.3.2</span> {t("5.5.3.5.3.2")}
                    </li>
                    <li>
                      <span>5.3.3</span> {t("5.5.3.5.3.3")}
                    </li>
                    <li>
                      <span>5.3.4</span> {t("5.5.3.5.3.4")}
                    </li>
                    <li>
                      <span>5.3.5</span> {t("5.5.3.5.3.5")}
                    </li>
                    <li>
                      <span>5.3.6</span> {t("5.5.3.5.3.6")}
                    </li>
                    <li>
                      <span>5.3.7</span> {t("5.5.3.5.3.7")}
                    </li>
                    <li>
                      <span>5.3.8</span> {t("5.5.3.5.3.8")}
                    </li>
                    <li>
                      <span>5.3.9</span> {t("5.5.3.5.3.9")}
                    </li>
                    <li>
                      <span>5.3.10</span> {t("5.5.3.5.3.10")}
                    </li>
                    <li>
                      <span>5.3.11</span> {t("5.5.3.5.3.11")}
                    </li>
                  </ul>
                </li>
              </ul>
            </TabPanel>
            <div className={styles["buttons"]}>
              <button
                className={"close-button button"}
                onClick={declineAgreementHandler}
              >
                {t("decline")}
              </button>
              <button className={"button"} onClick={acceptAgreementHandler}>
                {t("accept")}
              </button>
            </div>
          </div>
        </Tabs>
      </div>
    </Modal>
  );
};

export default Agreement;
