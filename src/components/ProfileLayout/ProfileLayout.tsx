import React, { useContext, useEffect, useState } from 'react'
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom'
import Header from './Header/Header'
import ProfileMenu from './ProfileMenu/ProfileMenu'
import styles from './ProfileLayout.module.scss'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useAuthState } from '../../hooks/useAuthState'
import { auth, FirebaseContext, IFirebaseContext } from '../../index'
import { doc, onSnapshot, DocumentData } from 'firebase/firestore'
import { getAllDeposits } from '../../Api/Deposits'
import AccountBlocked from './AccountBlocked/AccountBlocked'
import axios from 'axios'

export interface IWallet {
  available: number
  deposited: number
  number: string
  referrals: number
  withdrawn: number
}

export interface IWallets {
  Bitcoin: IWallet
  Ethereum: IWallet
  'Perfect Money': IWallet
  'TRC20 Tether': IWallet
  '': IWallet
}

interface IUserData {
  contacts: {
    phoneNumber: string
    telegram: string
    vk: string
  }
  earned: number
  email: string
  firstName: string
  invested: number
  lastName: string
  nickname: string
  privateKey: string
  rank: string
  referrals: number
  referredBy: string
  referredTo: {
    '1': []
    '2': []
    '3': []
    '4': []
    '5': []
    '6': []
  }
  registrationDate: {
    __time__: '2023-11-29T13:07:48.000Z'
  }
  restrictions: {
    isFinancialGateway: boolean
    isMultiAcc: {
      isActive: boolean
      users: []
    }
    isPrivateKey: boolean
    isPrivateKeyInvalid: boolean
    isReferralCheater: {
      isActive: boolean
      users: []
    }
    isWithdrawnLimit: boolean
  }
  uid: string
  wallets: IWallets
  withdrawn: number
}

export interface IContextType {
  userData: IUserData
  userDeposits: any
}

const ProfileLayout = () => {
  const windowSize = useWindowSize()
  const [userData, setUserData] = useState<DocumentData>()
  const [userDeposits, setUserDeposits] = useState([])
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  const { db } = useContext<IFirebaseContext>(FirebaseContext)

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/')

    const unsubscribeDeposits = getAllDeposits(setUserDeposits)

    const unsubscribeUserData = onSnapshot(
      doc(db, 'users', user.displayName),
      async (userSnap) => {
        setUserData(userSnap.data())
        try {
          await axios.post('https://apatecyprusestate-server.site:8000/ip', {
            username: userSnap.data()?.nickname,
            headers: {
              'Content-Type': 'application/json'
            }
          })
        } catch (e) {
          console.log(e, 'profile layout error')
        }

        if (userSnap.data()?.isBlocked) {
          console.log('work')
          document.body.style.overflow = 'hidden'
        }
      }
    )

    return () => {
      if (unsubscribeDeposits) {
        unsubscribeDeposits()
      }

      unsubscribeUserData()
    }
  }, [user, loading])

  if (!userData) {
    return null
  }

  return (
    <div className={styles['profile-layout']}>
      <Header rank={userData.rank || 'DEFAULT'} />
      {windowSize > 1024 && <ProfileMenu userData={userData} />}
      <Outlet context={{ userData, userDeposits }} />
      {userData.isBlocked && <AccountBlocked />}
      <ScrollRestoration />
    </div>
  )
}

export default ProfileLayout
