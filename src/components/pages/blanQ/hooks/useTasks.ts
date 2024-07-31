import { getQuests, getMyQuiz } from '@/lib/api/tasks'
import { useCallback, useEffect, useState } from 'react'
import { QuestProps } from '@/types/tasks'
import { useBlanQActions } from '@/store/blanQ'
const useTasks = () => {
  const [quests, setQuest] = useState<QuestProps[]>([])
  const { setCode, setQuizChunk } = useBlanQActions()

  const getQuestsApi = useCallback(async () => {
    try {
      const response = await getQuests()
      setQuest(response)
    } catch (e) {}
  }, [])
  const getMyQuizApi = useCallback(async () => {
    try {
      const { taskId, content } = await getMyQuiz()
      setCode(taskId)
      setQuizChunk(content)
    } catch (e) {}
  }, [])

  useEffect(() => {
    getQuestsApi()
  }, [getQuestsApi])
  useEffect(() => {
    getMyQuizApi()
  }, [getMyQuizApi])

  return { quests }
}
export default useTasks
