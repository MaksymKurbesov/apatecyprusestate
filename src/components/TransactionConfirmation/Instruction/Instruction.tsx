import React, { FC } from 'react'
import styles from './Instruction.module.scss'
import CopyText from '../../CopyText/CopyText'
import { ReactComponent as ErrorIcon } from '../../../assets/SVG/exclamation.svg'
import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'
import { WALLETS } from '../../../utils/consts'

interface IInstruction {
  register: any
  errors: any
}

const Instruction: FC<IInstruction> = ({ register, errors }) => {
  const { t } = useTranslation()
  const { getValues } = useFormContext()

  console.log(getValues('wallet'), 'getValues')

  return (
    <div className={`${styles['instruction']} custom-bg custom-border`}>
      <h3>{t('instruction.title')}</h3>
      <ul className={styles['instruction-list']}>
        <li>
          <p>1. {t('instruction.1')}</p>
        </li>
        <li>
          <p>2. {t('instruction.2')}</p>
        </li>
        <li className={styles['our-wallet']}>
          <p>3. {t('instruction.3')}</p>
          <CopyText
            text={`${
              WALLETS.find((wallet) => wallet.name === getValues('wallet'))
                ?.our_wallet_number
            }`}
          />
        </li>
        <li className={styles['transaction-number-wrapper']}>
          <p>4. {t('instruction.4')}</p>
          <input
            autoComplete={'off'}
            {...register('transaction-hash', {
              required: true
            })}
            type={'text'}
            className={styles['transaction-number']}
            placeholder={t('instruction.enter_transaction_hash')}
          />
          {errors['transaction-hash'] ? (
            <div className={`${styles['transaction-error']} error`}>
              <ErrorIcon />
              <p>{t('instruction.enter_transaction_error')}</p>
            </div>
          ) : null}
        </li>
      </ul>
    </div>
  )
}

export default Instruction
