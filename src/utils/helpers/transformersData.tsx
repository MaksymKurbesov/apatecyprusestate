import { ONE_DAY_IN_SECONDS, WALLETS } from '../consts'
import Progress from '../../Shared UI/Progress/Progress'
import Countdown from '../../components/Countdown/Countdown'
import ColoredLabel from '../../components/ColoredLabel/ColoredLabel'
import React from 'react'
import { calculateTotalDeposit } from './calculates'
import { addDays, secondsToString } from './date'
import { IDeposit } from '../../@types/IDeposit'
import { IWallets } from '../../@types/IWallets'

export const normalizeReferralLevel = (referralLevel: any) => {
  console.log(referralLevel, 'referralLevel')

  return referralLevel.map((item: any) => {
    const totalDeposit = calculateTotalDeposit(item.wallets)

    return {
      ...item,
      deposited: `$${totalDeposit}`
    }
  })
}

export const normalizeUserWallets = (userWallets: IWallets) => {
  return WALLETS.map((wallet) => {
    return {
      ...wallet,
      number: userWallets[wallet.name].number
    }
  })
}

export const normalizeDeposits = (deposits: IDeposit[]) => {
  return deposits.map((deposit) => {
    const {
      planNumber,
      region,
      amount,
      received,
      willReceived,
      date,
      lastAccrual,
      days,
      charges,
      isActive,
      wallet
    } = deposit

    return {
      region,
      progress: (
        <div className={'charges-wrapper'}>
          <Progress percent={(charges / (planNumber > 3 ? 1 : days)) * 100} />
          <p className={'charges'}>
            {charges} / {planNumber > 3 ? 1 : days}
          </p>
        </div>
      ),
      nextAccrual: isActive ? (
        planNumber > 3 ? (
          <Countdown deadline={(lastAccrual.seconds + days * 86400) * 1000} />
        ) : (
          <Countdown
            deadline={(lastAccrual.seconds + ONE_DAY_IN_SECONDS) * 1000}
          />
        )
      ) : (
        <ColoredLabel text={'Выполнено'} />
      ),
      paymentMethod: wallet,
      amount: `$${amount.toFixed(2)}`,
      received: `$${received.toFixed(2)}`,
      willReceived: `$${willReceived.toFixed(2)}`,
      dateOpen: secondsToString(date.seconds, true),
      dateClose: secondsToString(addDays(date, days) / 1000, true),
      isActive
    }
  })
}
