import React, { useContext, useEffect, useState } from "react";
import styles from "./Admin.module.scss";
import {
  collection,
  doc,
  where,
  query,
  updateDoc,
  onSnapshot,
  increment,
} from "firebase/firestore";
import { auth, FirebaseContext } from "../../index";
import { addReferralRewards } from "../../utils/helpers";
import {
  updateUserBalanceAfterCashIn,
  updateUserBalanceAfterWithdrawn,
} from "../../Api/UserData";
import { RANKS } from "../../utils/PERCENTAGES_BY_RANK";
import { useForm } from "react-hook-form";
import { sendPrivateKeyToUser } from "./helpers";
import { addTransaction } from "../../Api/Transactions";
import { v4 as uuidv4 } from "uuid";
import { checkIp } from "../../Api/CheckIp";

const Admin = () => {
  const { db } = useContext(FirebaseContext);
  const [transactions, setTransactions] = useState([]);
  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();

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

  const sendPrivateKey = async (data) => {
    await sendPrivateKeyToUser(data.email);
  };

  const sendCashToUser = async (data) => {
    try {
      const userRef = doc(db, "users", data.nickname);

      await updateDoc(userRef, {
        [`wallets.${data.wallet}.available`]: increment(data.amount),
      });

      await addTransaction({
        id: uuidv4(),
        status: "Выполнено",
        type: "Пополнение",
        executor: data.wallet,
        nickname: data.nickname,
        amount: data.amount,
      });

      alert("Деньги успешно начислены");
    } catch (e) {
      alert("Ошибка");
    }
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
      <div className={styles["private-key"]}>
        <form
          id={"private-key-form"}
          onSubmit={handleSubmit(sendPrivateKey)}
        ></form>
        <h3>Выслать приватный ключ</h3>
        <div className={styles["input"]}>
          <input placeholder={"email"} {...register("email")} />
          <button type="submit" form="private-key-form">
            Отправить
          </button>
        </div>
      </div>
      <div className={styles["bonus10"]}>
        <form id={"bonus-10"} onSubmit={handleSubmit2(sendCashToUser)}>
          <h3>Начислить $ пользователю</h3>
          <div className={styles["input"]}>
            <input placeholder={"nickname"} {...register2("nickname")} />
            <select {...register2("wallet")}>
              <option value="TRC20 Tether">TRC20 Tether</option>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Perfect Money">PM</option>
            </select>
            {/*<input placeholder={"wallet"} {...register2("wallet")} />*/}
            <input placeholder={"amount"} {...register2("amount")} />
            <button type="submit" form="bonus-10">
              Отправить
            </button>
          </div>
        </form>
      </div>
      <div>
        <button onClick={() => checkIp()}>Проверить айпишники</button>
      </div>
    </div>
  );
};

export default Admin;
