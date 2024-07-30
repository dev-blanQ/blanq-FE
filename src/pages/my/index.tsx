import Profile from '@/components/common/Profile'
import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const My = () => {
  return (
    <StyledRoot>
      <Profile src="/assets/icon/profile.png" name="김광현" />
      <MenuContainer>
        <p>개인정보 처리 방침</p>
        <p>문의하기</p>
        <p>탈퇴하기</p>
      </MenuContainer>
    </StyledRoot>
  )
}

export default My

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
`
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  p {
    ${FONTS.body5}
    color:var(--color-gray-200)
  }
`
