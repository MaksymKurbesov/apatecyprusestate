import { IWallets } from './IWallets'
import { Ranks } from '../utils/PERCENTAGES_BY_RANK'

interface IReferredTo {
  [key: string]: string[]
}

export interface IRestrictions {
  // prettier-ignore
  [key: string]: boolean | { isActive: boolean, users: string[] }
  isWithdrawnLimit: boolean
  isFinancialGateway: boolean
  isPrivateKey: boolean
  isPrivateKeyInvalid: boolean
  isReferralCheater: {
    isActive: boolean
    users: string[]
  }
  isMultiAcc: {
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
  registrationDate: Date
  referredTo: IReferredTo
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
