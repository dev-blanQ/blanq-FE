import styled from '@emotion/styled'
import { useTimer } from '@/hooks'

export default function Home() {
  // 2초 뒤에 홈 메뉴 화면으로 이동

  useTimer(2000, () => (location.href = 'home'))

  return (
    <>
      <Container>index.ts</Container>
    </>
  )
}

const Container = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
