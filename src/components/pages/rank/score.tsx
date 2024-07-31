import Image from 'next/image'
import St from './styles'
import { TFriend } from '@/types/ranks'
import styled from '@emotion/styled'

const color: { [key: number]: { background: string; text: string } } = {
  1: {
    background: '--color-yellow-100',
    text: '--color-black',
  },
  2: {
    background: '--color-gray-200',
    text: '--color-white',
  },
  3: {
    background: '--color-blue-100',
    text: '--color-white',
  },
}

const Score = ({
  member,
  numOfTrial,
  order,
}: {
  member: TFriend
  numOfTrial: number
  order: number
}) => {
  const { nickname, profileUrl } = member
  return (
    <>
      <St.Container>
        <St.LeftContainer>
          <div>{order}</div>
          <St.UserInfoContainer>
            <Image
              src="/assets/icon/profile.png"
              alt="profile image"
              width={50}
              height={50}
              style={{
                borderRadius: '10rem',
              }}
            />
            <div>{nickname}</div>
          </St.UserInfoContainer>
        </St.LeftContainer>
        {order < 4 && (
          <ScoreIndicator
            bgColor={color[order]['background']}
            textColor={color[order]['text']}
          >
            오늘의 {order}등
          </ScoreIndicator>
        )}
        {/** 조건자로 걸어버리기 */}
        <div>{numOfTrial}회 시도</div>
      </St.Container>
    </>
  )
}

export default Score

const ScoreIndicator = styled.div<{
  bgColor: string
  textColor: string
}>`
  color: ${({ textColor }) => `var(${textColor})`};
  background-color: ${({ bgColor }) => `var(${bgColor})`};
  border-radius: 1.5rem;
  padding: 0.8rem 1rem;
`
