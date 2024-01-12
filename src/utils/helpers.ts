import { MENU_ITEMS, PLANS, WALLETS } from './consts'
import {
  arrayUnion,
  doc,
  getDoc,
  increment,
  updateDoc
} from 'firebase/firestore'
import { db } from '../index'
import { addTransaction } from '../Api/Transactions'
import { v4 as uuidv4 } from 'uuid'
import { IRank, IRanks, Ranks, RANKS } from './PERCENTAGES_BY_RANK'
import { IWallet, IWallets } from '../@types/IWallets'
import { IRestrictions, IUser } from '../@types/IUser'
import { User } from 'firebase/auth'
import { Dispatch, SetStateAction } from 'react'
import { IPlan } from '../@types/IPlans'
import { IActiveMenuItem } from '../@types/IMenu'

export const openModal = (stateHandler: Dispatch<SetStateAction<boolean>>) => {
  document.body.style.overflow = 'hidden'
  document.body.style.paddingRight = '17px'
  stateHandler(true)
}

export const closeModal = (stateHandler: Dispatch<SetStateAction<boolean>>) => {
  document.body.style.overflow = 'visible'
  document.body.style.paddingRight = '0'
  stateHandler(false)
}

export const addReferralRewards = async (
  executorNickname: string,
  amount: number,
  wallet: string,
  userRank: IRank
) => {
  const referralLength = Object.keys(userRank).length

  try {
    let currentReferralLevel = 1

    const addReward = async (
      referredBy: string,
      amount: number,
      wallet: string
    ) => {
      const referredByDoc = doc(db, 'users', referredBy)
      const referredBySnap = await getDoc(referredByDoc)
      const referralNotFound = referredBy === '' || !referredBySnap.exists()

      if (currentReferralLevel > referralLength || referralNotFound) {
        return
      }

      const referralReward = (amount / 100) * userRank[currentReferralLevel]

      await updateDoc(referredByDoc, {
        referals: increment(referralReward),
        [`wallets.${wallet}.referrals`]: increment(referralReward),
        [`wallets.${wallet}.available`]: increment(referralReward)
      })

      await addTransaction({
        amount: referralReward,
        executor: executorNickname,
        id: uuidv4(),
        nickname: referredBySnap.data().nickname,
        status: 'Выполнено',
        type: 'Реферальные',
        wallet
      })

      currentReferralLevel++

      await addReward(referredBySnap.data().referredBy, amount, wallet)
    }

    const userRef = doc(db, 'users', executorNickname)

    await getDoc(userRef).then(async (user) => {
      if (!user.exists()) return

      await addReward(user.data().referredBy, amount, wallet)
    })
  } catch (e) {
    console.error(e)
  }
}

export const addReferralToAllLevels = async (
  referredBy: string,
  signedUpUser: string
) => {
  if (referredBy === '') {
    return
  }

  try {
    let currentReferralLevel = 1

    const addReferral = async (referredBy: string) => {
      const referredByDoc = doc(db, 'users', referredBy)
      const nextReferredBy = await getDoc(referredByDoc)

      if (!nextReferredBy.exists()) {
        return
      }

      const userRank: keyof IRanks = nextReferredBy.data().rank || Ranks.DEFAULT

      const referralLength = Object.keys(RANKS[userRank]).length

      if (currentReferralLevel > referralLength || referredBy === '') {
        return
      }

      await updateDoc(referredByDoc, {
        [`referredTo.${currentReferralLevel}`]: arrayUnion(signedUpUser)
      })

      currentReferralLevel++

      await addReferral(nextReferredBy.data().referredBy)
    }

    await addReferral(referredBy)
  } catch (e) {
    console.error(e)
  }
}

export const getPlanByRegion = (name: string) => {
  return <IPlan>PLANS.filter((plan) => plan.name === name)[0]

  // return filteredPlans[0]
}

export const sortWalletsByAvailable = (wallets: any) => {
  return wallets.sort((a: IWallet, b: IWallet) => b.available - a.available)
}

