import { createGlobalStyle, css } from 'styled-components'

import { theme } from '.'

export const GlobalStyles = createGlobalStyle`
  ${() => css`
    * {
      margin: ${theme.spacing[0]};
      outline: ${theme.spacing[0]};
      padding: ${theme.spacing[0]};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    html,
    body,
    #root {
      height: 100%;
    }
    body {
      font-family: ${theme.font.family};
      scroll-behavior: smooth;
      line-height: 1.2;
      background-color: ${theme.colors.white};
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
  `}

`
