import {
  collection,
  doc,
  limit,
  query,
  setDoc,
  orderBy,
  serverTimestamp,
  onSnapshot,
  where,
} from "firebase/firestore";
import { auth, db } from "../index";
import { v4 as uuidv4 } from "uuid";
import ColoredLabel from "../components/ColoredLabel/ColoredLabel";
import { secondsToString } from "../utils/helpers/date";

export const addTransaction = async (transaction) => {
  const { amount, type, nickname, ...rest } = transaction;
  const transactionsDoc = doc(db, "transactions", `${type}-${uuidv4()}`);

  try {
    await setDoc(transactionsDoc, {
      type,
      amount: +amount,
      nickname: auth.currentUser.displayName,
      status: "Ожидание",
      date: serverTimestamp(),
      ...rest,
    });
  } catch (e) {
    alert(e);
    console.error(e);
  }
};

export const getAllTransactions = (setTransactions) => {
  const transactions = [];

  try {
    const transactionQuery = query(
      collection(db, "transactions"),
      limit(10),
      where("nickname", "==", auth.currentUser.displayName),
      orderBy("date", "desc")
    );

    return onSnapshot(transactionQuery, (transactionSnaps) => {
      setTransactions(
        transactionSnaps.docs.map((transactionSnap) => {
          const transaction = transactionSnap.data();
          const { id, amount, date, status } = transaction;

          return {
            ...transaction,
            id: id.substring(0, 5),
            amount: `$${amount.toFixed(2)}`,
            date: secondsToString(date.seconds),
            status: <ColoredLabel text={status} />,
          };
        })
      );
    });
  } catch (e) {
    console.error(e);
    alert(e);
  }

  return transactions;
};
