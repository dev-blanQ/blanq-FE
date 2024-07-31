import { useEffect, useState, useCallback } from 'react'
import { TmemberNickname, TTopRankCount, TCloseFriends } from '@/types/ranks'
import { getMyFriendsRank } from '@/lib/api/ranks'
const useMyFriendsRank = () => {
  const [memberNickname, setMemberName] = useState<TmemberNickname>('')
  const [topRankCount, setTopRankCount] = useState<TTopRankCount>(undefined)
  const [closeFriends, setCloseFriends] = useState<TCloseFriends>([])
  const getMyTop3FriendsApi = useCallback(async () => {
    try {
      const { memberNickname, topRankCount, closeFriends } =
        await getMyFriendsRank()
      console.log(memberNickname, topRankCount, closeFriends)
      setMemberName(memberNickname)
      setTopRankCount(topRankCount)
      setCloseFriends(closeFriends)
    } catch (e) {}
  }, [])
  useEffect(() => {
    getMyTop3FriendsApi()
  }, [getMyTop3FriendsApi])

  return { memberNickname, topRankCount, closeFriends }
}

export default useMyFriendsRank

/**
 * 
 * 
 * {
  "memberNickname": "이현진",
  "topRankCount": 3,
  "closeFriends": [
    {
      "memberId": "member_id1",
      "nickname": "김경민",
      "profileUrl": "profile_url1"
    },
    {
      "memberId": "member_id2",
      "nickname": "장아연",
      "profileUrl": "profile_url2"
    },
    {
      "memberId": "member_id3",
      "nickname": "하경민",
      "profileUrl": "profile_url3"
    }
  ]
}
 */
