import React, { FC, useContext, useEffect, useState } from 'react'
import styles from './Partners.module.scss'
import ReferralLink from './ReferralLink/ReferralLink'
import Percentage from './Percentage/Percentage'
import UserInfo from './UserInfo/UserInfo'
import Levels from './Levels/Levels'
import { doc, DocumentData, Firestore, getDoc } from 'firebase/firestore'
import { useOutletContext } from 'react-router-dom'
import { FirebaseContext } from '../../../index'
import { IContextType } from '../../../components/ProfileLayout/ProfileLayout'
import { Ranks } from '../../../utils/PERCENTAGES_BY_RANK'
import { dateToString } from '../../../utils/helpers/date'
import { IUser } from '../../../@types/IUser'
import { fetchUserData } from '../../../Api/UserData'
import {
  calculateTotalDeposited,
  getTotalActiveReferrals,
  getTotalReferrals
} from '../../../utils/helpers/calculates'

export interface IReferral {
  nickname: string
  sponsor: string
  referrals: number
  registrationDate: string
  deposited: string
}

export interface IReferralsInitial {
  [key: string]: string[]
}

export interface IReferrals {
  [key: string]: IReferral[]
}

const enrichReferralData = async (
  referralObject: IReferralsInitial
): Promise<IReferrals> => {
  const enrichedData: IReferrals = {}

  for (const level in referralObject) {
    const userNicknames = referralObject[level]
    const userDetailsPromises = userNicknames.map((nickname: string) =>
      fetchUserData(nickname)
    )

    const userDetails = await Promise.all(userDetailsPromises)

    enrichedData[level] = userDetails.map((user) => {
      console.log(user.registrationDate, 'user.registrationDate')

      return {
        nickname: user.nickname,
        sponsor: user.referredBy,
        deposited: `$${calculateTotalDeposited(user.wallets)}`,
        registrationDate: dateToString(user.registrationDate),
        referrals: getTotalReferrals(user.referredTo)
      }
    })
  }

  return enrichedData
}

export const Partners: FC = () => {
  const { userData, userDeposits } = useOutletContext<IContextType>()
  const [referrals, setReferrals] = useState<IReferrals>()
  const [userRank, setUserRank] = useState<Ranks>(Ranks.DEFAULT)

  useEffect(() => {
    setUserRank(userData.rank)

    const fetchData = async () => {
      const enrichedReferrals = await enrichReferralData(
        userData.referredTo as IReferralsInitial
      )
      setReferrals(enrichedReferrals)
    }

    fetchData()
  }, [])

  if (!referrals) {
    return null
  }

  return (
    <div className={styles['partners']}>
      <ReferralLink
        referredBy={userData.referredBy}
        nickname={userData.nickname}
      />
      <Percentage />
      <UserInfo
        totalReferralsCount={getTotalReferrals(referrals)}
        totalActiveReferrals={getTotalActiveReferrals(referrals)}
        purchasedDeposits={userDeposits.length}
        userRank={userRank}
      />
      <Levels referrals={referrals} userRank={userRank} />
    </div>
  )
}
