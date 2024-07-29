// 쿠키에서 토큰을 가져오기 위한 함수입니다.

type AccType = {
  [key: string]: string
} & {
  token: string
}
function parseCookies(cookie: string) {
  if (cookie) {
    return cookie
      .split('; ')
      .map((v) => v.split('='))
      .reduce(
        (acc: AccType, [k, v]) => {
          acc[k.trim()] = decodeURIComponent(v)
          return acc
        },
        { token: '' },
      )
  }
}

export default parseCookies
