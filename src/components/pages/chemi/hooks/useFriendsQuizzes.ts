import { useEffect, useState, useCallback } from 'react'
import { TtaskId, Tcontent } from '@/types/tasks'
import { TFriend } from '@/types/ranks'
import { getQuizzess } from '@/lib/api/tasks'

const useFriendsQuizzess = () => {
  const [myFriendsQuizzess, setMyFriendsQuizzess] = useState<
    {
      taskId: TtaskId
      content: Tcontent
      member: TFriend
      isFinished: boolean
    }[]
  >([])

  const getMyFriendsQuizzessApi = useCallback(async () => {
    try {
      const response = await getQuizzess()

      setMyFriendsQuizzess(response)
    } catch (e) {}
  }, [])
  useEffect(() => {
    getMyFriendsQuizzessApi()
  }, [getMyFriendsQuizzessApi])

  return { myFriendsQuizzess }
}

export default useFriendsQuizzess
