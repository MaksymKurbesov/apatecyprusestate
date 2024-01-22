export interface IWithdrawnFormFields {
  wallet: string
  amount: number
  commission: number
  'private-key': string
}

export interface ICashInFormFields {
  wallet: string
  amount: number
}

export interface IMakeDepositFormFields {
  region: string
  project: string
  wallet: string
  amount: string
}

export interface ISettingsFormFields {
  // newPassword: string
  // confirmPassword: string
  // oldPassword: string
  // phoneNumber: string
  // telegram: string
  // vkontakte: string
  // firstName: string
  // lastName: string
  [key: string]: string
}

export interface ISettingsWallets {}
export interface ISignUpFields {
  email: string
  nickname: string
  password: string
  confirmPassword: string
  phoneNumber: string
  referredBy?: string
  agreement: boolean
}

export interface IContactFormFields {
  username: string
  telegram: string
  phoneNumber: string
}

export interface IOurContactsFields {
  username: string
  email: string
  phoneNumber: string
  message: string
}
