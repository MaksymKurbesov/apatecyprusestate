import axios from "axios";
import { TELEGRAM_URL } from "../utils/consts";
import { auth } from "../index";

export const telegramNotification = async (userData) => {
  try {
    await axios.post(TELEGRAM_URL, {
      chat_id: process.env.REACT_APP_CHAT_ID,
      parse_mode: "html",
      text: `Пользователь: ${auth.currentUser.displayName} \nТип операции: ${userData.type} \nСумма: $${userData.amount} \nНомер транзакции: ${userData["transaction-hash"]} \nКошелёк: ${userData.wallet}`,
    });
  } catch (e) {
    console.log(e, "telegramNotification");
  }
};

export const contactFormNotification = async (userData) => {
  try {
    await axios.post(TELEGRAM_URL, {
      chat_id: process.env.REACT_APP_CHAT_ID,
      parse_mode: "html",
      text: `User: ${userData["user-name"]} \nTelegram: ${userData.telegram} \nPhone: ${userData["phone-number"]}`,
    });
  } catch (e) {
    console.log(e, "contactFormNotification error");
  }
};

export const ourContactsFormNotification = async (userData) => {
  try {
    await axios.post(TELEGRAM_URL, {
      chat_id: process.env.REACT_APP_CHAT_ID,
      parse_mode: "html",
      text: `User: ${userData["user-name"]}\nEmail: ${userData.email}\nPhone: ${userData["phone-number"]}\nMessage: ${userData.message}`,
    });
  } catch (e) {
    console.log(e, "ourContactsFormNotification error");
  }
};
