import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  Auth
} from 'firebase/auth'

import { AuthErrorCodes } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

import { db } from '../index'
import { addCustomUserFields, addReferralToAllLevels } from '../utils/helpers'
import { ISignUpFields } from '../@types/IInputs'

const registerWithEmailAndPassword = async (userData: ISignUpFields) => {
  const { nickname, email, password, referredBy, phoneNumber } = userData
  const nicknameWithoutSpace = nickname.trim()
  let referredByWithoutSpaces = ''

  if (referredBy) {
    referredByWithoutSpaces = referredBy
  }

  try {
    const auth: Auth = await getAuth()
    const res = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      password
    )

    const user: User = res.user

    await updateProfile(user, {
      displayName: nicknameWithoutSpace
    }).catch((err) => console.log(err))

    await addReferralToAllLevels(referredByWithoutSpaces, nicknameWithoutSpace)

    await setDoc(doc(db, 'users', nicknameWithoutSpace), {
      email: email.trim(),
      ...addCustomUserFields(
        user,
        phoneNumber,
        nicknameWithoutSpace,
        referredByWithoutSpaces
      )
    })
  } catch (err) {
    console.error(err)
    const isError = typeof err === 'object' && err !== null && 'code' in err

    if (isError && err.code === AuthErrorCodes.EMAIL_EXISTS) {
      return `Извините, но этот email адрес уже занят. Пожалуйста, выберите другой email адрес для вашей учетной записи.`
    }

    throw err
  }
}

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(getAuth(), email, password)
  } catch (err) {
    console.error(err)
    const isError = typeof err === 'object' && err !== null && 'code' in err

    if (isError && err.code === 'auth/wrong-password')
      return `Неверный email адрес или пароль`
    if (isError && err.code === 'auth/user-not-found')
      return `Такого пользователя не существует`
    if (isError && err.code === 'auth/too-many-requests')
      return `Слишком частые запросы. Подождите примерно 5 минут.`

    alert(err)
  }
}

const logout = () => {
  signOut(getAuth())
}

export { registerWithEmailAndPassword, logInWithEmailAndPassword, logout }
