import styled from '@emotion/styled'
import { useTimer } from '@/hooks'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  // 2초 뒤에 홈 메뉴 화면으로 이동

  const router = useRouter()
  useEffect(() => {
    router.push('/blanQ')
  }, [])

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
