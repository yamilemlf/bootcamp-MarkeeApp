import styled, { css } from 'styled-components/macro'

export const Span = styled.span`
color: red;
`
export const SpanStyled = styled(Span)`
font-style: italic;
color: ${({ theme }) => theme.colors.primaryDark};
`

export const Title = styled.div`${({ theme }) => css`
background: ${theme.colors.black};
color: ${theme.colors.primary};
font-size: 3rem;
`}`
