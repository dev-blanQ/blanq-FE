import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const St = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    ${FONTS.body2}
  `,
  Text: styled.div`
    ${FONTS.body2}
  `,
}

export default St
