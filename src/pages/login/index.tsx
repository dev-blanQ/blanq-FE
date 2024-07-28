import { Background } from '@/components/common'
import styled from '@emotion/styled'
import Header from '@/components/pages/Login/title'
import KakaoLogin from '@/components/pages/Login/kakao'

const Login = () => {
  return (
    <Container>
      <Header />
      <KakaoLogin />
    </Container>
  )
}

export default Login

const Container = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: pink;
`
