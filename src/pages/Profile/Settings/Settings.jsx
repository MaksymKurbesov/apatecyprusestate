import React, { useState } from "react";
import styles from "./Settings.module.scss";
import Avatar from "./Avatar/Avatar";
import UserInfo from "./UserInfo/UserInfo";
import Wallets from "./Wallets/Wallets";
import { useOutletContext } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { updateUserInfo } from "../../../Api/UserData";

const Settings = () => {
  const { userData } = useOutletContext();
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    updateUserInfo(data).then(() => {
      setLoading(false);
    });
  };

  return (
    <div className={styles["settings"]}>
      <FormProvider {...methods}>
        <form
          className={styles["user-info-wrapper"]}
          id={"settings-form"}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Avatar userID={userData.uid} />
          <UserInfo userData={userData} loading={loading} />
        </form>
      </FormProvider>
      <Wallets userWallets={userData.wallets} />
    </div>
  );
};

export default Settings;
