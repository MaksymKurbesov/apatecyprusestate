import React, { useState } from "react";
import Stepper from "../../../Shared UI/Stepper/Stepper";
import WalletsList from "../../../components/WalletsList/WalletsList";
import styles from "./CashIn.module.scss";
import EnterTheAmount from "../../../components/EnterTheAmount/EnterTheAmount";
import { useForm, FormProvider } from "react-hook-form";
import TransactionConfirmation from "../../../components/TransactionConfirmation/TransactionConfirmation";
import ColoredLabel from "../../../components/ColoredLabel/ColoredLabel";
import { addTransaction } from "../../../Api/Transactions";
import {
  closeModal,
  openModal,
  telegramNotification,
} from "../../../utils/helpers";
import { v4 as uuidv4 } from "uuid";
import SuccesModal from "../../../components/SuccesModal/SuccesModal";
import { auth } from "../../../index";
import { getDateNow } from "../../../utils/helpers/date";
import { useTranslation } from "react-i18next";

const CashIn = () => {
  const { t } = useTranslation();
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
    setLoading(true);
    await addTransaction({
      ...data,
      id: uuidv4(),
      type: "Пополнение",
      executor: data.wallet,
      nickname: auth.currentUser.displayName,
    })
      .then(() => {
        openModal(setIsSuccessModalStatus);
        telegramNotification({ ...data, type: "Пополнение" });
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
          additionalInfo={
            <p>
              {t("bill.commission")}:<span> 0.00 USD</span>
            </p>
          }
        />
      ),
    },
    {
      stepName: "cashInConfirm",
      title: t("stepper.transaction_confirmation"),
      content: (
        <TransactionConfirmation
          info
          isInstruction={true}
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
              label: t("bill.status"),
              value: <ColoredLabel text={t("waiting_for_payment")} />,
            },
          ]}
        />
      ),
    },
  ];

  return (
    <div className={styles["cash-in"]}>
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
        <h3>Заявка на пополнение кошелька успешно принята!</h3>
        <div className={styles["text"]}>
          <p>
            Мы хотели бы сообщить вам, что ваша заявка на пополнение личного
            кошелька успешно принята и находится в обработке. Наши специалисты
            скоро проверят ваш запрос и проведут необходимые действия.
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

export default CashIn;
