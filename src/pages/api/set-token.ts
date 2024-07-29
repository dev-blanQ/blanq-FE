// 요청에서 토큰을 가져와서 HTTP 응답에 Set-Cookie 헤더를 설정하여 쿠키에 토큰을 저장합니다.

import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query

  if (token) {
    res.setHeader(
      'Set-Cookie',
      `token=${token}; HttpOnly; Path=/; Max-Age=${
        7 * 24 * 60 * 60
      }; Secure; SameSite=Lax`,
    )
    res.status(200).json({ success: true, message: 'Token provided' })
  } else {
    res.status(400).json({ success: false, message: 'Token not provided' })
  }
}
