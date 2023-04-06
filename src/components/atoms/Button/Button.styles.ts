import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${({ primary }) =>
      primary ? theme.colors.primary.medium : theme.colors.secondary.medium};
    padding: ${theme.spacing[1]} ${theme.spacing[2]};
    margin: ${theme.spacing[1]};
    border: ${theme.border.radius['0.25']} solid
      ${({ primary }) => (primary ? '#b81979' : '#2a9f91')};
    border-radius: ${theme.border.radius['0.5']};
    color: ${({ primary }) => (primary ? '#fff' : '#000')};
  `}
`
