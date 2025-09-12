import enCommon from './public/locales/en/common.json'
//import ptCommon from './public/locales/pt/common.json'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: { common: enCommon },
}

i18next.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18next;