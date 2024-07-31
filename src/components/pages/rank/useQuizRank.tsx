import { TtaskId } from '@/types/tasks'
import { useEffect, useState, useCallback } from 'react'
import { getRankByFrienQuiz } from '@/lib/api/ranks'
import { TFriend } from '@/types/ranks'
const useQuizRank = (taskId: TtaskId | TtaskId[] | undefined) => {
  const [quizRank, setQuizRank] = useState<
    {
      member: TFriend
      numOfTrial: number
    }[]
  >([])

  const getQuizRankApi = useCallback(
    async (taskId: TtaskId) => {
      try {
        console.log(taskId)
        if (taskId) {
          const response = await getRankByFrienQuiz(taskId)
          console.log(response)
          setQuizRank(response)
        } else {
          throw new Error('라우터 값으로 에러 발생함')
        }
      } catch (e) {}
    },
    [taskId],
  )
  useEffect(() => {
    if (typeof taskId === 'string') {
      getQuizRankApi(taskId)
    }
  }, [getQuizRankApi])

  return { quizRank }
}

export default useQuizRank
