import { Tcontent, TtaskId, answer, WrongAnswerProps } from '@/types/tasks'
import { TFriend } from '@/types/ranks'
import { Apis } from './axios'
import PATH from './constant'

/**
 *
 * @param taskId
 * @returns
 */

// 퀴즈 조회
function getQuizById(taskId: TtaskId): Promise<{
  taskId: TtaskId
  member: TFriend
  content: Tcontent
  answer: answer
  isFinished: boolean
  wrongAnswers?: WrongAnswerProps[]
}> {
  return Apis.default.GET(`${PATH.TASKS}/${taskId}`)
}

// 퀴즈 조회
function getQuizzess(): Promise<
  {
    taskId: TtaskId
    content: Tcontent
    member: TFriend
    isFinished: boolean
  }[]
> {
  return Apis.default.GET(`${PATH.TASKS_QUIZZES}`)
}

function postAnwerSubmit(
  taskId: TtaskId,
  answer: answer,
): Promise<{
  content: Tcontent
  answer: answer
}> {
  return Apis.default.POST(`${PATH.TASKS}/${taskId}/${PATH.ANSWER}`, { answer })
}

function getHint(taskId: TtaskId): Promise<{
  content: Tcontent
}> {
  return Apis.default.GET(`${PATH.TASKS}/${taskId}/${PATH.HINT}`)
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

export {
  getQuizzess,
  getQuests,
  makeQuiz,
  saveQuiz,
  getMyQuiz,
  getQuizById,
  getHint,
  postAnwerSubmit,
}
