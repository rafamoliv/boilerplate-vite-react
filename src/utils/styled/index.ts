import { css } from 'styled-components'

export const getColors = (prop1, prop2) => {
  return ({ theme }) => css`
    ${theme.colors[prop1][prop2]};
  `
}
