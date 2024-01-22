import React, { FC, useMemo, useState } from 'react'
import { DevTool } from '@hookform/devtools'
import styles from './Withdrawal.module.scss'
import Stepper from '../../../Shared UI/Stepper/Stepper'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import WalletsList from '../../../components/WalletsList/WalletsList'
import EnterTheAmount from '../../../components/EnterTheAmount/EnterTheAmount'
import TransactionConfirmation from '../../../components/TransactionConfirmation/TransactionConfirmation'
import { addTransaction } from '../../../Api/Transactions'
import { v4 as uuidv4 } from 'uuid'
import SuccessModal from '../../../components/SuccesModal/SuccessModal'
import {
  closeModal,
  hasActiveRestrictions,
  openModal
} from '../../../utils/helpers'
import { auth } from '../../../index'
import { useOutletContext } from 'react-router-dom'
import { getDateNow } from '../../../utils/helpers/date'
import { useTranslation } from 'react-i18next'
import { telegramNotification } from '../../../Api/Notifications'
import ErrorModal from '../../../components/ErrorModal/ErrorModal'
import { setUserRestriction } from '../../../Api/UserData'
import { IContextType } from '../../../components/ProfileLayout/ProfileLayout'
import { IWithdrawnFormFields } from '../../../@types/IInputs'
import { RESTRICTIONS } from '../../../@types/IUser'
import { serverTimestamp } from 'firebase/firestore'

interface ICommission {
  [key: string]: [number, string]
}

export const COMMISSION: ICommission = {
  'TRC20 Tether': [1, 'USD'],
  'Perfect Money': [0.5, '%'],
  Bitcoin: [5.8, 'USD'],
  Ethereum: [3.5, 'USD']
}

export const Withdrawal: FC = () => {
  const { t } = useTranslation()
  const { userData } = useOutletContext<IContextType>()

  const [isSuccessModalStatus, setIsSuccessModalStatus] = useState(false)
  const [isInvalidPrivateKeyModalStatus, setIsInvalidPrivateKeyModalStatus] =
    useState(false)

  const [loading, setLoading] = useState(false)
  const methods = useForm<IWithdrawnFormFields>({
    mode: 'onChange'
  })

  const { watch, reset, handleSubmit, control } = methods

  const [currentStep, setCurrentStep] = useState<number>(1)

  const userHasRestriction = hasActiveRestrictions(userData.restrictions)

  const selectedWallet: string = watch('wallet')
  const amount: number = watch('amount')
  const transactionId = uuidv4()

  const onSubmit: SubmitHandler<IWithdrawnFormFields> = async (
    data: IWithdrawnFormFields
  ) => {
    if (userData.wallets[data.wallet].number === '') return

    const invalidPrivateKey =
      userData.restrictions.isPrivateKey &&
      userData.privateKey !== watch('private-key')

    if (invalidPrivateKey) {
      await setUserRestriction(
        RESTRICTIONS.PRIVATE_KEY_INVALID,
        userData.nickname
      )
      setIsInvalidPrivateKeyModalStatus(true)
      return
    }

    setLoading(true)

    await addTransaction({
      ...data,
      id: transactionId,
      type: 'Вывод',
      executor: data.wallet,
      nickname: userData.nickname,
      status: 'Выполнено',
      date: serverTimestamp()
    })
    await telegramNotification({
      ...data,
      walletNumber: userData.wallets[data.wallet].number,
      type: 'Вывод'
    })
    openModal(setIsSuccessModalStatus)
    reset()
    setLoading(false)
  }

  const STEPS = useMemo(
    () => [
      {
        stepName: 'wallet',
        title: t('stepper.choose_wallet'),
        content: <WalletsList />
      },
      {
        stepName: 'amount',
        title: t('stepper.enter_amount'),
        content: selectedWallet && (
          <EnterTheAmount
            amount={amount}
            selectedWallet={selectedWallet}
            isWithdrawn
          />
        )
      },
      {
        stepName: 'cashInConfirm',
        title: t('stepper.transaction_confirmation'),
        content: selectedWallet && (
          <TransactionConfirmation
            isPrivateKey={userData.restrictions.isPrivateKey}
            userWithWallet={!!userData.wallets[selectedWallet].number}
            infoText={t('popups.private_key_popup')}
            isWithdrawal
            bill={[
              {
                label: t('bill.payment_system'),
                value: <p>{selectedWallet}</p>
              },
              {
                label: t('bill.amount'),
                value: <p>{Number(amount).toFixed(2)}</p>
              },
              {
                label: t('bill.commission'),
                value: <p>{COMMISSION[selectedWallet][0]}</p>
              },
              {
                label: t('bill.will_be_received'),
                value: <p>{Number(amount) - COMMISSION[selectedWallet][0]}</p>
              },
              {
                label: t('bill.date'),
                value: getDateNow()
              },
              {
                label: 'Transaction ID',
                value: transactionId.slice(1, 17)
              }
            ]}
          />
        )
      }
    ],
    [selectedWallet, amount]
  )

  return (
    <div className={styles['withdrawal']}>
      <FormProvider {...methods}>
        <form id={'cash-in-form'} onSubmit={handleSubmit(onSubmit)}>
          <Stepper
            steps={STEPS}
            loading={loading}
            isRestrictions={userHasRestriction}
          />
        </form>
      </FormProvider>
      <SuccessModal
        closeHandler={() => closeModal(setIsSuccessModalStatus)}
        modalStatus={isSuccessModalStatus}
        toTransactionButton
      >
        <h3>Заявка на вывод средств успешно принята!</h3>
        <div className={styles['text']}>
          <p>
            Мы рады сообщить вам, что ваша заявка на вывод средств была успешно
            принята и находится в обработке. Наши специалисты скоро проверят ваш
            запрос и проведут необходимые действия.
          </p>
          <p>
            Следите за статусом вашей заявки в разделе <span>"Транзакции"</span>
            .
          </p>
        </div>
      </SuccessModal>
      <ErrorModal
        closeHandler={() => closeModal(setIsInvalidPrivateKeyModalStatus)}
        modalStatus={isInvalidPrivateKeyModalStatus}
      >
        <h3>Приватный финансовый ключ был введён неверно!</h3>
        <div className={styles['text']}>
          <p>
            Если вы потеряли или забыли свой приватный ключ, воспользуйтесь
            процедурой восстановления или свяжитесь с нашей службой поддержки
            для дополнительной помощи.
          </p>
        </div>
      </ErrorModal>
      <DevTool control={control} />
    </div>
  )
}
