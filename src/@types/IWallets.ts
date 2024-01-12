export interface IWallet {
  available: number
  deposited: number
  number: string
  referrals: number
  withdrawn: number
  name?: string
  label?: string
  icon?: any
}

export interface IWallets {
  // Bitcoin: IWallet
  // Ethereum: IWallet
  // 'Perfect Money': IWallet
  // 'TRC20 Tether': IWallet
  [key: string]: IWallet
}
