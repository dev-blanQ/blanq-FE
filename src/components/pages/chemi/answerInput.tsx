import { useState } from 'react'
import St from './styles'
import { useSwiper } from '@/hooks'
import Slides from './slides'
import { useInputActions, useInputStore } from '@/store/chemi/input'
const AnswerInput = () => {
  const input = useInputStore()
  const { changeInput } = useInputActions()
  const count = 4
  const [wordsArr, setWordsArr] = useState<{ word: string; percent: number }[]>(
    [
      { word: 'dsfn', percent: 90 },
      { word: 't사사사사사', percent: 90 },
      { word: 'dsfn', percent: 90 },
      { word: 'dsfn', percent: 90 },
      { word: 't사사사사사', percent: 90 },
      { word: 't사사사사사', percent: 90 },
      { word: 'dsfn', percent: 90 },
      { word: 't사사사사사', percent: 90 },
      { word: 't사사사사사', percent: 90 },
      { word: 'dsfn', percent: 90 },
    ],
  )
  const { swiperSetting, currentSlide } = useSwiper()
  return (
    <St.InputContainer>
      <St.WordsContainer>
        {wordsArr && (
          <>
            <St.Words>#비슷한 오답</St.Words>
            <Slides swiperSetting={swiperSetting} items={wordsArr} />
          </>
        )}
      </St.WordsContainer>
      <St.Input
        placeholder="빈칸에 들어갈 단어를 입력해주세요"
        value={input}
        onChange={(e) => changeInput(e.target.value)}
      />

      <div>
        <St.State>{count}/5</St.State>
        <St.SubmitBtn>blanQ-uiz 맞추기</St.SubmitBtn>
      </div>
    </St.InputContainer>
  )
}

export default AnswerInput
