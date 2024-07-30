import {
  Container,
  Title,
  ContentWrapper,
  TellMeBox,
  QuizControl,
  Main,
  Sub,
  CopyCodeBtn,
  MakeQuizBtn,
} from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useModalActions, useModalStore } from '@/store/modal'
import CopyCodeModal from '@/components/common/Modal/CopyCode'
import { useCopy } from '@/hooks'
import { useBlanQActions, useBlanQStore } from '@/store/blanQ'

const QuizToday = () => {
  const router = useRouter()
  const isOpen = useModalStore()
  const { isCopy, onCopy } = useCopy()
  const { openModal, closeModal } = useModalActions()
  const { code, quiz } = useBlanQStore()
  const { setQuiz, setCode } = useBlanQActions()

  const handleCopyCode = () => {
    if (code) {
      console.log('초대코드 복사')
      onCopy(code)
    }
  }
  return (
    <Container>
      {isOpen && (
        <CopyCodeModal
          isOpen={isOpen}
          handleClose={closeModal}
          quizCode={code}
          handleQuizCode={handleCopyCode}
        />
      )}
      <Title>나의 이야기</Title>
      <ContentWrapper>
        <TellMeBox>
          <Main>오늘은 무슨 일이 있었나요?</Main>
          <Sub>나의 이야기는 20자 이하로 적을 수 있어요</Sub>
        </TellMeBox>
        <QuizControl>
          <CopyCodeBtn onClick={openModal} disabled={!code}>
            <Image
              src="/assets/icon/airplane.png"
              alt="airplane icon"
              width={18}
              height={18}
            />
          </CopyCodeBtn>
          <MakeQuizBtn onClick={() => router.push('/blanQ/make')}>
            이야기 만들기
          </MakeQuizBtn>
        </QuizControl>
      </ContentWrapper>
    </Container>
  )
}

export default QuizToday
