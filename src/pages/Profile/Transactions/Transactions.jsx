import React, { useEffect, useState } from "react";
import Table from "../../../Shared UI/Table/Table";
import styles from "./Transactions.module.scss";
import {
  getAllTransactions,
  getNextTransactions,
  getTransactionsCount,
} from "../../../Api/Transactions";

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
  const [transactionsCount, setTransactionsCount] = useState(null);
  const [lastVisible, setLastVisible] = useState(null);

  useEffect(() => {
    const getTransactions = async () => {
      const count = await getTransactionsCount();
      setTransactionsCount(count);

      return await getAllTransactions(setUserTransactions, setLastVisible);
    };

    getTransactions();

    return () => {
      getTransactions();
    };
  }, []);

  console.log(lastVisible, "lastVisible");

  return (
    <div className={styles["transactions"]}>
      <h3>Transactions</h3>
      <Table
        columns={columns}
        data={userTransactions}
        className={"transactions"}
      />
      {transactionsCount > 10 &&
      transactionsCount !== userTransactions.length ? (
        <button
          onClick={() =>
            getNextTransactions(
              setUserTransactions,
              setLastVisible,
              lastVisible
            )
          }
          className={`${styles["more-button"]} button`}
        >
          Показать больше
        </button>
      ) : null}
    </div>
  );
};

export default Transactions;
