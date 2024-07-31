import St from './styles'
import Image from 'next/image'
interface Props {
  children: React.ReactNode
  isExist: boolean
  isFinished: boolean
}

function Bubble({ children, isExist, isFinished }: Props) {
  return (
    <>
      <St.BubbleRoot isExist={isExist}>
        {children}
        {isFinished && (
          <Image
            src={`/assets/icon/solved.png`}
            alt="solved icon"
            width={18}
            height={18}
            style={{ position: 'absolute', top: '-0.3rem', right: '-0.3rem' }}
          />
        )}
      </St.BubbleRoot>
    </>
  )
}

export default Bubble
