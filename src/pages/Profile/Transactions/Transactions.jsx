import React, { useEffect, useState } from "react";
import Table from "../../../Shared UI/Table/Table";
import styles from "./Transactions.module.scss";
import { getAllTransactions } from "../../../Api/Transactions";

const columns = [
  {
    title: "ID",
    key: "id",
  },
  {
    title: "Status",
    key: "status",
  },
  {
    title: "Type",
    key: "type",
  },
  {
    title: "Amount",
    key: "amount",
  },
  {
    title: "Date",
    key: "date",
  },
  {
    title: "Executor",
    key: "executor",
  },
];

const Transactions = () => {
  const [userTransactions, setUserTransactions] = useState([]);

  useEffect(() => {
    const unsubscribeTransactions = getAllTransactions(setUserTransactions);

    return () => {
      unsubscribeTransactions();
    };
  }, []);

  return (
    <div className={styles["transactions"]}>
      <h3>Transactions</h3>
      <Table
        columns={columns}
        data={userTransactions}
        className={"transactions"}
      />
    </div>
  );
};

export default Transactions;
