import { IWallets } from './Wallets'

interface IReferredTo {
  1: []
  2: []
  3: []
  4: []
  5: []
  6: []
}

interface IRestrictions {
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

export enum Ranks {
  DEFAULT,
  NOVICE,
  IRON,
  BRONZE,
  SILVER,
  GOLD,
  PLATINUM,
  BRILLIANT,
  SAPPHIRE
}

export interface IUser {
  wallets: IWallets
  referrals: number
  invested: number
  earned: number
  withdrawn: number
  registrationDate: Date
  referredTo: IReferredTo
  restrictions: IRestrictions
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
