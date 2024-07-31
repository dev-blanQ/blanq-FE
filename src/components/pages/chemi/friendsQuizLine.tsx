import styled from '@emotion/styled'
import Image from 'next/image'
import { FONTS } from '@/styles/font'
import FriendQuiz from '@/components/common/FriendQuiz'

const FriendsQuizLine: React.FC = () => {
  return (
    <FriendQuiz
      name="장ㅇ아연"
      speak="asdnknf"
      image="/assets/icon/profile.png"
    />
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
