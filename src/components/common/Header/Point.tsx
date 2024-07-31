import Image from 'next/image'
import { PointContainer, PointStatus, User, Max, TimerStatus } from './styles'
const score = 1

const Point = () => {
  return (
    <PointContainer>
      <PointStatus>
        <Image
          src="/assets/icon/star.png"
          alt="star icon"
          width={16}
          height={16}
        />
        <div>
          <User>{score}</User>
          <Max> /10</Max>
        </div>
      </PointStatus>
      <TimerStatus>30:00</TimerStatus>
    </PointContainer>
  )
}

export default Point
