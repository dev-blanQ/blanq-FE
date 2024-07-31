import { WrongAnswerProps } from '@/types/tasks'
import 'swiper/css'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import St from './styles'
const Slides = ({
  swiperSetting,
  wrongAnswers,
}: {
  swiperSetting: SwiperProps
  wrongAnswers: WrongAnswerProps[]
}) => {
  return (
    <St.SliderWrapper>
      <Swiper {...swiperSetting}>
        {wrongAnswers.map(
          ({ answer, similarity }: WrongAnswerProps, idx: number) => (
            <SwiperSlide key={idx}>
              <St.SimilarWord key={idx}>
                {answer}-{similarity}
              </St.SimilarWord>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </St.SliderWrapper>
  )
}
export default Slides
