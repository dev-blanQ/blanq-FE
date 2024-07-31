import Title from '@/components/common/Layout/Title'
import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import Image from 'next/image'
const MyFriends = () => {
  return (
    <>
      <Wrapper>
        <Image
          src="/assets/icon/profile.png"
          width={70}
          height={70}
          alt="profile image"
          style={{
            borderRadius: '10rem',
            marginRight: '0.5rem',
          }}
        />
        <InfoContainer>
          <BestFriendContainer>
            <div>
              <Image
                src="/assets/icon/star.png"
                width={16}
                height={16}
                alt="star image"
                style={{ marginRight: '0.5rem' }}
              />
              <span>장아연</span>
            </div>

            <div>가장가까운 친구셋</div>
          </BestFriendContainer>

          <p>“지금까지 3번 상위권 친구에 등극했어요!”</p>
        </InfoContainer>
      </Wrapper>
      <Title content="blanQ-uiz : 친구들의 이야기" />
    </>
  )
}

export default MyFriends

const Wrapper = styled.div`
  padding: 2.5rem 3.2rem;
  background-color: var(--color-yellow-200);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`

const BestFriendContainer = styled.div`
  ${FONTS.body1}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

const InfoContainer = styled.div`
  width: 100%;

  ${FONTS.body5}
`
