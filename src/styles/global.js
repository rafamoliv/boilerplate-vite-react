import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      outline: 0;
      padding: 0;
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
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
  `}

`
