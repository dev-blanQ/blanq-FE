import Bubble from './bubble'
import Line from '../Sentence/line'
import St from './styles'
import Image from 'next/image'
import { TFriend } from '@/types/ranks'
import { Tcontent, TtaskId } from '@/types/tasks'
import { useRouter } from 'next/router'

interface FriendQuizProps {
  image: TFriend['profileUrl']
  name: TFriend['nickname']
  content: Tcontent
  taskId: TtaskId
  isFinished: boolean
}

const FriendQuiz: React.FC<FriendQuizProps> = ({
  image,
  name,
  content,
  taskId,
  isFinished,
}: FriendQuizProps) => {
  console.log(image, name, content, taskId)
  const router = useRouter()
  const handleBubbleClick = () => {
    router.push(`/rank?id=${taskId}`)
  }
  return (
    <St.StyledRoot>
      <Image
        src={image}
        alt="profile image"
        width={50}
        height={50}
        style={{
          borderRadius: '10rem',
        }}
      />
      <St.ContentContainer onClick={content && handleBubbleClick}>
        <St.Name>{name}</St.Name>
        <Bubble isExist={Boolean(content)} isFinished={isFinished}>
          <Line chunks={content} />
        </Bubble>
      </St.ContentContainer>
    </St.StyledRoot>
  )
}

export default FriendQuiz
