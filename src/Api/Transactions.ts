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
  getCountFromServer,
  getDocs,
  startAfter,
  QueryDocumentSnapshot,
  Timestamp
} from 'firebase/firestore'
import { auth, db } from '../index'
import ColoredLabel from '../components/ColoredLabel/ColoredLabel'
import { dateToString } from '../utils/helpers/date'
import { Dispatch, SetStateAction } from 'react'
import { ITransaction } from '../@types/ITransaction'

export const addTransaction = async (transaction: ITransaction) => {
  const { amount, type, ...rest } = transaction
  const transactionsDoc = doc(db, 'transactions', `${rest.id}`)

  try {
    await setDoc(transactionsDoc, {
      ...rest,
      type,
      amount: +amount,
      status: 'Ожидание'
    })
  } catch (e) {
    alert(e)
    console.error(e)
  }
}

export const getTransactionsCount = async (nickname: string) => {
  const transactionQuery = query(
    collection(db, 'transactions'),
    where('nickname', '==', nickname)
  )

  const count = await getCountFromServer(transactionQuery)

  return count.data().count
}

export const getAllTransactions = async (
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>,
  setLastVisible: Dispatch<SetStateAction<QueryDocumentSnapshot>>,
  nickname: string
) => {
  try {
    const transactionsList = []

    const transactionQuery = query(
      collection(db, 'transactions'),
      where('nickname', '==', nickname),
      orderBy('date', 'desc'),
      limit(10)
    )

    const transactions = await getDocs(transactionQuery)
    setLastVisible(transactions.docs[transactions.docs.length - 1])

    return onSnapshot(transactionQuery, (transactionSnaps) => {
      setTransactions(
        transactionSnaps.docs.map((transactionSnap) => {
          const transaction = transactionSnap.data()

          const { id, amount, date, status, executor, nickname, type } =
            transaction as ITransaction

          return {
            executor,
            nickname,
            type,
            id: id.substring(0, 5),
            // amount: `$${amount.toFixed(2)}`,
            amount: amount,
            date: date,

            // status: <ColoredLabel text={status} />
            status: 'test'
          }
        })
      )
    })
  } catch (e) {
    console.error(e)
    alert(e)
  }

  // return transactions
}

export const getNextTransactions = async (
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>,
  setLastVisible: any,
  lastVisible: any,
  nickname: string
) => {
  const transactionQuery = query(
    collection(db, 'transactions'),
    where('nickname', '==', nickname),
    orderBy('date', 'desc'),
    startAfter(lastVisible),
    limit(10)
  )

  const transactions = await getDocs(transactionQuery)
  setLastVisible(transactions.docs[transactions.docs.length - 1])

  transactions.docs.forEach((transaction) => {
    const { id, amount, date, status, executor, nickname, type } =
      transaction.data()

    // setTransactions((prevState) => [
    //   ...prevState,
    //   {
    //     executor,
    //     nickname,
    //     type,
    //     id: id.substring(0, 5),
    //     amount: `$${amount.toFixed(2)}`,
    //     date: dateToString(date.seconds),
    //     // status: <ColoredLabel text={status} />
    //     status: 'test'
    //   }
    // ])
  })
}
