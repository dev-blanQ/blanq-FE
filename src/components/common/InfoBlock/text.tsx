import { useRouter } from 'next/router'
import { ROUTE_INFO_BLOCK_MAPPING } from '@/constants/infoBlock/text'
import St from './styles'
const Text = () => {
  const { pathname } = useRouter()
  const { main, sub } = ROUTE_INFO_BLOCK_MAPPING[pathname]
  return (
    <St.TextContainer>
      <St.Main>{main}</St.Main>
      <St.Sub>{sub}</St.Sub>
    </St.TextContainer>
  )
}

export default Text
