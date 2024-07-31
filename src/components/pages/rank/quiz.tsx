import FriendQuiz from '@/components/common/FriendQuiz'
import { getRandomNumber } from '@/lib/randNum'
import { useRouter } from 'next/router'
import useQuizInfo from './hooks/useQuizInfo'

const Quiz = () => {
  const router = useRouter()
  const { quiz } = useQuizInfo(router.query.id)
  console.log(quiz)
  return (
    <FriendQuiz
      name="장아연"
      taskId="dsnk"
      isFinished={false}
      content={['이제', '@', '도착, 재밌다!']}
      image={`/assets/profile/${getRandomNumber()}.jpeg`}
    />
  )
}

export default Quiz
