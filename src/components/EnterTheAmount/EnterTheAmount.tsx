import React, { ReactNode, useEffect } from 'react'
import styles from './EnterTheAmount.module.scss'
import { checkIsDigitals, getPlanByRegion } from '../../utils/helpers'
import ColoredLabel from '../ColoredLabel/ColoredLabel'
import { useOutletContext } from 'react-router-dom'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IContextType } from '../ProfileLayout/ProfileLayout'
import { IWallets } from '../../@types/IWallets'

interface IEnterTheAmount {
  additionalInfo: ReactNode
  isMakeDeposit?: boolean
  isWithdrawn?: boolean
}

const EnterTheAmount = ({
  additionalInfo,
  isMakeDeposit,
  isWithdrawn
}: IEnterTheAmount) => {
  const { userData } = useOutletContext<IContextType>()
  const { getValues, setFocus, register } = useFormContext()
  const { t } = useTranslation()

  useEffect(() => {
    setFocus('amount')
  }, [])

  const walletKey: keyof IWallets = getValues('wallet')
  // const regionKey: keyof IWallets = getValues('region')

  return (
    <div className={`${styles['enter-the-amount']}`}>
      <div className={`${styles['input-wrapper']} custom-bg custom-border`}>
        <span className={styles['prefix']}>$</span>
        <input
          type={'text'}
          autoComplete={'off'}
          {...register('amount', {
            valueAsNumber: true,
            required: t('errors.wrong_amount'),
            validate: {
              isNumber: (v) => checkIsDigitals(v) || t('errors.wrong_amount'),
              ...((isMakeDeposit || isWithdrawn) && {
                isEnoughBalance: (v) =>
                  v <= userData.wallets[walletKey].available ||
                  t('errors.no_money')
              })
            },
            ...(isWithdrawn && {
              min: {
                value: 10,
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
          })}
        />
        <span className={styles['suffix']}>
          <ColoredLabel text={'USD'} />
        </span>
      </div>
      <div className={styles['additional-info']}>{additionalInfo}</div>
    </div>
  )
}

export default EnterTheAmount
