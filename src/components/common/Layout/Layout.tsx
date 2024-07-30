import Head from 'next/head'
import styled from '@emotion/styled'
import { Header, SEO, BottomMenu } from '@/components/common'
import { useRouter } from 'next/router'
import { withOutTabbar } from '@/constants/routeUrl'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const { pathname } = useRouter()
  return (
    <>
      <SEO
        title="BlankQ"
        description="하루에 한번, 케미를 채우는 빈칸퀴즈<"
        image=""
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {' '}
        {/*!withOutTabbar.includes(pathname) && <Header />*/}
        {children}
        {!withOutTabbar.includes(pathname) && <BottomMenu />}
      </Container>
    </>
  )
}

export default Layout

const Container = styled.div`
  width: 43rem;
  scrollbar-width: none;
  min-height: 100dvh;
  margin: auto;
`
