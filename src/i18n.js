import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocales from "./utils/locales/main/en.json";
import ruLocales from "./utils/locales/main/ru.json";
import elLocales from "./utils/locales/main/el.json";
import partnersProgramEN from "./utils/locales/partners-program/en.json";
import partnersProgramRU from "./utils/locales/partners-program/ru.json";
import partnersProgramEL from "./utils/locales/partners-program/el.json";
import aboutUsEN from "./utils/locales/about-us/en.json";
import aboutUsRU from "./utils/locales/about-us/ru.json";
import aboutUsEL from "./utils/locales/about-us/el.json";
import ourContactsEN from "./utils/locales/our-contacts/en.json";
import ourContactsRU from "./utils/locales/our-contacts/ru.json";
import ourContactsEL from "./utils/locales/our-contacts/el.json";
import faqEN from "./utils/locales/faq/en.json";
import faqRU from "./utils/locales/faq/ru.json";
import faqEL from "./utils/locales/faq/el.json";
import agreementEN from "./utils/locales/agreement/en.json";
import agreementRU from "./utils/locales/agreement/ru.json";
import projectsEN from "./utils/locales/projects/en.json";
import projectsRU from "./utils/locales/projects/ru.json";
import projectsEL from "./utils/locales/projects/el.json";
import structureEN from "./utils/locales/structure/en.json";
import structureRU from "./utils/locales/structure/ru.json";
import structureEL from "./utils/locales/structure/el.json";

const resources = {
  en: {
    main: enLocales,
    "partners-program": partnersProgramEN,
    "about-us": aboutUsEN,
    "our-contacts": ourContactsEN,
    faq: faqEN,
    agreement: agreementEN,
    projects: projectsEN,
    structure: structureEN,
  },
  ru: {
    main: ruLocales,
    "partners-program": partnersProgramRU,
    "about-us": aboutUsRU,
    "our-contacts": ourContactsRU,
    faq: faqRU,
    agreement: agreementRU,
    projects: projectsRU,
    structure: structureRU,
  },
  el: {
    main: elLocales,
    "partners-program": partnersProgramEL,
    "about-us": aboutUsEL,
    "our-contacts": ourContactsEL,
    faq: faqEL,
    projects: projectsEL,
    structure: structureEL,
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
    detection: {
      order: ["querystring", "cookie"],
      cache: ["cookie"],
    },
    resources,
    ns: ["main", "partners-program", "our-contacts"],
    backend: {
      loadPath: "./utils/locales/{{ns}}/{{lng}}.json",
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
