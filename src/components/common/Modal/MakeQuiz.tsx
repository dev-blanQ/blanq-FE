import Image from 'next/image'
import { useRef } from 'react'
import PortalModal from './PortalModal'
import { useOutsideClick, useKeyEscape, useCopy } from '@/hooks'
import St from './style'
import { useRouter } from 'next/router'

interface ModalProp {
  isOpen: boolean
  handleClose: () => void
  handleSubmitQuiz: () => void
}

const MakeQuizModal = ({
  isOpen,
  handleClose,
  handleSubmitQuiz,
}: ModalProp) => {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement | null>(null) //내부 버튼 영역
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
          backgroundColor={'--color-black'}
          textColor={'--color-white'}
        >
          <St.CloseBtn onClick={handleClose} className="close-btn">
            <Image
              src={`/assets/icon/whiteClose.png`}
              alt="close icon"
              width={12}
              height={12}
            />
          </St.CloseBtn>

          <St.Black.Wrapper>
            <div>
              <St.Main>blanQ-uiz를 저장할까요?</St.Main>
              <St.Sub>하루에 하나의 blanQ-uiz만 저장할 수 있어요</St.Sub>
            </div>

            <St.SubmitBtn onClick={handleSubmitQuiz}>저장하기</St.SubmitBtn>
          </St.Black.Wrapper>
        </St.Content>
      </St.ModalWrapper>
    </PortalModal>
  )
}

export default MakeQuizModal
