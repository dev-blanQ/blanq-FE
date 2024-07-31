import Bubble from './bubble'
import Speech from './speechText'
import St from './styles'
import Image from 'next/image'

interface FriendQuizProps {
  image: string
  name: string
  speak: string
}

const FriendQuiz: React.FC<FriendQuizProps> = ({
  image,
  name,
  speak,
}: FriendQuizProps) => {
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
      <St.ContentContainer>
        <St.Name>{name}</St.Name>
        <Bubble>
          <Speech speak={speak} />
        </Bubble>
      </St.ContentContainer>
    </St.StyledRoot>
  )
}

export default FriendQuiz
