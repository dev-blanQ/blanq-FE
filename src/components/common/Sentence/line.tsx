import Cubic from './cubic'
import St from './styles'

interface LineProps {
  chunks: string[]
  blank?: string
}

const Line = ({ chunks, blank }: LineProps) => {
  console.log(chunks)
  return (
    <St.Line.Wrapper>
      {chunks.map((chunk, idx) =>
        chunk != '@' ? <span key={idx}>{chunk}</span> : <Cubic key={idx} />,
      )}
    </St.Line.Wrapper>
  )
}

export default Line
