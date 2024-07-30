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
  height: 15rem;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
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

export const InviteBtn = styled.button`
  width: 5rem;
  height: 5rem;
  border: 0.2rem solid var(--color-black);
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
