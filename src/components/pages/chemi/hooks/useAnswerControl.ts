import { subtractPoint } from '@/lib/api/point'
import { getHint, postAnwerSubmit } from '@/lib/api/tasks'
import { useBlanQStore, useBlanQActions } from '@/store/blanQ'
import { Tcontent } from '@/types/tasks'
import { useState } from 'react'

const useAnswerControl = () => {
  const [count, setCount] = useState(5)
  const [hint, setHint] = useState<Tcontent>([])
  const { taskId, answer } = useBlanQStore()
  const { setAnswer } = useBlanQActions()

  const handlePointForTry = async () => {
    try {
      console.log('포인트 빼기')
      //const response = await subtractPoint(1)
    } catch (e) {}
  }
  const getHintForQuiz = async () => {
    const { content } = await getHint(taskId)
    setHint(content)
  }

  const handleAnswerSubmit = async (input: string) => {
    console.log('정답 제출!')
    if (input) {
      const { content, answer } = await postAnwerSubmit(taskId, input)
      setAnswer(answer)
    }
    if (count > 0) {
      setCount((prev) => prev - 1)
    }
  }

  return {
    count,
    setCount,
    handleAnswerSubmit,
    handlePointForTry,
    hint,
    getHintForQuiz,
  }
}

export default useAnswerControl
