import { TmemberNickname, TTopRankCount, TCloseFriends } from '@/types/ranks'
import { TtaskId } from '@/types/tasks'
import { Apis } from './axios'
import PATH from './constant'

// 퀴즈 조회
function getMyFriendsRank(): Promise<{
  memberNickname: TmemberNickname
  topRankCount: TTopRankCount
  closeFriends: TCloseFriends
}> {
  return Apis.default.GET(`${PATH.RANKS_ME_HISTORY}`)
}
// 퀴즈별 랭킹 조회
function getMyQuizFriensdRank(taskId: TtaskId): Promise<{
  member: {
    memberNickname: TmemberNickname
    topRankCount: TTopRankCount
    closeFriends: TCloseFriends
  }
  numOfTrial: number
}> {
  return Apis.default.GET(`${PATH.RANKS_TASKS_TASKID}/${taskId}`)
}
export { getMyFriendsRank, getMyQuizFriensdRank }
