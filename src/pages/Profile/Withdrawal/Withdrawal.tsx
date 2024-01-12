import React, { FC, useState } from 'react'
import styles from './Withdrawal.module.scss'
import Stepper from '../../../Shared UI/Stepper/Stepper'
import { useForm, FormProvider } from 'react-hook-form'
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
import EnterTheAmountAddInfo from './EnterTheAmountAddInfo'
import { getDateNow } from '../../../utils/helpers/date'
import { useTranslation } from 'react-i18next'
import { telegramNotification } from '../../../Api/Notifications'
import ErrorModal from '../../../components/ErrorModal/ErrorModal'
import { setUserRestriction } from '../../../Api/UserData'
import { IContextType } from '../../../components/ProfileLayout/ProfileLayout'
import { IWallets } from '../../../@types/IWallets'

const transactionId = uuidv4()

interface IFormInputs {
  wallet: keyof IWallets
  amount: string
  'private-key': string
}

export const Withdrawal: FC = () => {
  const { t } = useTranslation()
  const { userData } = useOutletContext<IContextType>()
  const [isSuccessModalStatus, setIsSuccessModalStatus] = useState(false)
  const [isInvalidPrivateKeyModalStatus, setIsInvalidPrivateKeyModalStatus] =
    useState(false)
  const [loading, setLoading] = useState(false)
  const methods = useForm<IFormInputs>({
    mode: 'onChange'
  })

  const userHasRestriction = hasActiveRestrictions(userData.restrictions)

  const selectedWallet: any = methods.watch('wallet')
  const amount = methods.watch('amount')

  const onSubmit = async (data: IFormInputs) => {
    if (userData.wallets[data.wallet].number === '') return

    const invalidPrivateKey =
      userData.restrictions.isPrivateKey &&
      userData.privateKey !== methods.watch('private-key')

    if (invalidPrivateKey) {
      await setUserRestriction('isPrivateKeyInvalid')
      setIsInvalidPrivateKeyModalStatus(true)
      return
    }

    setLoading(true)
    await addTransaction({
      ...data,
      id: transactionId,
      type: 'Вывод',
      executor: data.wallet,
      nickname: auth.currentUser?.displayName
    })
    await telegramNotification({
      ...data,
      walletNumber: userData.wallets[data.wallet].number,
      type: 'Вывод'
    })
    openModal(setIsSuccessModalStatus)
    methods.reset()
    setLoading(false)
  }

  const STEPS = [
    {
      stepName: 'wallet',
      title: t('stepper.choose_wallet'),
      content: <WalletsList />
    },
    {
      stepName: 'amount',
      title: t('stepper.enter_amount'),
      content: (
        <EnterTheAmount
          additionalInfo={
            <EnterTheAmountAddInfo
              amount={amount}
              selectedWallet={selectedWallet}
            />
          }
          isWithdrawn
        />
      )
    },
    {
      stepName: 'cashInConfirm',
      title: t('stepper.transaction_confirmation'),
      content: (
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
              value: <p>0.00</p>
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
  ]

  return (
    <div className={styles['withdrawal']}>
      <FormProvider {...methods}>
        <form id={'cash-in-form'} onSubmit={methods.handleSubmit(onSubmit)}>
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
    </div>
  )
}
