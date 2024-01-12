import React, { useContext, useEffect, useState } from 'react'
import styles from './Partners.module.scss'
import ReferralLink from './ReferralLink/ReferralLink'
import Percentage from './Percentage/Percentage'
import UserInfo from './UserInfo/UserInfo'
import Levels from './Levels/Levels'
import { doc, DocumentData, getDoc } from 'firebase/firestore'
import { useOutletContext } from 'react-router-dom'
import { FirebaseContext } from '../../../index'
import { secondsToString } from '../../../utils/helpers/date'
import {
  getTotalActiveReferrals,
  getTotalReferrals
} from '../../../utils/helpers/calculates'
import { IUser } from '../../../@types/IUser'
import { IPlan } from '../../../@types/IPlans'
import { IContextType } from '../../../components/ProfileLayout/ProfileLayout'
import { Ranks } from '../../../utils/PERCENTAGES_BY_RANK'

export interface IReferral {
  nickname: string
  sponsor: string
  totalReferrals: number
  registrationDate: string
  deposited: number
}

export interface IReferrals {
  [key: string]: IReferral[]
}

// updatedData[key] = await Promise.all(
//   usersArray.map(async (userNick: string) => {
//     const user = await fetchAdditionalDataForUser(userNick)
//
//     if (!user) return
//
//     return {
//       ...user,
//       sponsor: user.referredBy,
//       registrationDate: secondsToString(user.registrationDate.seconds)
//     }
//   })
// )

const Partners = () => {
  const { userData, userDeposits } = useOutletContext<IContextType>()
  const { db } = useContext(FirebaseContext)
  const [referrals, setReferrals] = useState<IReferrals>()

  const fetchAdditionalDataForUser = async (user: string) => {
    const userDoc = doc(db, 'users', user)
    const userSnap: DocumentData = await getDoc(userDoc)

    return userSnap.data()
  }

  useEffect(() => {
    const fetchData = async () => {
      let updatedData = {} as IReferrals

      // Object.keys(userData.referredTo).map(async (key) => {
      //   const usersArray = userData.referredTo[key]
      //
      //   updatedData[key] = usersArray.map(async (userNick: string) => {
      //     const user = await fetchAdditionalDataForUser(userNick)
      //
      //     if (!user) return
      //
      //     return {
      //       nickname: user.nickname,
      //       sponsor: user.referredBy,
      //       deposited: user.deposited,
      //       registrationDate: secondsToString(user.registrationDate.seconds),
      //       totalReferrals: 0
      //     }
      //   })
      // })

      // await Promise.all(promises)

      setReferrals(updatedData)
    }

    fetchData()
  }, [])

  const totalReferralsCount = getTotalReferrals(referrals)

  const activeReferralsCount = getTotalActiveReferrals(referrals)

  if (!referrals) {
    return
  }

  return (
    <div className={styles['partners']}>
      <ReferralLink
        referredBy={userData.referredBy}
        nickname={userData.nickname}
      />
      <Percentage />
      <UserInfo
        // totalReferralsCount={totalReferralsCount}
        totalReferralsCount={0}
        totalActiveReferrals={activeReferralsCount}
        purchasedDeposits={userDeposits.length}
        userRank={userData.rank || Ranks.DEFAULT}
      />
      <Levels referrals={referrals} userRank={Ranks.DEFAULT} />
    </div>
  )
}

export default Partners
