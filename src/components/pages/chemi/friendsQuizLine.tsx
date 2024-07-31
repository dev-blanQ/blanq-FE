import { SpeechBubble } from '@/components/common'
import styled from '@emotion/styled'
import Image from 'next/image'
import { FONTS } from '@/styles/font'
const Speech = ({ speak }: { speak: string }) => {
  return <SpeechText>{speak}</SpeechText>
}

const FriendsQuizLine: React.FC = () => {
  return (
    <StyledRoot>
      <Image
        src="/assets/icon/profile.png"
        alt="profile image"
        width={50}
        height={50}
        style={{
          borderRadius: '10rem',
        }}
      />
      <ContentContainer>
        <Name>장아연</Name>
        <SpeechBubble>
          <Speech speak="dsfa" />
        </SpeechBubble>
      </ContentContainer>
    </StyledRoot>
  )
}

export default FriendsQuizLine

const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
const Name = styled.div`
  padding: 0 0.8rem;
  ${FONTS.body4}
`

const SpeechText = styled.div`
  ${FONTS.body6}
`
