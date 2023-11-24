import React, { useContext, useEffect, useState } from "react";
import styles from "./Admin.module.scss";
import {
  collection,
  doc,
  where,
  query,
  updateDoc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { FirebaseContext } from "../../index";
import { addReferralRewards, generatePrivateKey } from "../../utils/helpers";
import {
  updateUserBalanceAfterCashIn,
  updateUserBalanceAfterWithdrawn,
} from "../../Api/UserData";
import { RANKS } from "../../utils/PERCENTAGES_BY_RANK";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getTemplate } from "./PrivateKeyEmail";

const Admin = () => {
  const { db } = useContext(FirebaseContext);
  const [transactions, setTransactions] = useState([]);
  const { register, handleSubmit } = useForm();

  const sendPrivateKeyToUser = async (userEmail) => {
    const privateKey = generatePrivateKey();
    const userRef = collection(db, "users");
    const userQuery = query(userRef, where("email", "==", userEmail));
    const userQuerySnaps = await getDocs(userQuery);
    const userNickname = userQuerySnaps.docs[0].data().nickname;

    axios
      .post("https://apatecyprusestate-server.site:8000/sendEmail", {
        to: userEmail,
        subject: "Ваш Приватный Финансовый Ключ от Apate Cyprus Estate",
        html: getTemplate(userEmail, userNickname, privateKey),
      })
      .then(async () => {
        await updateDoc(userQuerySnaps.docs[0].ref, {
          privateKey: privateKey,
        });
        alert("Приватный ключ отправлен!");
      })
      .catch((e) => alert(e));
  };

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

  const onSubmit = async (data) => {
    await sendPrivateKeyToUser(data.email);
  };

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
      <div>
        <form id={"private-key-form"} onSubmit={handleSubmit(onSubmit)}></form>
        <h3>Выслать приватный ключ</h3>
        <input {...register("email")} />
        <button type="submit" form="private-key-form">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Admin;
