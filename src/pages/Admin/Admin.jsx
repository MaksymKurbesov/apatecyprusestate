import React, { useContext, useEffect, useState } from "react";
import styles from "./Admin.module.scss";
import {
  collection,
  doc,
  where,
  increment,
  query,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { FirebaseContext } from "../../index";

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
    email,
    paymentMethod,
    amount,
    type,
  }) => {
    const userRef = doc(db, "users", email);
    const transactionRef = doc(db, "transactions", id);

    if (type === "Пополнение") {
      await updateDoc(userRef, {
        [`paymentMethods.${paymentMethod}.available`]: increment(amount),
        [`paymentMethods.${paymentMethod}.deposited`]: increment(amount),
      });

      // await getDoc(userRef).then((user) => {
      // 	addReferralReward(user.data().referredBy, amount, paymentMethod, REFERRALS_TOTAL_LEVELS, email);
      // });
    }

    if (type === "Вывод") {
      await updateDoc(userRef, {
        [`paymentMethods.${paymentMethod}.available`]: increment(-amount),
        [`paymentMethods.${paymentMethod}.withdrawn`]: increment(amount),
        withdrawn: increment(amount),
      });
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
    <table className={styles["table"]}>
      <thead>
        <tr>
          <th>Email</th>
          <th>Сумма</th>
          <th>Способ оплаты</th>
          <th>Тип</th>
          <th>ID</th>
          <th>Ключ</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr className={styles["transaction"]} key={transaction.id}>
              <td>{transaction.email}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.paymentMethod}</td>
              <td>{transaction.type}</td>
              <td>{transaction.transaction_id}</td>
              <td>{transaction.privatKey}</td>
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
  );
};

export default Admin;
