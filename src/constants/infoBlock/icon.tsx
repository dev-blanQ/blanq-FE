import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useEffect } from 'react'

const StyledRoot = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const St = {
  blanQ: styled(StyledRoot)`
    background-color: var(--color-white);
  `,
  chemi: styled(StyledRoot)<{ status: string }>`
    background-color: ${({ status }) =>
      status === 'waiting' ? `var(--color-black)` : `var(--color-white)`};
    color: ${({ status }) =>
      status === 'waiting' ? `var(--color-white)` : `var(--color-black)`};
    border: ${({ status }) =>
      (status === 'playing' || status === 'end') &&
      `solid 0.15rem var(--color-black)`};
    ${FONTS.body2}
  `,
}

export const BlanQIcon = () => {
  return (
    <St.blanQ>
      {' '}
      <Image
        src="/assets/icon/star.png"
        alt="star icon"
        width={20}
        height={20}
      />
    </St.blanQ>
  )
}
export const ChemiIcon = () => {
  // Zustand로 받기
  const status = 'end' // waiting OR playing OR end
  const chance = 5 // 시도횟수
  useEffect(() => {
    // 시도횟수가 0이 된 경우, 게임 종료됨 -> 재시도
    console.log(status)
  }, [chance])
  return (
    <St.chemi status={status}>
      {/*status === 'waiting' && <>도전</>*/}
      {/*status === 'playing' && <>{chance}/5</>*/}
      {status === 'end' && <>재시도</>}
    </St.chemi>
  )
}
