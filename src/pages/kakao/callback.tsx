import { useRouter } from 'next/router'
import { useEffect, useCallback } from 'react'
import { AxiosResponse } from 'axios'
import { createDefatultAxios, createNextHttp } from '@/lib/api/axios'

const Redirection = () => {
  const router = useRouter()
  const { code: authCode, error: kakaoServerError } = router.query
  const clientdefaultAxios = createDefatultAxios()
  const nextHttpClient = createNextHttp()

  const kakaoLogin = useCallback(
    async (code: string | string[]) => {
      // 백엔드에 인가 코드 전송
      try {
        const response = await clientdefaultAxios.post<{
          token: string
        }>('/api/users/kakao-login', {
          code,
        })
        return response
      } catch (err) {
        router.replace('/kakao/fail')
      }
    },
    [router],
  )

  const setTokenCookie = useCallback(async (token: string) => {
    try {
      const response = await nextHttpClient.get(`/api/set-token?token=${token}`)

      router.replace('/kakao/success')
    } catch (err) {
      router.replace('/kakao/fail')
    }
  }, [])

  const loginHandler = async (authCode: string | string[]) => {
    // 백엔드에 인가 코드 보내주기
    try {
      const response = await kakaoLogin(authCode)
      setTokenCookie(response?.data.token ?? '')
    } catch (err) {
      router.replace('/kakao/fail')
    }
  }

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL)
    if (authCode) {
      // 백엔드에 인가 코드 보내주기
      loginHandler(authCode)
    }
  }, [])

  return <div>로그인 중입니다.</div>
}

export default Redirection
