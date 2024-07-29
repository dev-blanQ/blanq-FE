import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const Container = styled.header`
  /*color: var(--color-green-400);*/
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

const Main = styled.div`
  ${FONTS.ENGLISH.h1}
`

const Content = styled.p`
  ${FONTS.KOREAN.body1}
`

const St = {
  Container,
  Main,
  Content,
}
export default St
