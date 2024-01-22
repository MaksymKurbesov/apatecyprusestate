import { IWallets } from './IWallets'
import { Ranks } from '../utils/PERCENTAGES_BY_RANK'
import { FieldValue, Timestamp } from 'firebase/firestore'
import {
  IReferrals,
  IReferralsInitial
} from '../pages/Profile/Partners/Partners'

export enum RESTRICTIONS {
  WITHDRAWN_LIMIT = 'isWithdrawnLimit',
  FINANCIAL_GATEWAY = 'isFinancialGateway',
  PRIVATE_KEY = 'isPrivateKey',
  PRIVATE_KEY_INVALID = 'isPrivateKeyInvalid',
  REFERRAL_CHEATER = 'isReferralCheater',
  MULTI_ACC = 'isMultiAcc',
  MONEY_LAUNDERING = 'isMoneyLaundering'
}

export interface IRestrictions {
  // prettier-ignore
  [key: string]: boolean | { isActive: boolean, users: string[] }
  [RESTRICTIONS.WITHDRAWN_LIMIT]: boolean
  [RESTRICTIONS.FINANCIAL_GATEWAY]: boolean
  [RESTRICTIONS.PRIVATE_KEY]: boolean
  [RESTRICTIONS.PRIVATE_KEY_INVALID]: boolean
  [RESTRICTIONS.REFERRAL_CHEATER]: {
    isActive: boolean
    users: string[]
  }
  [RESTRICTIONS.MULTI_ACC]: {
    isActive: boolean
    users: string[]
  }
  [RESTRICTIONS.MONEY_LAUNDERING]: {
    isActive: boolean
    users: string[]
  }
}

export interface IUser {
  wallets: IWallets
  referrals: number
  invested: number
  earned: number
  withdrawn: number
  registrationDate: Timestamp | FieldValue
  referredTo: IReferralsInitial | IReferrals
  referredBy: string
  restrictions: IRestrictions
  nickname: string
  firstName: string
  lastName: string
  contacts: {
    phoneNumber: string
    telegram: string
    vk: string
  }
  uid: string
  privateKey: string
  rank: Ranks
}
