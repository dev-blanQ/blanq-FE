import { useRouter } from 'next/router'
import { ROUTE_INFO_BLOCK_MAPPING } from '@/constants/infoBlock/text'
import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
const Text = () => {
  const { pathname } = useRouter()
  const { main, sub } = ROUTE_INFO_BLOCK_MAPPING[pathname]
  return (
    <TextContainer>
      <Main>{main}</Main>
      <Sub>{sub}</Sub>
    </TextContainer>
  )
}

export default Text

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`

const Main = styled.p`
  ${FONTS.body3}
`
const Sub = styled.p`
  ${FONTS.body6}
`
