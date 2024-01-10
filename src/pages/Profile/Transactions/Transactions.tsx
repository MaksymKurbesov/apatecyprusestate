import React, { FC, useEffect, useState } from 'react'
import Table from '../../../Shared UI/Table/Table'
import styles from './Transactions.module.scss'
import {
  getAllTransactions,
  getNextTransactions,
  getTransactionsCount
} from '../../../Api/Transactions'

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
  const [userTransactions, setUserTransactions] = useState([])
  const [transactionsCount, setTransactionsCount] = useState<number>()
  const [lastVisible, setLastVisible] = useState(null)

  useEffect(() => {
    const getTransactions = async () => {
      const count = await getTransactionsCount()
      setTransactionsCount(count)

      return await getAllTransactions(setUserTransactions, setLastVisible)
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
      transactionsCount !== userTransactions.length ? (
        <button
          onClick={() =>
            getNextTransactions(
              setUserTransactions,
              setLastVisible,
              lastVisible
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
