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
