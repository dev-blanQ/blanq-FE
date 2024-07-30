import Profile from '@/components/common/Profile'
import St from '@/components/pages/chemi/styles'
import { useInputStore } from '@/store/chemi/input'
import Image from 'next/image'
import { useState } from 'react'
const FriendsQuiz = () => {
  const [isRevealed, setIsRevealed] = useState(false)

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
        {isRevealed ? `ㅁㄴ우ㅏ ${input}  ㅣ무니ㅏㅇ` : '도전하기'}
      </St.QuizContent>
    </St.QuizContainer>
  )
}

export default FriendsQuiz
