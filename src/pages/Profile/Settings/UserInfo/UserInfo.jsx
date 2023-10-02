import React from "react";
import styles from "./UserInfo.module.scss";
import { useFormContext } from "react-hook-form";

const UserInfo = ({ userData, loading }) => {
  const { register } = useFormContext();

  return (
    <div className={styles["user-info"]}>
      <h3>User Settings</h3>
      <div className={styles["inputs-wrapper"]}>
        <label className={styles["nickname"]}>
          <p>Nickname</p>
          <div className={`${styles["input-wrapper"]} custom-border`}>
            <input type={"text"} value={userData.nickname} disabled />
          </div>
        </label>
        <label className={styles["email"]}>
          <p>E-mail</p>
          <div className={`${styles["input-wrapper"]} custom-border`}>
            <input type={"text"} value={userData.email} disabled />
          </div>
        </label>
        <label className={styles["first-name"]}>
          <p>First name</p>
          <div className={`${styles["input-wrapper"]} custom-border`}>
            <input
              {...register("firstName", {
                value: userData.firstName,
              })}
              type={"text"}
            />
          </div>
        </label>
        <label className={styles["last-name"]}>
          <p>Last name</p>
          <div className={`${styles["input-wrapper"]} custom-border`}>
            <input
              {...register("lastName", {
                value: userData.lastName,
              })}
              type={"text"}
            />
          </div>
        </label>
        <label className={styles["phone-number"]}>
          <p>Phone number</p>
          <div className={`${styles["input-wrapper"]} custom-border`}>
            <input
              {...register("phoneNumber", {
                value: userData.contacts.phoneNumber,
              })}
              type={"text"}
            />
          </div>
        </label>
        <label className={styles["telegram"]}>
          <p>Telegram</p>
          <div className={`${styles["input-wrapper"]} custom-border`}>
            <input
              {...register("telegram", {
                value: userData.contacts.telegram,
              })}
              type={"text"}
            />
          </div>
        </label>
        <label className={styles["vkontakte"]}>
          <p>Vkontakte</p>
          <div className={`${styles["input-wrapper"]} custom-border`}>
            <input
              {...register("vkontakte", {
                value: userData.contacts.vk,
              })}
              type={"text"}
            />
          </div>
        </label>
        <label className={styles["old-password"]}>
          <p>Old password</p>
          <div className={`${styles["input-wrapper"]} custom-border`}>
            <input {...register("oldPassword")} type={"password"} />
          </div>
        </label>
        <label className={styles["new-password"]}>
          <p>New password</p>
          <div className={`${styles["input-wrapper"]} custom-border`}>
            <input {...register("newPassword")} type={"password"} />
          </div>
        </label>
        <label className={styles["confirm-password"]}>
          <p>Confirm password</p>
          <div className={`${styles["input-wrapper"]} custom-border`}>
            <input {...register("confirmPassword")} type={"password"} />
          </div>
        </label>
      </div>
      <button
        type="submit"
        form="settings-form"
        className={`${styles["update-info-button"]} button`}
        disabled={loading}
      >
        Update info
      </button>
    </div>
  );
};

export default UserInfo;
