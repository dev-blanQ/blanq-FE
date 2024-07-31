import parseCookies from '../parseCookies'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

// 쿠키에 저장된 토큰을 인증 헤더에 자동으로 추가하여 요청을 보낼 수 있습니다.
function createAuthAxios(req: NextApiRequest) {
  const instance = axios.create({
    baseURL: '스프링 서버 URL',
  })

  instance.interceptors.request.use(
    async (config) => {
      const cookies = parseCookies(req.headers.cookie ?? '')

      if (cookies?.token) {
        config.headers.Authorization = `Bearer ${cookies?.token}`
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  return instance
}

// 쿠키에 저장된 토큰을 인증 헤더에 없이 서버에 요청 보내기
function createDefatultAxios() {
  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return instance
}

// nextjs api
function createNextHttp() {
  const instance = axios.create({
    baseURL: '/api',
  })

  return instance
}

const defaultAxios = createDefatultAxios()

const Apis = {
  default: {
    async GET<T>(path: string, option?: { params: string }) {
      const data = await defaultAxios.get<T>(path, option)
      return data.data
    },
  },
}

export { createAuthAxios, createDefatultAxios, createNextHttp, Apis }
