import Image from 'next/image'
import { useRef } from 'react'
import PortalModal from './PortalModal'
import { useOutsideClick, useKeyEscape, useCopy } from '@/hooks'
import St from './style'
import { useRouter } from 'next/router'
import { useBlanQStore } from '@/store/blanQ'
import Line from '../Sentence/line'
import { Tcontent } from '@/types/tasks'

interface ModalProp {
  isOpen: boolean
  handleClose: () => void

  name: string
  chunks: Tcontent
  answer: string
}

const CorrectAnswerModal = ({
  isOpen,
  handleClose,

  name,
  chunks,
}: ModalProp) => {
  const router = useRouter()
  const contentRef = useRef<HTMLDivElement | null>(null) //내부 버튼 영역

  const handleModalClose = () => {
    handleClose()
    router.replace('/chemi')
  }
  const { quizChunk, answer } = useBlanQStore()

  useOutsideClick(contentRef, handleModalClose)
  useKeyEscape('escape', handleModalClose)

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
              <St.Main>축하합니다!</St.Main>
              <St.Sub>빈칸을 채워 {name} 님과 가까워졌어요!</St.Sub>
            </div>
            <St.Text.Container>
              <Line isCenter={true} chunks={quizChunk} blank={answer} />
            </St.Text.Container>

            <St.SubmitBtn onClick={handleModalClose}>확인 완료</St.SubmitBtn>
          </St.Text.Wrapper>
        </St.Content>
      </St.ModalWrapper>
    </PortalModal>
  )
}

export default CorrectAnswerModal
