import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const Title = () => {
  return (
    <Header>
      <Main>BlanQ</Main>
      <Content>하루에 한번, 케미를 채우는 빈칸퀴즈</Content>
    </Header>
  )
}

export default Title
const Header = styled.header`
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
