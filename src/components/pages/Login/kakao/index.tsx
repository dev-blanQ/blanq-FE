import { DefaultBtn } from '@/components/common'
import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const KakaoLogin = () => {
  return <Button>카카오 로그인</Button>
}

export default KakaoLogin

const Button = styled(DefaultBtn)`
  background-color: var(--color-yellow-100);
  ${FONTS.body3}
`
