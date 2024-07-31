import St from './styles'
import Image from 'next/image'
interface Props {
  children: React.ReactNode
}

function SpeechBubble({ children }: Props) {
  return (
    <>
      <St.StyledRoot>
        {children}
        <Image
          src={`/assets/icon/solved.png`}
          alt="solved icon"
          width={18}
          height={18}
          style={{ position: 'absolute', top: '-0.3rem', right: '-0.3rem' }}
        />
      </St.StyledRoot>
    </>
  )
}

export default SpeechBubble
