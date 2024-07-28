import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const Header = () => {
  return (
    <>
      <TitleWrapper>HJOIN</TitleWrapper>
    </>
  )
}

export default Header

const TitleWrapper = styled.div`
  ${FONTS.body2}
  color: var(--color-green-400);
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 9.3rem;
  margin-bottom: 2.4rem;
`
