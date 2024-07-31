import { Tcontent, TtaskId, WrongAnswerProps } from '@/types/tasks'
import { useEffect, useState, useCallback } from 'react'
import { getQuizById } from '@/lib/api/tasks'
import { TFriend } from '@/types/ranks'

const useQuizInfo = (taskId: TtaskId | string[] | undefined) => {
  const [quiz, setQuiz] = useState<
    | {
        taskId: TtaskId
        member: TFriend
        content: Tcontent

        isFinished: boolean
        wrongAnswers?: WrongAnswerProps[]
      }
    | undefined
  >(undefined)
  const getQuizInfoApi = useCallback(
    async (taskId: TtaskId) => {
      try {
        console.log(taskId)
        if (typeof taskId === 'string') {
          const response = await getQuizById(taskId)
          console.log(response)
          if (response) {
            setQuiz(response)
          }
        } else {
          throw new Error('라우터 값으로 에러 발생함')
        }
      } catch (e) {}
    },
    [taskId],
  )
  useEffect(() => {
    if (typeof taskId === 'string') {
      getQuizInfoApi(taskId)
    }
  }, [getQuizInfoApi])

  return { quiz }
}

export default useQuizInfo
