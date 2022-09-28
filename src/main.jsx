import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import '@/locales/i18n'

import Store from '@/store'
import { MyThemeProvider } from '@/styles'

import Routes from './routes'

import i18n from '@/locales/i18n'
import { defaultLocales } from '@/locales/locales'

/**
 * @constant
 * @description Envioriments variables.
 */
const { REACT_ENVIRONMENT } = import.meta.env

if (REACT_ENVIRONMENT === 'DEVELOPMENT') {
  /**
   * Debug change language
   * @param  {string} targetLanguage - set language
   * @return
   */
  window.debugi18n = function (targetLanguage) {
    const notLanguageOfApp = !defaultLocales.includes(targetLanguage)
    if (notLanguageOfApp) {
      console.error(
        `Idioma errado - Os idiomas da aplicação são: ${defaultLocales}`
      )
      return
    }
    i18n.changeLanguage(targetLanguage)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <MyThemeProvider>
        <BrowserRouter>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </MyThemeProvider>
    </Provider>
  </StrictMode>
)
