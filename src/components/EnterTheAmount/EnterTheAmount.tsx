import React, { ChangeEvent, ReactNode, useEffect } from 'react'
import styles from './EnterTheAmount.module.scss'
import { checkIsDigitals, getPlanByRegion } from '../../utils/helpers'
import ColoredLabel from '../ColoredLabel/ColoredLabel'
import { useOutletContext } from 'react-router-dom'
import { Message, RegisterOptions, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IContextType } from '../ProfileLayout/ProfileLayout'
import { IWallets } from '../../@types/IWallets'
import { COMMISSION } from '../../pages/Profile/Withdrawal/Withdrawal'

interface IEnterTheAmount {
  amount: number
  selectedWallet: string
  isMakeDeposit?: boolean
  isWithdrawn?: boolean
}

const calculateWithdrawalAmount = (amount: number, wallet: string): number => {
  if (wallet === 'Perfect Money') {
    return +(amount - amount * 0.05).toFixed(2)
  }

  if (amount === 0) return 0

  return +(amount - COMMISSION[wallet][0]).toFixed(2)
}

const EnterTheAmount = ({
  amount,
  selectedWallet,
  isMakeDeposit,
  isWithdrawn
}: IEnterTheAmount) => {
  const { userData } = useOutletContext<IContextType>()
  const { getValues, setFocus, register, setValue } = useFormContext()
  const { t } = useTranslation()

  console.log('enter the amount')

  const walletKey: keyof IWallets = getValues('wallet')

  useEffect(() => {
    setFocus('amount')
  }, [])

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('amount', parseFloat(event.target.value))
  }

  const amountValidation: RegisterOptions = {
    required: t('errors.wrong_amount') as Message,
    validate: {
      isNumber: (v: string) => checkIsDigitals(v) || t('errors.wrong_amount'),
      ...((isMakeDeposit || isWithdrawn) && {
        isEnoughBalance: (v: number) =>
          v <= userData.wallets[walletKey].available || t('errors.no_money')
      })
    },
    ...(isWithdrawn && {
      min: {
        value: 10 + COMMISSION[selectedWallet][0],
        message: `Минимальная сумма для вывода $10`
      }
    }),
    ...(isMakeDeposit && {
      max: {
        value: getPlanByRegion(getValues('region')).maxDeposit,
        message: `Максимальная сумма $${
          getPlanByRegion(getValues('region')).maxDeposit
        }`
      },
      min: {
        value: getPlanByRegion(getValues('region')).minDeposit,
        message: `Минимальная сумма $${
          getPlanByRegion(getValues('region')).minDeposit
        }`
      }
    })
  }

  return (
    <div className={`${styles['enter-the-amount']}`}>
      <div className={`${styles['input-wrapper']} custom-bg custom-border`}>
        <span className={styles['prefix']}>$</span>
        <input
          type={'text'}
          autoComplete={'off'}
          {...register('amount', amountValidation)}
          // onChange={handleAmountChange}
        />
        <span className={styles['suffix']}>
          <ColoredLabel text={'USD'} />
        </span>
      </div>
      <div className={styles['additional-info']}>
        <p>
          {t('bill.will_be_withdrawn')}:
          <span>
            {!isNaN(amount)
              ? calculateWithdrawalAmount(amount, selectedWallet)
              : 0}{' '}
            USD
          </span>
        </p>
        <p>
          {t('bill.commission')}:
          <span>
            {COMMISSION[selectedWallet][0]} {COMMISSION[selectedWallet][1]}
          </span>
        </p>
      </div>
    </div>
  )
}

export default EnterTheAmount
