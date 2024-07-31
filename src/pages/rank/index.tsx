import FriendQuiz from '@/components/common/FriendQuiz'
import Title from '@/components/common/Layout/Title'
import Score from '@/components/pages/rank/score'
const Rank = () => {
  return (
    <div>
      <FriendQuiz
        name="장ㅇ아연"
        speak="asdnknf"
        image="/assets/icon/profile.png"
      />
      <div>
        <Title content="맞춘 친구들" />
        <div>
          <Score />
        </div>
      </div>
    </div>
  )
}

export default Rank
