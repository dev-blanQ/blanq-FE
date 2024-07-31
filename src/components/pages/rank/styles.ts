import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
const St = {
  Container: styled.div`
    background-color: var(--color-gray-400);
    border-radius: 1.5rem;
    ${FONTS.body6}
    padding:2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  LeftContainer: styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  `,
  UserInfoContainer: styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
  `,
}

export default St
