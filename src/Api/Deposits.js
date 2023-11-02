import {
  collection,
  doc,
  getDocs,
  increment,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../index";
import { getPlanByRegion } from "../utils/helpers";
import { v4 as uuidv4 } from "uuid";
import { addTransaction } from "./Transactions";
import { calculateTotalIncome } from "../utils/helpers/calculates";
import { addDays, daysPassedSince } from "../utils/helpers/date";

export const openDeposit = async (deposit) => {
  try {
    const depositDoc = doc(
      db,
      "users",
      auth.currentUser.displayName,
      "deposits",
      `${deposit.amount}-${uuidv4()}`
    );

    const { planNumber, amount, days, region, wallet, project } = deposit;

    await setDoc(depositDoc, {
      planNumber,
      amount,
      days,
      region,
      wallet,
      project,
      date: serverTimestamp(),
      received: 0,
      willReceived: calculateTotalIncome(amount, region),
      charges: 0,
      isActive: true,
      lastAccrual: new Date(),
    });
  } catch (e) {
    console.error(e);
    alert(e);
  }
};

const makeAccrual = async (depositRef) => {
  const userDoc = doc(db, "users", auth.currentUser.displayName);

  try {
    await runTransaction(db, async (transaction) => {
      const deposit = await transaction.get(depositRef);

      const { amount, lastAccrual, wallet, days, willReceived } =
        deposit.data();

      const daysWithoutAccruals = daysPassedSince(lastAccrual);
      const isDepositFinished = daysWithoutAccruals >= days;

      if (isDepositFinished) {
        await transaction.update(depositRef, {
          charges: 1,
          received: willReceived,
          isActive: false,
        });

        await transaction.update(userDoc, {
          earned: willReceived,
          [`wallets.${wallet}.available`]: increment(willReceived + amount),
        });

        await addTransaction({
          amount: willReceived,
          executor: wallet,
          id: uuidv4(),
          type: "Начисление",
          nickname: auth.currentUser.displayName,
          status: "Выполнено",
        });
      }
    });
  } catch (e) {
    console.error(e);
    alert(e);
  }
};

const makeAccruals = async (depositRef) => {
  const userDoc = doc(db, "users", auth.currentUser.displayName);

  try {
    await runTransaction(db, async (transaction) => {
      const deposit = await transaction.get(depositRef);

      const { amount, lastAccrual, region, wallet, charges, days } =
        deposit.data();

      const percentageInDay = getPlanByRegion(region).inDay;
      const daysWithoutAccruals = daysPassedSince(lastAccrual);
      const isLastCharge = daysWithoutAccruals + charges >= days;
      const updatedTime = addDays(lastAccrual, daysWithoutAccruals);
      const receivedByOneCharge = (amount * percentageInDay) / 100;

      for (let i = 0; i < daysWithoutAccruals; i++) {
        await addTransaction({
          amount: receivedByOneCharge,
          executor: wallet,
          id: uuidv4(),
          type: "Начисление",
          nickname: auth.currentUser.displayName,
          status: "Выполнено",
          date: addDays(lastAccrual, i + 1),
        });
      }

      await transaction.update(depositRef, {
        charges: isLastCharge ? days : increment(daysWithoutAccruals),
        lastAccrual: updatedTime,
        received: isLastCharge
          ? increment(receivedByOneCharge * (days - charges))
          : increment(receivedByOneCharge * daysWithoutAccruals),
        isActive: !isLastCharge,
      });

      await transaction.update(userDoc, {
        earned: increment(receivedByOneCharge * daysWithoutAccruals),
        [`wallets.${wallet}.available`]: isLastCharge
          ? increment(receivedByOneCharge * daysWithoutAccruals + amount)
          : increment(receivedByOneCharge * daysWithoutAccruals),
      });
    });
  } catch (e) {
    console.error(e);
    alert(e);
  }
};

export const checkDepositsForAccruals = async () => {
  const allDepositsQuery = query(
    collection(db, "users", auth.currentUser.displayName, "deposits")
  );

  try {
    await getDocs(allDepositsQuery).then((snap) => {
      snap.docs.forEach(async (item) => {
        if (!item.data().isActive) return;

        const depositWithOneAccrual = item.data().planNumber > 3;

        if (depositWithOneAccrual) {
          await makeAccrual(item.ref);
        } else {
          await makeAccruals(item.ref);
        }
      });
    });
  } catch (e) {
    console.error(e);
    alert(e);
  }
};

export const getAllDeposits = (setUserDeposits) => {
  try {
    const depositsCollection = query(
      collection(db, "users", auth.currentUser.displayName, "deposits"),
      orderBy("date", "desc")
    );

    return onSnapshot(depositsCollection, (depositSnap) => {
      setUserDeposits(depositSnap.docs.map((deposit) => deposit.data()));
    });
  } catch (e) {
    console.error(e);
    alert(e);
  }
};
