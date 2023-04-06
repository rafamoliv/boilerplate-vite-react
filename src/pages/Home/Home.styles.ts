import styled from 'styled-components'

export const Container = styled.div`
  max-width: 80rem;
  margin: ${({ theme }) => theme.spacing[0]} auto;
  padding: ${({ theme }) => theme.spacing[2]};
  text-align: center;
`

export const Logo = styled.img`
  height: ${({ theme }) => theme.spacing[14]};
  margin: ${({ theme }) => theme.spacing[3]};
  display: none;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: inline-block;
  }
`

export const Card = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
`

export const Docs = styled.p`
  color: #888;
  font-size: ${({ theme }) => theme.font.sizes['xl']};
`
