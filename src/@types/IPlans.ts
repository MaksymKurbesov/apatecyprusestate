export interface IPlan {
  planNumber: number
  name: string
  inDay: number
  days: number
  minDeposit: number
  maxDeposit: number
  accrualsEveryday: boolean
  amount?: string
  project?: string
  wallet?: string
  region: string
}

export interface IPlans {
  [key: string]: IPlan
}
