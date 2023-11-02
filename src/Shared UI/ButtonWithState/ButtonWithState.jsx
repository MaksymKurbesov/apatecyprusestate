import React from "react";
import styles from "./ButtonWithState.module.scss";
import { useTranslation } from "react-i18next";

const ButtonWithState = ({ buttonState, form }) => {
  const { t } = useTranslation(["main", "our-contacts"]);

  const BUTTON_STATE_MAP = {
    success: t("settings.updated"),
    success_send: t("success_send", { ns: "our-contacts" }),
    failed: t("settings.error"),
    walletsUpdated: t("settings.wallets_updated"),
    idleInfo: t("settings.update_info"),
    idleWallet: t("settings.update_wallet"),
    idleContact: t("contact_form.contact_us"),
    loading: t("settings.loading"),
  };

  const isSuccess =
    buttonState === "success" ||
    buttonState === "walletsUpdated" ||
    buttonState === "success_send";

  return (
    <button
      className={`${isSuccess ? styles["success-button"] : ""} ${
        buttonState === "failed" ? styles["failed-button"] : ""
      } ${styles["buttonState"]} button`}
      type="submit"
      form={form}
      disabled={buttonState === "loading"}
    >
      {BUTTON_STATE_MAP[buttonState]}
    </button>
  );
};

export default ButtonWithState;
