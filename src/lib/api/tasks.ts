import { Tcontent, TtaskId, answer } from '@/types/tasks'
import { Apis } from './axios'
import PATH from './constant'

// 퀴즈 조회
function getQuizzess() {
  return Apis.default.GET(`${PATH.TASKS_QUIZZES}`)
}
// 오늘의 문제 저장
function saveQuiz(body: { content: Tcontent; answer: answer }) {
  return Apis.default.POST(`${PATH.TASKS_QUIZZES}`, body)
}

// 나의 오늘 문제 조회
function getMyQuiz(): Promise<{ taskId: TtaskId; content: Tcontent }> {
  return Apis.default.GET(`${PATH.TASKS_QUIZZES_ME}`)
}

// 주어진 문장으로 문제 만들기
function makeQuiz(sentence: string): Promise<{
  content: Tcontent
  answer: answer
}> {
  return Apis.default.POST(`${PATH.TASKS_QUIZZES_GENERATE}`, { sentence })
}

// 퀘스트 조회
function getQuests(): Promise<
  {
    taskId: TtaskId
    content: Tcontent
  }[]
> {
  return Apis.default.GET(`${PATH.TASKS_QUESTS}`)
}

export { getQuizzess, getQuests, makeQuiz, saveQuiz, getMyQuiz }
