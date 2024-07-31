import { useEffect, useState } from 'react'
import St from './styles'
import { useSwiper } from '@/hooks'
import Slides from './slides'
import { useInputActions, useInputStore } from '@/store/chemi/input'
import { useBlanQActions, useBlanQStore } from '@/store/blanQ'
import useAnswerControl from './hooks/useAnswerControl'
import { useModalActions, useModalStore } from '@/store/modal'
import QuizHintModal from '@/components/common/Modal/QuizHint'
import CorrectAnswerModal from '@/components/common/Modal/CorrectAnswer'
import { WrongAnswerProps } from '@/types/tasks'
import { getRandomNumber2 } from '@/lib/randNum'

const AnswerQuiz = () => {
  const input = useInputStore()
  const { changeInput } = useInputActions()
  const { wrongAnswers, quizChunk, answer, member } = useBlanQStore()
  const { setWrongAnswers } = useBlanQActions()
  const isOpen = useModalStore()
  const { openModal, closeModal } = useModalActions()
  const { count, setCount, handleAnswerSubmit, hint, getHintForQuiz } =
    useAnswerControl()
  const { swiperSetting, currentSlide } = useSwiper()

  useEffect(() => {
    if (count == 0) {
      openModal()
    }
  }, [count])

  useEffect(() => {
    if ('치킨' && input === '치킨') {
      openModal()
    }
  }, [input])

  const openAnswerModal = () => {
    handleAnswerSubmit(input)
  }
  return (
    <St.InputContainer>
      {isOpen && count === 0 && (
        <QuizHintModal
          isOpen={isOpen}
          handleClose={closeModal}
          setCount={setCount}
          hint={hint}
          getHintForQuiz={getHintForQuiz}
        />
      )}
      {isOpen && answer == input && input && (
        <CorrectAnswerModal
          isOpen={isOpen}
          handleClose={closeModal}
          chunks={quizChunk}
          answer={answer}
          name={member.nickname}
        />
      )}
      <St.WordsContainer>
        {wrongAnswers && (
          <>
            <St.Words>#비슷한 오답</St.Words>
            <Slides swiperSetting={swiperSetting} wrongAnswers={wrongAnswers} />
          </>
        )}
      </St.WordsContainer>
      <St.Input
        placeholder="빈칸에 들어갈 단어를 입력해주세요"
        value={input}
        onChange={(e) => changeInput(e.target.value)}
      />

      <div>
        <St.State>{count}/5</St.State>
        <St.SubmitBtn onClick={count > 0 ? openAnswerModal : openModal}>
          blanQ-uiz 맞추기
        </St.SubmitBtn>
      </div>
    </St.InputContainer>
  )
}

export default AnswerQuiz
