import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
import { Gradient } from '@/components/common/Box/gradient'
import { SubmitBtn } from '@/components/common/Button'

const St = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 3.6rem auto;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `,
  TellMeBox: styled(Gradient)`
    min-height: 15rem;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    padding: 2.5rem;
  `,

  Main: styled.div`
    ${FONTS.body1}
  `,
  Sub: styled.div`
    ${FONTS.body5}
  `,
  QuizControl: styled.div`
    button {
      border-radius: 1rem;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,

  CopyCodeBtn: styled.button`
    width: 5rem;
    height: 5rem;
    border: 0.2rem solid var(--color-black);
    &:disabled {
      background-color: var(--color-gray-100);
    }
  `,

  MakeQuizBtn: styled.button`
    width: 36rem;
    height: 5rem;
    background-color: var(--color-black);
    color: var(--color-white);
    ${FONTS.body5}
  `,
  Quiz: styled.div`
    background-color: var(--color-gray-300);
    border-radius: 1.5rem;

    padding: 2.5rem;
  `,

  InputContent: styled.div`
    background-color: var(--color-white);
    color: var(--color-black);
    border-radius: 1.5rem;
    width: 90%;

    ${FONTS.body6}
    padding:2.5rem;
    word-break: break-all;
  `,
  Input: styled.textarea`
    min-height: 3rem;
    width: 90%;
    padding: 1rem 2.5rem;
    border: none;
    border-bottom: solid 0.2rem var(--color-black);
    overflow: hidden;
    text-align: center;
    &:focus {
      outline: none;
    }
    &::placeholder {
      text-align: center;
    }
  `,
  RedoBtn: styled.button`
    height: 3rem;
    width: 3rem;
    border-radius: 10rem;
    border: solid 0.15rem var(--color-black);
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `,
  SubmitBtn,
}

export default St
