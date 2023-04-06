import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import locales from './locales'

const { REACT_ENVIRONMENT } = import.meta.env
const hasDebug = REACT_ENVIRONMENT === 'DEVELOPMENT'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: locales,
    fallbackLng: 'ptbr',
    debug: hasDebug,
    interpolation: { escapeValue: false }
  })

export default i18n
