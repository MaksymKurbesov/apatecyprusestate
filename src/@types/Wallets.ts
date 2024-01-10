import TRC20Icon from '../assets/SVG/wallets/TRC20.svg'

export enum WalletsEnum {
  Bitcoin,
  Ethereum,
  'Perfect Money',
  'TRC20 Tether'
}

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
}
