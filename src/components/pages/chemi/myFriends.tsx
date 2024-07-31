import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import Image from 'next/image'
import useMyFriendsRank from './hooks/useMyFriendsRank'
const MyFriends = () => {
  const { memberNickname, topRankCount, closeFriends } = useMyFriendsRank()
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
            <Image
              src="/assets/icon/star.png"
              width={16}
              height={16}
              alt="star image"
              style={{ marginRight: '0.5rem' }}
            />
            <span>{memberNickname}</span>

            <TopFriendWrapper>
              <BestFriendText>#친한 친구</BestFriendText>
              {closeFriends.map(({ profileUrl, nickname }, idx) => (
                <>
                  <Image
                    src="/assets/icon/profile.png"
                    width={40}
                    height={40}
                    alt={nickname}
                    style={{
                      borderRadius: '10rem',
                      marginRight: '0.5rem',
                      position: 'relative',
                      left: `${(idx + 1) * -1.5}rem`,
                      zIndex: `${4 - (idx + 1)}`,
                    }}
                  />
                </>
              ))}
            </TopFriendWrapper>
          </BestFriendContainer>

          <p>지금까지 {topRankCount}번 상위권 친구에 등극했어요! </p>
        </InfoContainer>
      </Wrapper>
    </>
  )
}

export default MyFriends

const Wrapper = styled.div`
  padding: 2rem;
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
  align-items: flex-end;
  margin-bottom: 1.5rem;
`
const BestFriendText = styled.div`
  ${FONTS.body4}
  background-color: var(--color-blue-100);
  color: var(--color-white);
  position: relative;
  bottom: 0;
  z-index: 4;
  padding: 0.5rem;
  height: 1.7rem;
  line-height: 1.7rem;
  border-radius: 10rem;
`

const TopFriendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: relative;
  right: -3rem;
`

const InfoContainer = styled.div`
  width: 100%;

  ${FONTS.body5}
`
