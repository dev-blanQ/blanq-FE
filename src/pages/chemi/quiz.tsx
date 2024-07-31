import InfoBlock from '@/components/common/InfoBlock'
import AnswerQuiz from '@/components/pages/chemi/answerQuiz'
import FriendsQuiz from '@/components/pages/chemi/friendQuiz'
import { useBlanQActions } from '@/store/blanQ'
import { useRouter } from 'next/router'
import { useEffect, useCallback, useState } from 'react'
import { TtaskId } from '@/types/tasks'
import { getQuizById } from '@/lib/api/tasks'
const Quiz = () => {
  const {
    query: { id: taskId },
  } = useRouter()
  const [isRevealed, setIsRevealed] = useState(false)

  const { setTaskId, setQuizChunk, setWrongAnswers } = useBlanQActions()
  const getQuizRankApi = useCallback(
    async (id: TtaskId) => {
      try {
        console.log(taskId)
        if (typeof taskId == 'string') {
          const {
            taskId: id,
            content,
            wrongAnswers,
          } = await getQuizById(taskId)
          setTaskId(id)
          setQuizChunk(content)
          setWrongAnswers(wrongAnswers)

          // setQuizRank(response)
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

  return (
    <>
      <InfoBlock />
      <FriendsQuiz isRevealed={isRevealed} setIsRevealed={setIsRevealed} />
      {isRevealed && <AnswerQuiz />}
    </>
  )
}

export default Quiz
