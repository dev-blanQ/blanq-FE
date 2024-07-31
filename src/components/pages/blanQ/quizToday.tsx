import St from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useModalActions, useModalStore } from '@/store/modal'
import CopyCodeModal from '@/components/common/Modal/CopyCode'
import { useCopy } from '@/hooks'
import { useBlanQActions, useBlanQStore } from '@/store/blanQ'
import Title from '@/components/common/Layout/Title'
import use24hourTimer from './hooks/use24hourTimer'
import Timer from './timer'

const QuizToday = () => {
  const router = useRouter()
  const isOpen = useModalStore()
  const { isCopy, onCopy } = useCopy()
  const { openModal, closeModal } = useModalActions()
  const { code, quiz } = useBlanQStore()
  const { setQuiz, setCode } = useBlanQActions()
  const { hour, minute, second } = use24hourTimer()

  const handleCopyCode = () => {
    if (code) {
      console.log('초대코드 복사')
      onCopy(code)
    }
  }
  return (
    <St.Container>
      {isOpen && code && (
        <CopyCodeModal
          isOpen={isOpen}
          handleClose={closeModal}
          code={code}
          handleQuizCode={handleCopyCode}
        />
      )}
      <Title content="나의 이야기" />
      <St.ContentWrapper>
        <St.TellMeBox>
          <St.Main>오늘은 무슨 일이 있었나요?</St.Main>
          <St.Sub>나의 이야기는 20자 이하로 적을 수 있어요</St.Sub>
        </St.TellMeBox>
        <St.QuizControl>
          <St.CopyCodeBtn onClick={openModal} disabled={!code}>
            <Image
              src="/assets/icon/airplane.png"
              alt="airplane icon"
              width={18}
              height={18}
            />
          </St.CopyCodeBtn>
          <St.MakeQuizBtn
            onClick={() => router.push('/blanQ/quiz')}
            disabled={code.length > 0}
          >
            {code ? (
              <>
                {' '}
                <span>다음 이야기까지 </span>
                <Timer hour={hour} minute={minute} second={second} />
              </>
            ) : (
              '이야기 만들기'
            )}
          </St.MakeQuizBtn>
        </St.QuizControl>
      </St.ContentWrapper>
    </St.Container>
  )
}

export default QuizToday
