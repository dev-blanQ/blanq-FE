import Image from 'next/image'
import { useRef } from 'react'
import PortalModal from './PortalModal'
import { useOutsideClick, useKeyEscape, useCopy } from '@/hooks'
import St from './style'
import { useRouter } from 'next/router'

interface ModalProp {
  isOpen: boolean
  handleClose: () => void

  handleQuizCode: () => void
  quizCode: string
}

const MakeQuizModal = ({
  isOpen,
  handleClose,
  handleQuizCode,

  quizCode,
}: ModalProp) => {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement | null>(null) //내부 버튼 영역
  const { isCopy, onCopy } = useCopy()
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
          backgroundColor={'--color-yellow-200'}
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
              <St.Main>blanQ-uiz를 저장했어요!</St.Main>
              <St.Sub>링크를 공유해서 친구들과 가까워져요</St.Sub>
            </div>
            <St.Text.Container>
              <span>{quizCode}</span>
              <button onClick={() => onCopy(quizCode)}>
                <Image
                  src={`/assets/icon/copy.png`}
                  alt="close icon"
                  width={12}
                  height={12}
                />
              </button>
            </St.Text.Container>

            <St.SubmitBtn onClick={handleQuizCode}>공유하기</St.SubmitBtn>
          </St.Text.Wrapper>
        </St.Content>
      </St.ModalWrapper>
    </PortalModal>
  )
}

export default MakeQuizModal
