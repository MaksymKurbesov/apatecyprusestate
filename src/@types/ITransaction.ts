import { FieldValue, Timestamp } from 'firebase/firestore'
import { Ranks } from '../utils/PERCENTAGES_BY_RANK'

export interface ITransaction {
  amount: number
  date: Timestamp | FieldValue
  executor: string
  id: string
  nickname: string
  status: string
  type: string
  rank?: Ranks
}
