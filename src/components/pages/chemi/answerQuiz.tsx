import { useEffect, useState } from 'react'
import St from './styles'
import { useSwiper } from '@/hooks'
import Slides from './slides'
import { useInputActions, useInputStore } from '@/store/chemi/input'
import { useBlanQStore } from '@/store/blanQ'
import useAnswerControl from './hooks/useAnswerControl'
import { useModalActions, useModalStore } from '@/store/modal'
import QuizHintModal from '@/components/common/Modal/QuizHint'
const AnswerQuiz = () => {
  const input = useInputStore()
  const { changeInput } = useInputActions()
  const { wrongAnswers, quizChunk } = useBlanQStore()

  const isOpen = useModalStore()
  const { openModal, closeModal } = useModalActions()
  const { count, setCount, handleAnswerSubmit } = useAnswerControl()
  const { swiperSetting, currentSlide } = useSwiper()

  useEffect(() => {
    if (count == 0) {
      openModal()
    }
  }, [count])
  return (
    <St.InputContainer>
      {isOpen && (
        <QuizHintModal
          isOpen={isOpen}
          handleClose={closeModal}
          setCount={setCount}
          sentences={['@', '에서 아이디어 실현!']}
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
        <St.SubmitBtn onClick={count > 0 ? handleAnswerSubmit : openModal}>
          blanQ-uiz 맞추기
        </St.SubmitBtn>
      </div>
    </St.InputContainer>
  )
}

export default AnswerQuiz
