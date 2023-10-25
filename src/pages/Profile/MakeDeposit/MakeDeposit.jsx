import React, { useState } from "react";
import Stepper from "../../../Shared UI/Stepper/Stepper";
import WalletsList from "../../../components/WalletsList/WalletsList";
import EnterTheAmount from "../../../components/EnterTheAmount/EnterTheAmount";
import PlansList from "../../../components/PlansList/PlansList";
import styles from "./MakeDeposit.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import TransactionConfirmation from "../../../components/TransactionConfirmation/TransactionConfirmation";
import { v4 as uuidv4 } from "uuid";
import {
  closeModal,
  getPlanByRegion,
  hasActiveRestrictions,
  openModal,
} from "../../../utils/helpers";
import { addTransaction } from "../../../Api/Transactions";
import { openDeposit } from "../../../Api/Deposits";
import SuccessModal from "../../../components/SuccesModal/SuccessModal";
import { auth } from "../../../index";
import { updateUserBalanceAfterDeposit } from "../../../Api/UserData";
import Projects from "../../../components/Projects/Projects";
import EnterTheAmountAddInfo from "./EnterTheAmountAddInfo";
import {
  calculateIncomeInDay,
  calculateTotalIncome,
} from "../../../utils/helpers/calculates";
import { getDateNow } from "../../../utils/helpers/date";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";

const transactionId = uuidv4();

const MakeDeposit = () => {
  const { t } = useTranslation();
  const { userData } = useOutletContext();
  const [individualModalStatus, setIndividualModalStatus] = useState(false);
  const [successModalStatus, setSuccessModalStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      amount: 0,
    },
    mode: "onChange",
  });

  const userHasRestriction = hasActiveRestrictions(userData.restrictions);

  const selectedPlan = methods.watch("region");
  const selectedProject = methods.watch("project");
  const selectedWallet = methods.watch("wallet");
  const amount = methods.watch("amount");

  const onSubmit = async (data) => {
    setLoading(true);
    await addTransaction({
      ...data,
      id: transactionId,
      status: "Выполнено",
      type: "Вклад",
      executor: data.wallet,
      nickname: auth.currentUser.displayName,
    });

    await openDeposit({ ...data, ...getPlanByRegion(data.region) })
      .then(() => {
        openModal(setSuccessModalStatus);
        methods.reset();
      })
      .finally(() => {
        setLoading(false);
      });

    await updateUserBalanceAfterDeposit(
      data.wallet,
      data.amount,
      auth.currentUser.displayName
    );
  };

  const STEPS = [
    {
      stepName: "region",
      title: t("stepper.region"),
      content: <PlansList />,
    },
    {
      stepName: "project",
      title: t("stepper.project"),
      content: <Projects />,
    },
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
            <EnterTheAmountAddInfo
              amount={amount}
              selectedPlan={selectedPlan}
            />
          }
          isMakeDeposit
        />
      ),
    },
    {
      stepName: "makeDepositConfirm",
      title: t("stepper.transaction_confirmation"),
      content: (
        <TransactionConfirmation
          bill={[
            {
              label: t("bill.region"),
              value: <p>{selectedPlan}</p>,
            },
            {
              label: t("bill.project"),
              value: <p>{selectedProject}</p>,
            },
            {
              label: t("bill.payment_system"),
              value: <p>{selectedWallet}</p>,
            },
            {
              label: t("bill.amount"),
              value: <p>{amount.toFixed(2)}</p>,
            },
            {
              label: t("bill.income_in_day"),
              value: <p>{calculateIncomeInDay(amount, selectedPlan)}</p>,
            },
            {
              label: t("bill.total_income"),
              value: <p>{calculateTotalIncome(amount, selectedPlan)}</p>,
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
    <div className={styles["make-deposit"]}>
      <FormProvider {...methods}>
        <form id={"cash-in-form"} onSubmit={methods.handleSubmit(onSubmit)}>
          <Stepper
            steps={STEPS}
            loading={loading}
            isRestrictions={userHasRestriction}
          />
        </form>
      </FormProvider>
      <SuccessModal
        closeHandler={() => closeModal(setSuccessModalStatus)}
        modalStatus={successModalStatus}
      >
        <h3>Инвестиционный план успешно открыт!</h3>
        <div className={styles["text"]}>
          <p>
            Мы рады сообщить вам, что ваш запрос на открытие инвестиционного
            плана (депозита) был успешно выполнен.
          </p>
          <p>
            Вы можете отслеживать начисления и дополнительную информацию по
            депозиту в личном кабинете.
          </p>
        </div>
      </SuccessModal>
    </div>
  );
};

export default MakeDeposit;
