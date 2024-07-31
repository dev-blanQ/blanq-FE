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
        chunk != '@' ? <span>{chunk}</span> : <Cubic />,
      )}
    </St.Line.Wrapper>
  )
}

export default Line
