import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './global'
import { theme } from './theme'

export const MyThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

MyThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}
