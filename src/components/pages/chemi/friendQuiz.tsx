import Profile from '@/components/common/Profile'
import Line from '@/components/common/Sentence/line'
import St from '@/components/pages/chemi/styles'
import { useBlanQStore } from '@/store/blanQ'
import { useInputStore } from '@/store/chemi/input'
import { Dispatch, SetStateAction } from 'react'

interface FriendQuizProps {
  setIsRevealed: Dispatch<SetStateAction<boolean>>

  isRevealed: boolean
}

const FriendsQuiz = ({ setIsRevealed, isRevealed }: FriendQuizProps) => {
  const { quizChunk } = useBlanQStore()
  const input = useInputStore()
  return (
    <St.QuizContainer>
      <St.Header>
        <St.Main>친구에게 무슨 일이 있었을까요?</St.Main>
        <St.Sub>이야기의 빈칸을 채우면 포인트 2점을 얻을 수 있어요</St.Sub>
      </St.Header>
      <Profile src="/assets/icon/profile.png" name="김광현" />

      <St.QuizContent
        onClick={() => setIsRevealed(true)}
        isRevealed={isRevealed}
      >
        {isRevealed ? <Line chunks={quizChunk} blank={input} /> : '도전하기'}
      </St.QuizContent>
    </St.QuizContainer>
  )
}

export default FriendsQuiz
