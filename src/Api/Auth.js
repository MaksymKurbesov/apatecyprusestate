import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../index";
import { addCustomUserFields, addReferralToAllLevels } from "../utils/helpers";

const registerWithEmailAndPassword = async (userData) => {
  const { nickname, email, password, referredBy, phoneNumber } = userData;
  const nicknameWithoutSpace = nickname.trim();
  const referredByWithoutSpace = referredBy.trim();

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: nicknameWithoutSpace,
    }).catch((err) => console.log(err));

    await addReferralToAllLevels(referredByWithoutSpace, nicknameWithoutSpace);

    const user = res.user;
    await setDoc(doc(db, "users", nicknameWithoutSpace), {
      nickname: nicknameWithoutSpace,
      email,
      referredBy: referredByWithoutSpace,
      ...addCustomUserFields(user, phoneNumber),
    });
  } catch (err) {
    console.error(err);

    if (err.code === "auth/email-already-in-use") {
      return `Извините, но этот email адрес уже занят. Пожалуйста, выберите другой email адрес для вашей учетной записи.`;
    }
  } finally {
    logout();
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err.code);

    if (err.code === "auth/wrong-password")
      return `Неверный email адрес или пароль`;
    if (err.code === "auth/user-not-found")
      return `Такого пользователя не существует`;
    if (err.code === "auth/too-many-requests")
      return `Слишком частые запросы. Подождите примерно 5 минут.`;
  }
};

const logout = () => {
  signOut(auth);
};

export { registerWithEmailAndPassword, logInWithEmailAndPassword, logout };
