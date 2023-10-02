import React from "react";
import "./Deposit.scss";
import styles from "./Deposit.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Table from "../../../../Shared UI/Table/Table";
import { Link } from "react-router-dom";
import { normalizeDeposits } from "../../../../utils/helpers/transformersData";

const columns = [
  {
    title: "Region",
    key: "region",
    responsive: [568],
    width: "8%",
  },
  {
    title: "Progress",
    key: "progress",
    responsive: [568],
    // width: "36%",
  },
  {
    title: <p>Next Accrual</p>,
    // title: "Next Accrual",
    key: "nextAccrual",
    responsive: [568],
    width: "10%",
  },
  {
    title: "Amount",
    key: "amount",
    responsive: [568],
    width: "8%",
  },
  {
    title: "Received",
    key: "received",
    responsive: [568],
    width: "8%",
  },
  {
    title: <p>Will Received</p>,
    // title: "Will Received",
    key: "willReceived",
    responsive: [568],
    width: "8%",
  },
  {
    title: <p>Date Open</p>,
    // title: "Date Open",
    key: "dateOpen",
    responsive: [568],
    width: "12%",
  },
  {
    title: <p>Date Close</p>,
    // title: "Date Close",
    key: "dateClose",
    responsive: [568],
    width: "12%",
  },
];

const Deposits = ({ deposits }) => {
  const activeDeposits = normalizeDeposits(deposits).filter(
    (deposit) => deposit.isActive
  );

  const completedDeposits = normalizeDeposits(deposits).filter(
    (deposit) => !deposit.isActive
  );

  return (
    <div className={styles["deposits"]}>
      <Tabs>
        <TabList>
          <Tab>Active Deposits</Tab>
          <Tab>Completed Deposits</Tab>
        </TabList>
        <TabPanel>
          {activeDeposits.length !== 0 ? (
            <Table
              columns={columns}
              data={activeDeposits}
              className={"deposits"}
            />
          ) : (
            <div className={styles["deposits-empty"]}>
              <p>
                Кажется, у вас пока нет открытых депозитов в вашем личном
                кабинете.
              </p>
              <p>
                Если вы хотите открыть депозит, пожалуйста, перейдите в раздел{" "}
                <Link to={"/profile/make-deposit"}>Открыть депозит</Link>
              </p>
            </div>
          )}
        </TabPanel>

        <TabPanel>
          {completedDeposits.length !== 0 ? (
            <Table
              columns={columns}
              data={completedDeposits}
              className={"deposits"}
            />
          ) : (
            <p className={styles["deposits-empty"]}>
              У вас пока нет завершенных депозитов.
            </p>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Deposits;
