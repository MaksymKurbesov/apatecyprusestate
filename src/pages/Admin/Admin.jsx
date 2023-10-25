import React, { useContext, useEffect, useState } from "react";
import styles from "./Admin.module.scss";
import {
  collection,
  doc,
  where,
  query,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { FirebaseContext } from "../../index";
import { addReferralRewards } from "../../utils/helpers";
import {
  updateUserBalanceAfterCashIn,
  updateUserBalanceAfterWithdrawn,
} from "../../Api/UserData";
import { RANKS } from "../../utils/PERCENTAGES_BY_RANK";

const Admin = () => {
  const { db } = useContext(FirebaseContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const transactionsDocRef = query(
      collection(db, "transactions"),
      where("status", "==", "Ожидание")
    );

    onSnapshot(transactionsDocRef, (snapshot) => {
      setTransactions(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  const successTransaction = async ({
    id,
    nickname,
    wallet,
    amount,
    type,
    rank,
  }) => {
    const transactionRef = doc(db, "transactions", id);

    if (type === "Пополнение") {
      await updateUserBalanceAfterCashIn(wallet, amount, nickname);

      await addReferralRewards(nickname, amount, wallet, RANKS[rank]);
    }

    if (type === "Вывод") {
      await updateUserBalanceAfterWithdrawn(wallet, amount, nickname);
    }

    await updateDoc(transactionRef, {
      status: "Выполнено",
    });
  };

  const cancelTransaction = async ({ id }) => {
    const transactionRef = doc(db, "transactions", id);

    await updateDoc(transactionRef, {
      status: "Отмена",
    });
  };

  return (
    <div className={styles["table-wrapper"]}>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Ник</th>
            <th>Сумма</th>
            <th>Способ оплаты</th>
            <th>Тип</th>
            <th>Хеш транзакции</th>
            <th>Ключ</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr className={styles["transaction"]} key={transaction.id}>
                <td>{transaction.nickname}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.wallet}</td>
                <td>{transaction.type}</td>
                <td>{transaction["transaction-hash"]}</td>
                <td>{transaction["private-key"]}</td>
                <td>
                  <button
                    onClick={() => {
                      successTransaction(transaction);
                    }}
                  >
                    Выполнено
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      cancelTransaction(transaction);
                    }}
                  >
                    Отмена
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
