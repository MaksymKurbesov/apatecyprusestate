import React, { FC } from 'react'
import './Deposit.scss'
import styles from './Deposit.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Table from '../../../../Shared UI/Table/Table'
import { Link } from 'react-router-dom'
import { normalizeDeposits } from '../../../../utils/helpers/transformersData'
import { useTranslation } from 'react-i18next'
import { IDeposit } from '../../../../@types/IDeposit'

const columns = [
  {
    title: 'Region',
    key: 'region',
    responsive: [568],
    width: '12%'
  },
  {
    title: 'Progress',
    key: 'progress',
    responsive: [568],
    width: '25%'
  },
  {
    title: <p>Next Accrual</p>,
    key: 'nextAccrual',
    responsive: [568],
    width: '10%'
  },
  {
    title: <p>Payment Method</p>,
    key: 'paymentMethod',
    responsive: [568]
    // width: "10%",
  },
  {
    title: 'Amount',
    key: 'amount',
    responsive: [568],
    width: '8%'
  },
  {
    title: 'Received',
    key: 'received',
    responsive: [568],
    width: '8%'
  },
  {
    title: <p>Will Received</p>,
    key: 'willReceived',
    responsive: [568],
    width: '8%'
  },
  {
    title: <p>Date Open</p>,
    key: 'dateOpen',
    responsive: [568],
    width: '11%'
  },
  {
    title: <p>Date Close</p>,
    key: 'dateClose',
    responsive: [568],
    width: '11%'
  }
]

interface IDepositsProps {
  deposits: IDeposit[]
}

const Deposits: FC<IDepositsProps> = ({ deposits }) => {
  const { t } = useTranslation()
  const activeDeposits = normalizeDeposits(deposits).filter(
    (deposit) => deposit.isActive
  )

  const completedDeposits = normalizeDeposits(deposits).filter(
    (deposit) => !deposit.isActive
  )

  return (
    <div className={styles['deposits']}>
      <Tabs>
        <TabList>
          <Tab>{t('personal_area.active_deposits')}</Tab>
          <Tab>{t('personal_area.completed_deposits')}</Tab>
        </TabList>
        <TabPanel>
          {activeDeposits.length !== 0 ? (
            <Table
              columns={columns}
              data={activeDeposits}
              className={'deposits'}
            />
          ) : (
            <div className={styles['deposits-empty']}>
              <p>{t('personal_area.no_active_deposits_title')}</p>
              <p>
                {t('personal_area.no_active_deposits_subtitle')}{' '}
                <Link to={'/profile/make-deposit'}>Открыть депозит</Link>
              </p>
            </div>
          )}
        </TabPanel>

        <TabPanel>
          {completedDeposits.length !== 0 ? (
            <Table
              columns={columns}
              data={completedDeposits}
              className={'deposits'}
            />
          ) : (
            <p className={styles['deposits-empty']}>
              {t('personal_area.no_completed_deposits_title')}
            </p>
          )}
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Deposits
