import styled from '@emotion/styled'
import Title from '@/components/common/Layout/Title'
import { FONTS } from '@/styles/font'
import FriendQuiz from '@/components/common/FriendQuiz'
import useFriendsQuizzess from './hooks/useFriendsQuizzes'
import { getRandomNumber } from '@/lib/randNum'
const FriendsQuizLine: React.FC = () => {
  const { myFriendsQuizzess } = useFriendsQuizzess()
  console.log(myFriendsQuizzess)
  return (
    <StyledRoot>
      <Title content="blanQ-uiz : 친구들의 이야기" />

      {myFriendsQuizzess.map(({ taskId, content, member, isFinished }, idx) => (
        <FriendQuiz
          key={idx}
          name={member.nickname}
          content={content}
          taskId={taskId}
          isFinished={isFinished}
          image={`/assets/profile/${getRandomNumber()}.jpeg`} /**{member.profileUrl} */
        />
      ))}
    </StyledRoot>
  )
}

export default FriendsQuizLine

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.6rem 0;
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
