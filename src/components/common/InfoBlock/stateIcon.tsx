import { useRouter } from 'next/router'
import { BlanQIcon, ChemiIcon } from '@/constants/infoBlock/icon'
const StateIcon = () => {
  const { pathname } = useRouter()

  return (
    <>
      {(pathname === '/blanQ' || pathname == '/blanQ/make') && <BlanQIcon />}
      {pathname === '/chemi/solve' && <ChemiIcon />}
    </>
  )
}
export default StateIcon
