import FriendQuiz from '@/components/common/FriendQuiz'

import { useRouter } from 'next/router'
import useQuizInfo from './hooks/useQuizInfo'

const Quiz = () => {
  const router = useRouter()
  const { quiz } = useQuizInfo(router.query.id)
  console.log(quiz)
  return (
    <FriendQuiz
      name="장ㅇ아연"
      taskId="dsnk"
      isFinished={true}
      content={['asdnknf asdnknf', '@', 'asdnknf']}
      image="/assets/icon/profile.png"
    />
  )
}

export default Quiz
