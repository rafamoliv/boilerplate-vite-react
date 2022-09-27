import styled, { css } from 'styled-components'

import { ButtonStyle } from '@/components/atoms/'

export const Wrap = styled.div`
  ${({ theme }) => css`
    border: solid 1px ${theme.colors.primary};
    @media (min-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.font.sizes.xl};
    }
  `}
`
export const Button = styled(ButtonStyle.Button)``

export const Content = styled.div`
  background-color: white;
  border-radius: 8px;
  border: solid 1px #c5c5c5;
  padding: 16px;
`

export const Text = styled.p`
  color: #000000;
  margin-bottom: 0;
  margin-top: 0;
`
