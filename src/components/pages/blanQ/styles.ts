import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
import { Gradient } from '@/components/common/Box/gradient'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3.6rem auto;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const TellMeBox = styled(Gradient)`
  min-height: 15rem;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding: 2.5rem;
`

export const Title = styled.div`
  ${FONTS.h2}
`
export const Main = styled.div`
  ${FONTS.body1}
`

export const Sub = styled.div`
  ${FONTS.body5}
`

export const QuizControl = styled.div`
  button {
    border-radius: 1rem;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CopyCodeBtn = styled.button`
  width: 5rem;
  height: 5rem;
  border: 0.2rem solid var(--color-black);
  &:disabled {
    background-color: var(--color-gray-100);
  }
`

export const MakeQuizBtn = styled.button`
  width: 36rem;
  height: 5rem;
  background-color: var(--color-black);
  color: var(--color-white);
  ${FONTS.body5}
`
export const Quiz = styled.div`
  background-color: var(--color-gray-300);
  border-radius: 1.5rem;
  ${FONTS.body6}
  padding:2.5rem;
`

export const InputContent = styled.div`
  background-color: var(--color-white);
  color: var(--color-black);
  border-radius: 1.5rem;
  width: 90%;

  ${FONTS.body6}
  padding:2.5rem;
  word-break: break-all;
`

export const Input = styled.textarea`
  min-height: 3rem;
  width: 90%;
  padding: 1rem 2.5rem;
  border: none;
  border-bottom: solid 0.2rem var(--color-black);
  overflow: hidden;
  &:focus {
    outline: none;
  }
`
export const RedoBtn = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 10rem;
  border: solid 0.15rem var(--color-black);
`

export const SubmitBtn = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 10rem;
  background-color: var(--color-black);
  color: var(--color-white);
  margin-left: 1.5rem;
  ${FONTS.body5}
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
