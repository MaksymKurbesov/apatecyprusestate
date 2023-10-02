export const INPUTS = [
  {
    name: "email",
    placeholder: "E-email",
    validations: {
      required: true,
      validate: {
        matchPattern: (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
      },
    },
    errorMessages: {
      required: "Введите почту",
      matchPattern:
        "Адрес электронной почты должен быть действительным адресом",
    },
  },
  {
    name: "nickname",
    validations: {
      required: true,
      validate: {
        minLength: (v) => v.length >= 5,
      },
    },
    placeholder: "Nickname",
    errorMessages: {
      required: "Введите никнейм",
      minLength: "Минимальная длина никнейма 5 символов",
    },
  },
  {
    type: "password",
    name: "password",
    validations: {
      required: true,
      validate: {
        minLength: (v) => v.length >= 6,
        maxLength: (v) => v.length <= 20,
      },
    },
    placeholder: "Password",
    errorMessages: {
      required: "Введите пароль",
      minLength: "Минимальная длина пароля 6 символов",
      maxLength: "Максимальная длина пароля 20 символов",
    },
  },
  {
    type: "password",
    name: "confirmPassword",
    validations: {
      required: true,
    },
    placeholder: "Confirm password",
    errorMessages: {
      required: "Подтвердите пароль",
      validate: "Пароль не совпадает",
    },
  },
  {
    name: "phoneNumber",
    placeholder: "Phone number",
  },
  {
    name: "referredBy",
    placeholder: "Your referral nickname",
  },
];
