import Quiz from '@/components/pages/rank/quiz'
import { useRouter } from 'next/router'
import QuizRank from '@/components/pages/rank/quizRank'

const Rank = () => {
  return (
    <div>
      <Quiz />
      <QuizRank />
    </div>
  )
}

export default Rank
