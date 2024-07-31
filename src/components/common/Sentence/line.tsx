import { useBlanQStore } from '@/store/blanQ'
import { useEffect } from 'react'
import Cubic from './cubic'
import St from './styles'

interface LineProps {
  chunks: string[]
  blank?: string
}

const Line = ({ chunks, blank }: LineProps) => {
  return (
    <St.Line.Wrapper>
      {chunks ? (
        chunks.map((chunk, idx) =>
          chunk != '@' ? (
            <span key={idx}>{chunk}</span>
          ) : blank ? (
            <Cubic key={idx} blank={blank} />
          ) : (
            <Cubic key={idx} />
          ),
        )
      ) : (
        <span>...</span>
      )}
    </St.Line.Wrapper>
  )
}

export default Line
