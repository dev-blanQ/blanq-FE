import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

const Title = ({ content }: { content: string }) => {
  return <StyledRoot>{content}</StyledRoot>
}

export default Title
const StyledRoot = styled.div`
  ${FONTS.h2}
`
