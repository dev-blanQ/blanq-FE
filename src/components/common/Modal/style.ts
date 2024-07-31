import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const Black = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      text-align: center;
      margin: 1.2rem auto;
    }
    gap: 3rem;
  `,
}
const Text = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      text-align: center;
      margin: 1.2rem auto;
    }
    gap: 0.5rem;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--color-white);
    padding: 2rem;
    width: -webkit-fill-available;
  `,
}
const St = {
  ModalWrapper: styled.div`
    position: fixed;
    inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    z-index: 999;
  `,
  Content: styled.div<{ backgroundColor: string; textColor: string }>`
    border-radius: 1.5rem;
    background-color: ${({ backgroundColor }) => `var(${backgroundColor})`};
    color: ${({ textColor }) => `var(${textColor})`};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 2.4rem;
  `,
  CloseBtn: styled.button`
    position: relative;
    top: -1rem;
    right: -1rem;
    ${FONTS.body1}
  `,
  SubmitBtn: styled.button`
    background-color: var(--color-white);
    color: var(--color-black);
    padding: 0.6rem 0.8rem;
    border-radius: 10rem;
    ${FONTS.body4}
  `,
  Main: styled.div`
    ${FONTS.body3}
  `,
  Sub: styled.div`
    ${FONTS.body6}
  `,

  Black,
  Text,
  BlurContainer: styled(Text.Container)<{ isBlur: boolean }>`
    filter: ${({ isBlur }) => (isBlur ? `blur(0.3rem);` : `blur(0);`)};
  `,
}

export default St
