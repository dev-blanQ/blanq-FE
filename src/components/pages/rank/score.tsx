import Image from 'next/image'
import St from './styles'

const Score = () => {
  return (
    <>
      <St.Container>
        <St.LeftContainer>
          <div>1</div>
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
            <div>이름</div>
          </St.UserInfoContainer>
        </St.LeftContainer>
        <div>오늘의 1등</div> {/** 조건자로 걸어버리기 */}
        <div>4회 시도</div>
      </St.Container>
    </>
  )
}

export default Score
