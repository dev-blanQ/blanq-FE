import { Button } from './styles'

const KakaoLogin = () => {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`

  const loginHandler = () => {
    if (window) {
      window.location.href = link
    }
  }
  return <Button onClick={loginHandler}>카카오 로그인</Button>
}

export default KakaoLogin
