import { useBlanQStore } from '@/store/blanQ'
import { useEffect } from 'react'
import Cubic from './cubic'
import St from './styles'

interface LineProps {
  chunks: string[]
  blank?: string
  isCenter?: boolean
}

const Line = ({ chunks, blank, isCenter }: LineProps) => {
  return (
    <St.Line.Wrapper isCenter={isCenter ?? false}>
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
