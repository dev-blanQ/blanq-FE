import { useSwiper } from '@/hooks'
import { useEffect } from 'react'
import Slides from './slides'
import Current from './current'
import St from './styles'

const INTRODUCTION_IMAGE = [
  {
    url: 'https://item.kakaocdn.net/do/4f457e7df2f7242fc74ec4667b4bccb59f5287469802eca457586a25a096fd31',
    alt: '설명 1',
  },

  {
    url: 'https://item.kakaocdn.net/do/4f457e7df2f7242fc74ec4667b4bccb5d0bbab1214a29e381afae56101ded106',
    alt: '설명 2',
  },
]

const Introduction = () => {
  const { swiperSetting, currentSlide } = useSwiper()
  useEffect(() => {
    console.log(currentSlide)
  }, [currentSlide])

  return (
    <St.IntroductionContainer>
      <Current currentSlide={currentSlide} total={INTRODUCTION_IMAGE.length} />
      <Slides swiperSetting={swiperSetting} items={INTRODUCTION_IMAGE} />
    </St.IntroductionContainer>
  )
}

export default Introduction
