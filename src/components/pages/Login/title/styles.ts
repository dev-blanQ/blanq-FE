import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const Container = styled.header`
  /*color: var(--color-green-400);*/
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Main = styled.h1`
  ${FONTS.h1}
  margin-bottom:1rem;
`

const Content = styled.p`
  ${FONTS.body2}
`

const St = {
  Container,
  Main,
  Content,
}
export default St
