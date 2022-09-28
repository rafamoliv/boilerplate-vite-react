import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PropTypes from 'prop-types'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import Store from '@/store'
import { MyThemeProvider } from '@/styles'

import i18n from './i18nForTests'

// Setup to testign library: https://testing-library.com/docs/react-testing-library/setup

// Clean tree react
afterEach(() => {
  cleanup()
})

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={Store}>
      <MyThemeProvider>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </MyThemeProvider>
    </Provider>
  )
}

const customRender = (ui, options) => {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options
  })
}

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render, userEvent }
