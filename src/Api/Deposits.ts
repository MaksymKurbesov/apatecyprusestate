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
  DocumentData,
  DocumentReference
} from 'firebase/firestore'
import { auth, db } from '../index'
import { getPlanByRegion } from '../utils/helpers'
import { v4 as uuidv4 } from 'uuid'
import { addTransaction } from './Transactions'
import { calculateTotalIncome } from '../utils/helpers/calculates'
import { addDays, daysPassedSince } from '../utils/helpers/date'
import { Auth, getAuth } from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react'
import { IDeposit } from '../@types/IDeposit'
import { IPlan } from '../@types/IPlans'

export const openDeposit = async (deposit: IPlan, nickname: string) => {
  try {
    const depositDoc = doc(
      db,
      'users',
      nickname,
      'deposits',
      `${deposit.amount}-${uuidv4()}`
    )

    const { planNumber, amount, days, region, wallet, project } = deposit

    await setDoc(depositDoc, {
      planNumber,
      amount,
      days,
      region,
      wallet,
      project,
      date: serverTimestamp(),
      received: 0,
      willReceived: calculateTotalIncome(Number(amount), region),
      charges: 0,
      isActive: true,
      lastAccrual: new Date()
    })
  } catch (e) {
    console.error(e)
    alert(e)
  }
}

const makeAccrual = async (depositRef: DocumentReference, nickname: string) => {
  try {
    const userDoc = doc(db, 'users', nickname)

    await runTransaction(db, async (transaction) => {
      const deposit = await transaction.get(depositRef)

      const { amount, lastAccrual, wallet, days, willReceived } =
        deposit.data() as IDeposit

      const daysWithoutAccruals = daysPassedSince(lastAccrual)
      const isDepositFinished = daysWithoutAccruals >= days

      if (isDepositFinished) {
        await transaction.update(depositRef, {
          charges: 1,
          received: willReceived,
          isActive: false
        })

        await transaction.update(userDoc, {
          earned: willReceived,
          [`wallets.${wallet}.available`]: increment(willReceived + amount)
        })

        await addTransaction({
          amount: willReceived,
          executor: wallet,
          id: uuidv4(),
          type: 'Начисление',
          nickname,
          status: 'Выполнено'
        })
      }
    })
  } catch (e) {
    console.error(e)
    alert(e)
  }
}

const makeAccruals = async (
  depositRef: DocumentReference,
  nickname: string
) => {
  const userDoc = doc(db, 'users', nickname)

  try {
    await runTransaction(db, async (transaction) => {
      const deposit = await transaction.get(depositRef)

      const { amount, lastAccrual, region, wallet, charges, days, isActive } =
        deposit.data() as IDeposit

      const percentageInDay = getPlanByRegion(region).inDay
      const daysWithoutAccruals = daysPassedSince(lastAccrual)
      const isLastCharge = daysWithoutAccruals + charges >= days
      const updatedTime = addDays(lastAccrual, daysWithoutAccruals)
      const receivedByOneCharge = (amount * percentageInDay) / 100

      for (let i = 0; i < daysWithoutAccruals; i++) {
        await addTransaction({
          amount: receivedByOneCharge,
          executor: wallet,
          id: uuidv4(),
          type: 'Начисление',
          nickname,
          status: 'Выполнено',
          date: addDays(lastAccrual, i + 1)
        })
      }

      await transaction.update(depositRef, {
        charges: isLastCharge ? days : increment(daysWithoutAccruals),
        lastAccrual: updatedTime,
        received: isLastCharge
          ? increment(receivedByOneCharge * (days - charges))
          : increment(receivedByOneCharge * daysWithoutAccruals),
        isActive: !isLastCharge
      })

      await transaction.update(userDoc, {
        earned: increment(receivedByOneCharge * daysWithoutAccruals),
        [`wallets.${wallet}.available`]: isLastCharge
          ? increment(receivedByOneCharge * (days - charges))
          : increment(receivedByOneCharge * daysWithoutAccruals)
      })

      if (isActive && isLastCharge) {
        await transaction.update(userDoc, {
          [`wallets.${wallet}.available`]: increment(amount)
        })
      }
    })
  } catch (e) {
    console.error(e)
    alert(e)
  }
}

export const checkDepositsForAccruals = async (nickname: string) => {
  const allDepositsQuery = query(collection(db, 'users', nickname, 'deposits'))

  try {
    await getDocs(allDepositsQuery).then((snap) => {
      snap.docs.forEach(async (item) => {
        if (!item.data().isActive) {
          return
        }

        const depositWithOneAccrual = item.data().planNumber > 3

        if (depositWithOneAccrual) {
          await makeAccrual(item.ref, nickname)
        } else {
          await makeAccruals(item.ref, nickname)
        }
      })
    })
  } catch (e) {
    console.error(e)
    alert(e)
  }
}

export const getAllDeposits = (
  setUserDeposits: Dispatch<SetStateAction<IDeposit[]>>,
  nickname: string
) => {
  try {
    const depositsCollection = query(
      collection(db, 'users', nickname, 'deposits'),
      orderBy('date', 'desc')
    )

    return onSnapshot(depositsCollection, (depositSnap) => {
      setUserDeposits(
        depositSnap.docs.map((deposit: DocumentData) => deposit.data())
      )
    })
  } catch (e) {
    console.error(e)
    alert(e)
  }
}
