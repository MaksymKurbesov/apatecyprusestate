import 'i18next'
import enLocales from '../utils/locales/main/en.json'
import partnersProgramEN from '../utils/locales/partners-program/en.json'
import aboutUsEN from '../utils/locales/about-us/en.json'
import ourContactsEN from '../utils/locales/our-contacts/en.json'
import faqEN from '../utils/locales/faq/en.json'
import agreementEN from '../utils/locales/agreement/en.json'
import projectsEN from '../utils/locales/projects/en.json'
import structureEN from '../utils/locales/structure/en.json'
import { defaultNS, resources } from '../i18n'

declare module 'i18next' {
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: typeof defaultNS
    resources: typeof resources['en']
    // other
  }
}
