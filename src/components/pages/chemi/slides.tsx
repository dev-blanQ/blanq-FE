import 'swiper/css'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import St from './styles'
const Slides = ({
  swiperSetting,
  items,
}: {
  swiperSetting: SwiperProps
  items: { word: string; percent: number }[]
}) => {
  return (
    <St.SliderWrapper>
      <Swiper {...swiperSetting}>
        {items.map(
          (
            { word, percent }: { word: string; percent: number },
            idx: number,
          ) => (
            <SwiperSlide key={idx}>
              <St.SimilarWord key={idx}>
                {word}-{percent}
              </St.SimilarWord>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </St.SliderWrapper>
  )
}
export default Slides
