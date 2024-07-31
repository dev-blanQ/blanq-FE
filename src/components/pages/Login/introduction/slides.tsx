import 'swiper/css'
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import Image from 'next/image'
import St from './styles'
const Slides = ({
  swiperSetting,
  items,
}: {
  swiperSetting: SwiperProps
  items: any
}) => {
  return (
    <St.SliderWrapper>
      <Swiper {...swiperSetting}>
        {items.map(
          ({ url, alt }: { url: string; alt: string }, idx: number) => (
            <SwiperSlide key={idx}>
              <Image src={url} alt={alt} width={212} height={266} />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </St.SliderWrapper>
  )
}
export default Slides
