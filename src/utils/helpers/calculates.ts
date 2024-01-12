import { getPlanByRegion } from '../helpers'
import { IDeposit } from '../../@types/IDeposit'
import { IWallets } from '../../@types/IWallets'
import { IReferral, IReferrals } from '../../pages/Profile/Partners/Partners'

export const getTotalIncomeFromReferrals = (
  referrals: IReferral[],
  level: any,
  percentageByRank: any
) => {
  return Object.values(referrals).reduce((accum: any, referral: any) => {
    const totalDeposited = calculateTotalDeposit(referral.wallets)
    const percentFromTotalDeposited =
      (totalDeposited * percentageByRank[level]) / 100

    return accum + percentFromTotalDeposited
  }, 0)
}

export const getTotalReferrals = (referrals: any) => {
  return Object.values(referrals).reduce(
    (sum, usersArray: any) => sum + usersArray.length,
    0
  )
}

export const getTotalActiveReferrals = (referrals: any): number => {
  const refs: any = Object.values(referrals)

  if (refs) {
    return refs
      .reduce(
        (allUsers: any, usersArray: any) => allUsers.concat(usersArray),
        []
      )
      .filter((user: any) => user.invested > 0).length
  }

  return 0
}

export const getTotalActiveReferralsByLevel = (referrals: any): number => {
  if (referrals.length === 0) {
    return 0
  }

  let totalActiveReferrals = 0

  referrals.forEach((referral: any) => {
    if (referral.invested > 0) {
      totalActiveReferrals++
    }
  })

  return totalActiveReferrals
}

export const calculateTotalDeposit = (userWallets: IWallets) => {
  return Object.values(userWallets).reduce(
    (sum, wallet) => sum + wallet.deposited,
    0
  )
}

export const calculateIncomeInDay = (amount: number, region: string) => {
  if (!region) {
    return
  }

  if (isNaN(amount)) {
    return 0
  }

  const selectedPlan = getPlanByRegion(region)
  const percent = selectedPlan.inDay
  const days = selectedPlan.days

  if (selectedPlan.planNumber > 3) {
    return +((amount * percent) / 100 / days).toFixed(2)
  } else {
    return +((amount * percent) / 100).toFixed(3)
  }
}

export const calculateTotalIncome = (amount: number, region: string) => {
  if (!region) {
    return
  }

  if (isNaN(amount)) {
    return 0
  }

  const selectedPlan = getPlanByRegion(region)
  const percent: number = selectedPlan.inDay
  const days: number = selectedPlan.days

  if (selectedPlan.planNumber > 3) {
    return +((amount * percent) / 100).toFixed(2)
  } else {
    return +(((amount * percent) / 100) * days).toFixed(2)
  }
}

function calculateNextInterestDate(deposit: IDeposit) {
  const nextInterestDate = new Date(deposit.lastAccrual.seconds * 1000)

  if (deposit.planNumber < 4) {
    nextInterestDate.setDate(nextInterestDate.getDate() + 1) // Следующий день
  } else {
    nextInterestDate.setDate(nextInterestDate.getDate() + deposit.days) // Добавить весь срок депозита
  }

  return nextInterestDate
}

export const getNearestAccrual = (deposits: IDeposit[]): IDeposit => {
  let earliestInterestDate = null
  let depositWithEarliestInterest = {} as IDeposit
  const activeDeposits = deposits.filter((item) => item.isActive)

  for (const deposit of activeDeposits) {
    const nextInterestDate = calculateNextInterestDate(deposit)

    if (!earliestInterestDate || nextInterestDate < earliestInterestDate) {
      earliestInterestDate = nextInterestDate
      depositWithEarliestInterest = deposit
    }
  }

  return depositWithEarliestInterest
}
