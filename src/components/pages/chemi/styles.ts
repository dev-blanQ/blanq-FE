import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
import { Gradient } from '@/components/common/Box/gradient'
import { SubmitBtn } from '@/components/common/Button'

const Word = styled.div`
  display: inline-block;
  padding: 0.8rem 1.2rem;
  border-radius: 1.5rem;
`

const St = {
  QuizContainer: styled(Gradient)`
    padding: 2.5rem;
    gap: 2.5rem;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  SliderWrapper: styled.div`
    width: 75%;
    max-width: fit-content;
    align-items: center;
    .swiper-wrapper {
      .swiper-slide {
        width: fit-content !important;
      }
    }
  `,
  Main: styled.div`
    ${FONTS.body1}
    margin-bottom:1.6rem;
  `,
  Sub: styled.div`
    ${FONTS.body5}
  `,

  Header: styled.div`
    text-align: center;
  `,
  QuizContent: styled.div<{ isRevealed: boolean }>`
    background-color: ${({ isRevealed }) =>
      isRevealed ? 'var(--color-white)' : 'var(--color-black)'};
    color: ${({ isRevealed }) =>
      isRevealed ? 'var(--color-black)' : 'var(--color-white)'};
    border-radius: 1.5rem;
    width: 90%;
    text-align: center;
    ${FONTS.body3}
    padding:2.5rem;
    word-break: break-all;
  `,
  SubmitBtn,
  State: styled.div`
    display: inline-block;
    width: 3rem;
    height: 3rem;
    background-color: var(--color-gray-400);
    line-height: 3rem;
    text-align: center;
    border-radius: 10rem;
    ${FONTS.body4}
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  `,
  Input: styled.input`
    text-align: center;
    min-height: 3rem;
    width: 90%;
    padding: 1rem 2.5rem;
    border: none;
    border-bottom: solid 0.2rem var(--color-black);
    overflow: hidden;
    &:focus {
      outline: none;
    }
    &::placeholder {
      text-align: center;
    }
  `,

  Words: styled(Word)`
    border: 0.15rem solid var(--color-black);

    ${FONTS.body2}
  `,
  SimilarWord: styled(Word)`
    background-color: var(--color-gray-400);
    ${FONTS.body4}
  `,

  WordsContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  `,
}

export default St
