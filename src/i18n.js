import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocales from "./utils/locales/main/en.json";
import ruLocales from "./utils/locales/main/ru.json";
import partnersProgramEN from "./utils/locales/partners-program/en.json";
import partnersProgramRU from "./utils/locales/partners-program/ru.json";
import aboutUsEN from "./utils/locales/about-us/en.json";
import aboutUsRU from "./utils/locales/about-us/ru.json";
import ourContactsEN from "./utils/locales/our-contacts/en.json";
import ourContactsRU from "./utils/locales/our-contacts/ru.json";
import faqEN from "./utils/locales/faq/en.json";
import faqRU from "./utils/locales/faq/ru.json";
import agreementEN from "./utils/locales/agreement/en.json";
import agreementRU from "./utils/locales/agreement/ru.json";

const resources = {
  en: {
    main: enLocales,
    "partners-program": partnersProgramEN,
    "about-us": aboutUsEN,
    "our-contacts": ourContactsEN,
    faq: faqEN,
    agreement: agreementEN,
  },
  ru: {
    main: ruLocales,
    "partners-program": partnersProgramRU,
    "about-us": aboutUsRU,
    "our-contacts": ourContactsRU,
    faq: faqRU,
    agreement: agreementRU,
  },
};

const languageDetector = {
  init: Function.prototype,
  type: "languageDetector",
  async: true, // flags below detection to be async
  detect: async (callback) => {
    const selectedLanguage = localStorage.getItem("Language");
    callback(selectedLanguage);
  },
  cacheUserLanguage: (lng) => {
    localStorage.setItem("Language", lng);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["querystring", "cookie"],
      cache: ["cookie"],
    },
    resources,
    ns: ["main", "partners-program"],
    backend: {
      loadPath: "./utils/locales/{{ns}}/{{lng}}.json",
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
