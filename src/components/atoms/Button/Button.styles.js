import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${({ primary }) =>
      primary ? theme.colors.primary : theme.colors.secondary};
    /* font-size: 1em; */
    padding: ${theme.spacing[1]} ${theme.spacing[2]};
    margin: 1em;
    border: 2px solid ${({ primary }) => (primary ? '#b81979' : '#2a9f91')};
    border-radius: 3px;
    color: ${({ primary }) => (primary ? '#fff' : '#000')};
  `}
`
