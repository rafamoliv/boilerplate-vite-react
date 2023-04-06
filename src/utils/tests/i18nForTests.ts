import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      foo: 'Welcome to React and react-i18next'
    }
  },
  ptbr: {
    translation: {
      foo: 'Bem vindo ao React e ao react-i18next'
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: resources.en,
      ptbr: resources.ptbr
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
