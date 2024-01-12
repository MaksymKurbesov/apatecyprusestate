import { Timestamp } from 'firebase/firestore'

export interface IDeposit {
  amount: number
  charges: number
  date: Timestamp
  days: number
  isActive: boolean
  lastAccrual: Timestamp
  planNumber: number
  project: string
  received: number
  region: string
  wallet: string
  willReceived: number
}
