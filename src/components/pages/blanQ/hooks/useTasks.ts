import { getQuests } from '@/lib/api/tasks'
import { useCallback, useEffect, useState } from 'react'
import { QuestProps } from '@/types/tasks'

const useTasks = () => {
  const [quests, setQuest] = useState<QuestProps[]>([])
  const getQuestsApi = useCallback(async () => {
    try {
      const response = await getQuests()
      setQuest(response)
    } catch (e) {}
  }, [])

  useEffect(() => {
    getQuestsApi()
  }, [getQuestsApi])

  return { quests }
}
export default useTasks
