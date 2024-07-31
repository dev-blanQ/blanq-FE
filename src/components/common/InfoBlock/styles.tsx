import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
const St = {
  StyledRoot: styled.div`
    display: flex;
    flex-direction: row;
    padding: 2.4rem;
    justify-content: space-between;
    background-color: var(--color-gray-400);
    border-radius: 1.5rem;
  `,
  IconWrapper: styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white);
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
  `,

  Main: styled.p`
    ${FONTS.body3}
  `,
  Sub: styled.p`
    ${FONTS.body6}
  `,
}

export default St
