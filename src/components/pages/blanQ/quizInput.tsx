import { useState } from 'react'
import St from './styles'
import Image from 'next/image'
import { useModalActions, useModalStore } from '@/store/modal'
import MakeQuizModal from '@/components/common/Modal/MakeQuiz'
import { useRouter } from 'next/router'
import { useBlanQActions, useBlanQStore } from '@/store/blanQ'

const QuizInput = () => {
  const [input, setInput] = useState('')
  const { code, quiz } = useBlanQStore()
  const { setQuiz, setCode } = useBlanQActions()

  const isOpen = useModalStore()
  const { openModal, closeModal } = useModalActions()
  const router = useRouter()
  const handleMakeQuiz = () => {
    console.log(input)
    // 퀴즈 만들어 달라는 요청
    if (input) {
      console.log(input)
      const text = 'dsfdasf'
      setQuiz(text)
    }
  }
  const handleWantSave = () => {
    // 사용자가 최종적으로 해당 퀴즈 만들어서 제출할거임
    openModal()
  }

  const handleSubmitQuiz = () => {
    // 사용자가 최종적으로 해당 퀴즈 만들어서 제출할거임

    if (quiz) {
      console.log(quiz)
      router.push('/blanQ')
    }
  }

  return (
    <>
      {isOpen && (
        <MakeQuizModal
          isOpen={isOpen}
          handleClose={closeModal}
          handleSubmitQuiz={handleSubmitQuiz}
        />
      )}
      <St.Container>
        <St.TellMeBox>
          <St.Main>오늘은 무슨 일이 있었나요?</St.Main>
          <St.InputContent>{quiz ? quiz : input}</St.InputContent>
        </St.TellMeBox>
        <St.InputContainer>
          <St.Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={'친구들과 공유할 이야기를 적어주세요!'}
          />
          <div>
            {quiz && (
              <St.RedoBtn onClick={handleMakeQuiz}>
                <Image
                  src="/assets/icon/redo.png"
                  alt="redo icon"
                  width={18}
                  height={18}
                />
              </St.RedoBtn>
            )}

            <St.SubmitBtn onClick={quiz ? handleWantSave : handleMakeQuiz}>
              blanQ-uiz {quiz ? '저장' : '생성'}
            </St.SubmitBtn>
          </div>
        </St.InputContainer>
      </St.Container>
    </>
  )
}

export default QuizInput
