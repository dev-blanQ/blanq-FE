import { useState } from 'react'
import St from './styles'

import { useModalActions, useModalStore } from '@/store/modal'
import MakeQuizModal from '@/components/common/Modal/MakeQuiz'
import CopyCodeModal from '@/components/common/Modal/CopyCode'
import { useRouter } from 'next/router'
import { useBlanQActions, useBlanQStore } from '@/store/blanQ'
import { makeQuiz, saveQuiz } from '@/lib/api/tasks'
import Line from '@/components/common/Sentence/line'

const QuizInput = () => {
  const [input, setInput] = useState('')
  const { code, quiz, quizChunk, answer } = useBlanQStore()
  const { setQuiz, setCode, setQuizChunk, setAnswer } = useBlanQActions()

  const isOpen = useModalStore()
  const { openModal, closeModal } = useModalActions()
  const router = useRouter()

  const handleMakeQuiz = async () => {
    //퀴즈 생성 API
    const { content, answer } = await makeQuiz(input)
    setQuiz(input)
    setQuizChunk(content)
    setAnswer(answer)
    // console.log(content, answer)
  }
  const handleWantSave = () => {
    // 사용자가 저장 버튼 누름 -> 저장 확인 모달 열기
    openModal()
  }

  const handleSubmitQuiz = async () => {
    // 사용자가 최종적으로 해당 퀴즈 만들어서 제출할거임
    // 저장 확인 모달에서 저장하기 버튼 누름
    if (quizChunk.length) {
      console.log(quizChunk)
      // 저장 API
      const { taskId, content } = await saveQuiz({ content: quizChunk, answer })
      setCode(taskId)
      console.log('저장 모듈', taskId, content)
    } else {
      alert('퀴즈를 입력하세ㅛ')
    }
  }
  const handleCopyCode = () => {
    closeModal() // 모달 닫아야 함 안그러면 다른 페이지에 담당하는 모달 열림
    router.push('/blanQ')
  }

  return (
    <>
      {isOpen && !code && (
        <MakeQuizModal
          isOpen={isOpen}
          handleClose={closeModal}
          handleSubmitQuiz={handleSubmitQuiz}
        />
      )}
      {isOpen && code && (
        <CopyCodeModal
          isOpen={isOpen}
          handleClose={handleCopyCode}
          code={code}
          handleQuizCode={handleCopyCode}
        />
      )}
      <St.Container>
        <St.TellMeBox>
          <St.Main>오늘은 무슨 일이 있었나요?</St.Main>
          <St.InputContent>
            <Line chunks={quizChunk} blank={answer} />
          </St.InputContent>
        </St.TellMeBox>
        <St.InputContainer>
          <St.Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={'친구들과 공유할 이야기를 적어주세요!'}
          />
          <div>
            <St.SubmitBtn
              onClick={quizChunk.length ? handleWantSave : handleMakeQuiz}
            >
              blanQ-uiz {quizChunk.length ? '저장' : '생성'}
            </St.SubmitBtn>
          </div>
        </St.InputContainer>
      </St.Container>
    </>
  )
}

export default QuizInput
