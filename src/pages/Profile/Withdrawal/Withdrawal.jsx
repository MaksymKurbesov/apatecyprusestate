import React, { useState } from "react";
import styles from "./Withdrawal.module.scss";
import Stepper from "../../../Shared UI/Stepper/Stepper";
import { useForm, FormProvider } from "react-hook-form";
import WalletsList from "../../../components/WalletsList/WalletsList";
import EnterTheAmount from "../../../components/EnterTheAmount/EnterTheAmount";
import TransactionConfirmation from "../../../components/TransactionConfirmation/TransactionConfirmation";
import { addTransaction } from "../../../Api/Transactions";
import { v4 as uuidv4 } from "uuid";
import SuccesModal from "../../../components/SuccesModal/SuccesModal";
import {
  closeModal,
  openModal,
  telegramNotification,
} from "../../../utils/helpers";
import { auth } from "../../../index";
import { useOutletContext } from "react-router-dom";
import EnterTheAmountAddInfo from "./EnterTheAmountAddInfo";
import { getDateNow } from "../../../utils/helpers/date";
import { useTranslation } from "react-i18next";

const transactionId = uuidv4();

const Withdrawal = () => {
  const { t } = useTranslation();
  const { userData } = useOutletContext();
  const [isSuccessModalStatus, setIsSuccessModalStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      amount: 0,
    },
    mode: "onChange",
  });

  const selectedWallet = methods.watch("wallet");
  const amount = methods.watch("amount");

  const onSubmit = async (data) => {
    if (userData.privateKey !== methods.watch("private-key")) {
      console.log("неверный приватный ключ");
      return;
    }

    setLoading(true);
    await addTransaction({
      ...data,
      id: transactionId,
      type: "Вывод",
      executor: data.wallet,
      nickname: auth.currentUser.displayName,
    })
      .then(() => {
        openModal(setIsSuccessModalStatus);
        telegramNotification({ ...data, type: "Вывод" });
        methods.reset();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const STEPS = [
    {
      stepName: "wallet",
      title: t("stepper.choose_wallet"),
      content: <WalletsList />,
    },
    {
      stepName: "amount",
      title: t("stepper.enter_amount"),
      content: (
        <EnterTheAmount
          additionalInfo={<EnterTheAmountAddInfo amount={amount} />}
          isWithdrawn
        />
      ),
    },
    {
      stepName: "cashInConfirm",
      title: t("stepper.transaction_confirmation"),
      content: (
        <TransactionConfirmation
          isPrivateKey={userData.restrictions.isPrivateKey}
          bill={[
            {
              label: t("bill.payment_system"),
              value: <p>{selectedWallet}</p>,
            },
            {
              label: t("bill.amount"),
              value: <p>{amount.toFixed(2)}</p>,
            },
            {
              label: t("bill.commission"),
              value: <p>0.00</p>,
            },
            {
              label: t("bill.date"),
              value: getDateNow(),
            },
            {
              label: "Transaction ID",
              value: transactionId.slice(1, 17),
            },
          ]}
        />
      ),
    },
  ];

  return (
    <div className={styles["withdrawal"]}>
      <FormProvider {...methods}>
        <form id={"cash-in-form"} onSubmit={methods.handleSubmit(onSubmit)}>
          <Stepper steps={STEPS} loading={loading} />
        </form>
      </FormProvider>
      <SuccesModal
        closeHandler={() => closeModal(setIsSuccessModalStatus)}
        modalStatus={isSuccessModalStatus}
        toTransactionButton
      >
        <h3>Заявка на вывод средств успешно принята!</h3>
        <div className={styles["text"]}>
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
      </SuccesModal>
    </div>
  );
};

export default Withdrawal;
