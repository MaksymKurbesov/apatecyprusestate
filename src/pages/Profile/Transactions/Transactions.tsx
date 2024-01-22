import React, { FC, useEffect, useState } from 'react'
import Table from '../../../Shared UI/Table/Table'
import styles from './Transactions.module.scss'
import {
  getAllTransactions,
  getNextTransactions,
  getTransactionsCount
} from '../../../Api/Transactions'
import {
  Timestamp,
  QueryDocumentSnapshot,
  DocumentData
} from 'firebase/firestore'
import { IContextType } from '../../../components/ProfileLayout/ProfileLayout'
import { useOutletContext } from 'react-router-dom'
import { ITransaction } from '../../../@types/ITransaction'

const columns = [
  {
    title: 'ID',
    key: 'id'
  },
  {
    title: 'Status',
    key: 'status'
  },
  {
    title: 'Type',
    key: 'type'
  },
  {
    title: 'Amount',
    key: 'amount'
  },
  {
    title: 'Date',
    key: 'date'
  },
  {
    title: 'Executor',
    key: 'executor'
  }
]

export const Transactions: FC = () => {
  const [userTransactions, setUserTransactions] = useState<ITransaction[]>([])
  const [transactionsCount, setTransactionsCount] = useState<number>()
  const [lastVisible, setLastVisible] = useState<DocumentData>()

  const { userData } = useOutletContext<IContextType>()

  useEffect(() => {
    const getTransactions = async () => {
      const count = await getTransactionsCount(userData.nickname)
      setTransactionsCount(count)

      return await getAllTransactions(
        setUserTransactions,
        setLastVisible,
        userData.nickname
      )
    }

    getTransactions()

    return () => {
      getTransactions()
    }
  }, [])

  if (!transactionsCount) return null

  return (
    <div className={styles['transactions']}>
      <h3>Transactions</h3>
      <Table
        columns={columns}
        data={userTransactions}
        className={'transactions'}
      />
      {transactionsCount > 10 &&
      transactionsCount !== userTransactions?.length ? (
        <button
          onClick={() =>
            getNextTransactions(
              setUserTransactions,
              setLastVisible,
              lastVisible,
              userData.nickname
            )
          }
          className={`${styles['more-button']} button`}
        >
          Показать больше
        </button>
      ) : null}
    </div>
  )
}
