import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const Cubic = {
  Wrapper: styled.div`
    min-width: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    border-radius: 0.3rem;
    background:
      radial-gradient(circle 0.85rem at top left, #000000 100%, transparent) top
        left,
      radial-gradient(circle 0.85rem at top right, #000000 100%, transparent)
        top right,
      radial-gradient(circle 0.85rem at bottom left, #000000 100%, transparent)
        bottom left,
      radial-gradient(circle 0.85rem at bottom right, #000000 100%, transparent)
        bottom right;
    background-size: 51% 51%;
    background-repeat: no-repeat;
    margin: 0 0.5rem;
  `,
  Text: styled.div`
    ${FONTS.body2}
    padding: 0 0.5rem;
    margin: 0;
  `,
}
const Line = {
  Wrapper: styled.div<{ isCenter: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: ${({ isCenter }) => (isCenter ? `center` : `flex-start`)};
    align-items: center;
    ${FONTS.body6}
  `,
}
const St = {
  Cubic,
  Line,
}

export default St
