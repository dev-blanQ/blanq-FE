import Image from 'next/image'
import { useRef } from 'react'
import PortalModal from './PortalModal'
import { useOutsideClick, useKeyEscape } from '@/hooks'
import St from './style'
import { useRouter } from 'next/router'

interface ModalProp {
  isOpen: boolean
  handleClose: () => void
}

const AuthModal = ({ isOpen, handleClose }: ModalProp) => {
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
          backgroundColor="--color-black"
          textColor="--color-white"
        >
          <St.CloseBtn onClick={handleClose} className="close-btn">
            <Image
              src="/assets/icon/whiteClose.png"
              alt="airplane icon"
              width={12}
              height={12}
            />
          </St.CloseBtn>
          <St.Black.Wrapper>
            <div>
              <St.Main>로그인이 필요해요!</St.Main>
              <St.Sub>blanQ-uiz는 로그인한 사용자만 풀 수 있어요</St.Sub>
            </div>

            <St.SubmitBtn onClick={() => router.replace('/login')}>
              가입하러 가기
            </St.SubmitBtn>
          </St.Black.Wrapper>
        </St.Content>
      </St.ModalWrapper>
    </PortalModal>
  )
}

export default AuthModal
