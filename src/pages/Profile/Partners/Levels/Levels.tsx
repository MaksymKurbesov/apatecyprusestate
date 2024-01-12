import React, { FC } from 'react'
import styles from './Levels.module.scss'
import Table from '../../../../Shared UI/Table/Table'
import Accordion, {
  IAccordionData,
  IAccordionProps
} from '../../../../components/Accordion/Accordion'
import {
  getTotalActiveReferralsByLevel,
  getTotalIncomeFromReferrals
} from '../../../../utils/helpers/calculates'
import { normalizeReferralLevel } from '../../../../utils/helpers/transformersData'
import { useTranslation } from 'react-i18next'
import { Ranks, RANKS } from '../../../../utils/PERCENTAGES_BY_RANK'
import { IReferrals } from '../Partners'

const columns = [
  {
    title: 'Nickname',
    key: 'nickname'
  },
  {
    title: 'Sponsor',
    key: 'sponsor'
  },
  {
    title: 'Referrals',
    key: 'referrals'
  },
  {
    title: 'Registration Date',
    key: 'registrationDate'
  },
  {
    title: 'Deposited',
    key: 'deposited'
  }
]

interface ILevelsProps {
  referrals: IReferrals
  userRank: Ranks
}

const Levels: FC<ILevelsProps> = ({ referrals, userRank }) => {
  const { t } = useTranslation()
  const referralLength = Object.keys(RANKS[userRank]).length

  const accordionData = [] as IAccordionData[]

  Object.values(referrals).map((level, index) => {
    if (index + 1 > referralLength) return

    accordionData.push({
      title: (
        <div className={styles['level']}>
          <p className={styles['level-number']}>
            {t('referrals.level')} {index + 1}
          </p>
          <p>
            {t('referrals.referrals')}: <span>{level.length}</span>
          </p>
          <p className={styles['active-referrals']}>
            {t('referrals.active_referrals')}:{' '}
            <span>{getTotalActiveReferralsByLevel(level)}</span>
          </p>
          <p>
            {t('referrals.total_income')}:{' '}
            <span>
              ${getTotalIncomeFromReferrals(level, index + 1, RANKS[userRank])}
            </span>
          </p>
        </div>
      ),
      content: (
        <Table
          columns={columns}
          data={normalizeReferralLevel(level)}
          className={'levels'}
        />
      )
    })
  })

  return (
    <div className={styles['levels']}>
      <Accordion data={accordionData} className={'levels'} />
    </div>
  )
}

export default Levels