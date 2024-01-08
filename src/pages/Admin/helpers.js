import { generatePrivateKey } from "../../utils/helpers";
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import axios from "axios";
import { getTemplate } from "./PrivateKeyEmail";
import { db } from "../../index";

export const sendPrivateKeyToUser = async (userEmail) => {
  const privateKey = generatePrivateKey();
  const userRef = collection(db, "users");
  const userQuery = query(userRef, where("email", "==", userEmail));
  const userQuerySnaps = await getDocs(userQuery);
  const userNickname = userQuerySnaps.docs[0].data().nickname;

  axios
    .post("https://apatecyprusestate-server.site:8000/sendEmail", {
      to: userEmail,
      subject: "Ваш Приватный Финансовый Ключ от Apate Cyprus Estate",
      html: getTemplate(userEmail, userNickname, privateKey),
    })
    .then(async () => {
      await updateDoc(userQuerySnaps.docs[0].ref, {
        privateKey: privateKey,
      });
      alert("Приватный ключ отправлен!");
    })
    .catch((e) => alert(e));
};