export const getCorrectWallets = (userWallets: IWallets) => {
  return WALLETS.filter((wallet) =>
    userWallets.hasOwnProperty(wallet.name)
  ).map((wallet) => {
    const walletName = wallet.name as keyof IWallets

    return {
      ...wallet,
      available: userWallets[walletName].available,
      deposited: userWallets[walletName].deposited,
      withdrawn: userWallets[walletName].withdrawn,
      referrals: userWallets[walletName].referrals,
      number: userWallets[walletName].number
    } as IWallet
  })
}

export const getPagePath = (path: string) => {
  return path.split('/')[2]
}

export const getActiveMenuItem = (pathname: string) => {
  return MENU_ITEMS.find(
    (item: IActiveMenuItem) => item.path === getPagePath(pathname)
  )
}

export const generatePrivateKey = (length = 12) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export const checkIsDigitals = (dig: string) => {
  return !new RegExp(/[^0-9.]/g).test(dig)
}

export const normalizeKey = (key: string) =>
  key as unknown as TemplateStringsArray

// export const hasActiveRestrictions = (restrictions) => {
//   return Object.keys(restrictions).some((key) => {
//     if (typeof restrictions[key] === 'boolean' && key !== 'isPrivateKey') {
//       return restrictions[key]
//     }
//     if (
//       typeof restrictions[key] === 'object' &&
//       restrictions[key].isActive !== undefined &&
//       key !== 'isMoneyLaundering'
//     ) {
//       return restrictions[key].isActive
//     }
//     return false
//   })
// }

export const hasActiveRestrictions = (restrictions: IRestrictions): boolean => {
  return Object.keys(restrictions).some((key) => {
    const restriction = restrictions[key as keyof IRestrictions]

    if (typeof restriction === 'boolean' && key !== 'isPrivateKey') {
      return restriction
    }

    if (
      typeof restriction === 'object' &&
      restriction !== null &&
      'isActive' in restriction &&
      key !== 'isMoneyLaundering'
    ) {
      return restriction.isActive
    }

    return false
  })
}

export const getActiveRestriction = (restrictions: IRestrictions) => {
  for (let key in restrictions) {
    const restriction = restrictions[key as keyof IRestrictions]
    const isSimpleBoolean = typeof restrictions === 'boolean'
    const isObject = typeof restrictions === 'object' && restriction !== null

    if (isSimpleBoolean && restrictions && key !== 'isPrivateKey') {
      return key as keyof IRestrictions
    }

    if (isObject && restrictions.isActive) {
      return key as keyof IRestrictions
    }
  }
  return null
}

export const generateUserWallets = (): IWallets => {
  const wallets = {} as any

  WALLETS.forEach((wallet) => {
    const walletKey = wallet.name

    wallets[walletKey] = {
      available: 0,
      deposited: 0,
      withdrawn: 0,
      referrals: 0,
      number: ''
    }
  })

  return wallets
}

export const addCustomUserFields = (
  user: User,
  phoneNumber: string,
  nickname: string,
  referredByWithoutSpaces: string
): IUser => {
  const wallets = generateUserWallets()

  return {
    wallets: {
      ...wallets
    },
    referrals: 0,
    invested: 0,
    earned: 0,
    nickname,
    withdrawn: 0,
    registrationDate: new Date(user.metadata.creationTime as string),
    referredBy: referredByWithoutSpaces,
    referredTo: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
    restrictions: {
      isWithdrawnLimit: false,
      isFinancialGateway: false,
      isPrivateKey: false,
      isPrivateKeyInvalid: false,
      isReferralCheater: {
        isActive: false,
        users: []
      },
      isMultiAcc: {
        isActive: false,
        users: []
      }
    },
    firstName: '',
    lastName: '',
    contacts: {
      phoneNumber,
      telegram: '',
      vk: ''
    },
    uid: user.uid,
    privateKey: '',
    rank: Ranks.DEFAULT
  }
}
