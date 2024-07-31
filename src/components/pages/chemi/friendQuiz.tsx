import Profile from '@/components/common/Profile'
import Line from '@/components/common/Sentence/line'
import St from '@/components/pages/chemi/styles'
import { useBlanQStore } from '@/store/blanQ'
import { useInputStore } from '@/store/chemi/input'
import { Dispatch, SetStateAction } from 'react'
import useAnswerControl from './hooks/useAnswerControl'
import { getRandomNumber } from '@/lib/randNum'
interface FriendQuizProps {
  setIsRevealed: Dispatch<SetStateAction<boolean>>

  isRevealed: boolean
}

const FriendsQuiz = ({ setIsRevealed, isRevealed }: FriendQuizProps) => {
  const { quizChunk } = useBlanQStore()
  const input = useInputStore()
  const { handlePointForTry } = useAnswerControl()
  const handleTry = () => {
    setIsRevealed(true)
    handlePointForTry()
  }
  return (
    <St.QuizContainer>
      <St.Header>
        <St.Main>친구에게 무슨 일이 있었을까요?</St.Main>
        <St.Sub>이야기의 빈칸을 채우면 포인트 2점을 얻을 수 있어요</St.Sub>
      </St.Header>
      <Profile src={`/assets/profile/1.jpeg`} name="장아연" />

      <St.QuizContent onClick={handleTry} isRevealed={isRevealed}>
        {isRevealed ? (
          <Line chunks={quizChunk} blank={input} isCenter={true} />
        ) : (
          '도전하기'
        )}
      </St.QuizContent>
    </St.QuizContainer>
  )
}

export default FriendsQuiz
