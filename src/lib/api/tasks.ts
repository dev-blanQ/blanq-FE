import { QuestProps } from '@/types/tasks'
import { Apis } from './axios'
import PATH from './constant'

// 북마크 생성
function getQuizzess() {
  return Apis.default.GET(`${PATH.TASKS_QUIZZES}`)
}

function getQuests(): Promise<QuestProps[]> {
  return Apis.default.GET(`${PATH.TASKS_QUESTS}`)
}

export { getQuizzess, getQuests }
