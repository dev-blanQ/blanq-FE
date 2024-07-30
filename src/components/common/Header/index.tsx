import { useRouter } from 'next/router'
import { ROUTE_HEADER_MAPPING } from '@/constants'
import Point from './Point'
import { StyledRoot, Title } from './styles'

const Header = () => {
  const { pathname } = useRouter()
  return (
    <StyledRoot>
      <Title>{ROUTE_HEADER_MAPPING[pathname]}</Title>
      <Point />
    </StyledRoot>
  )
}

export default Header
