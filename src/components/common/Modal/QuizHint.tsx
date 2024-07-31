import Image from 'next/image'
import { useRef, useState } from 'react'
import PortalModal from './PortalModal'
import { useOutsideClick, useKeyEscape, useCopy } from '@/hooks'
import St from './style'
import { useRouter } from 'next/router'

interface ModalProp {
  isOpen: boolean
  handleClose: () => void

  handleQuizCode: () => void
  name: string
  sentences: string[]
  answer: string
}

const QuizHintModal = ({
  isOpen,
  handleClose,

  name,
  sentences,
  answer,
}: ModalProp) => {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement | null>(null) //내부 버튼 영역

  const [isBlur, setIsBlur] = useState(true)

  useOutsideClick(contentRef, handleClose)
  useKeyEscape('escape', handleClose)

  if (!isOpen || !router.isReady) return null
  return (
    <PortalModal>
      <St.ModalWrapper>
        <St.Content
          role="dialog"
          aria-labelledby="modal-title"
          ref={contentRef}
          backgroundColor={'--color-blue-100'}
          textColor={'--color-black'}
        >
          <St.CloseBtn onClick={handleClose} className="close-btn">
            <Image
              src={`/assets/icon/whiteClose.png`}
              alt="close icon"
              width={12}
              height={12}
            />
          </St.CloseBtn>

          <St.Text.Wrapper>
            <div>
              <St.Main>힌트를 알려드릴까요?</St.Main>
              <St.Sub>포인트 1개를 사용해서 힌트를 볼 수 있어요</St.Sub>
            </div>
            <St.BlurContainer isBlur={isBlur}>
              {sentences.map((word, idx) => (
                <span key={idx}>{word != '@' ? word : answer}</span>
              ))}
            </St.BlurContainer>

            <St.SubmitBtn
              onClick={() => (isBlur ? setIsBlur(false) : handleClose)}
            >
              {isBlur ? '힌트 보기' : '확인 완료'}
            </St.SubmitBtn>
          </St.Text.Wrapper>
        </St.Content>
      </St.ModalWrapper>
    </PortalModal>
  )
}

export default QuizHintModal
