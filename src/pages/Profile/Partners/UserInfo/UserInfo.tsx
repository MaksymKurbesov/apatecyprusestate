import React, { FC } from 'react'
import styles from './UserInfo.module.scss'
import { ReactComponent as Coins } from '../../../../assets/SVG/coins.svg'
import { ReactComponent as TotalReferrals } from '../../../../assets/SVG/total-referrals.svg'
import { ReactComponent as PurchasedDeposits } from '../../../../assets/SVG/purchased-deposits.svg'
import { useTranslation } from 'react-i18next'
import { SPONSOR_NAME_MAP } from '../../../../utils/consts'
import { Ranks } from '../../../../utils/PERCENTAGES_BY_RANK'

interface IUserInfoProps {
  totalReferralsCount: number
  totalActiveReferrals: number
  purchasedDeposits: number
  userRank: Ranks
}

const UserInfo: FC<IUserInfoProps> = ({
  totalReferralsCount,
  totalActiveReferrals,
  purchasedDeposits,
  userRank
}) => {
  const { t } = useTranslation()

  // console.log(SPONSOR_NAME_MAP, 'SPONSOR_NAME_MAP')
  // console.log(userRank, 'userRank')
  // console.log(SPONSOR_NAME_MAP[userRank], 'SPONSOR_NAME_MAP[userRank]')

  return (
    <div className={`${styles['user-info-wrapper']} custom-bg custom-border`}>
      <div className={`${styles['user-info']}`}>
        <div className={styles['column']}>
          <Coins />
          <div>
            <p>{t('referrals.your_status')}</p>
            <span>{t('referrals.partner')}</span>
            <span className={styles['user-rank']}>
              <img src={SPONSOR_NAME_MAP[userRank].icon} alt={''} width={30} />
              {/*{t(`referrals.${SPONSOR_NAME_MAP[userRank].name}`)}*/}
            </span>
          </div>
        </div>
        <div className={styles['column']}>
          <TotalReferrals />
          <div className={styles['total-referrals']}>
            <div>
              <p>{t('referrals.total_referrals')}</p>
              <span>{totalReferralsCount}</span>
            </div>
            <div className={styles['active-referrals']}>
              <p>{t('referrals.active_referrals')}</p>
              <span>{totalActiveReferrals}</span>
            </div>
          </div>
        </div>
        <div
          className={`${styles['column']} ${styles['active-referrals-column']}`}
        >
          <TotalReferrals />
          <div>
            <p>{t('referrals.active_referrals')}</p>
            <span>{totalActiveReferrals}</span>
          </div>
        </div>
        <div className={styles['column']}>
          <PurchasedDeposits />
          <div className={styles['info']}>
            <p>{t('referrals.purchased_deposits')}</p>
            <span>{purchasedDeposits}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
