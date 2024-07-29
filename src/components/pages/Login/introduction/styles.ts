import styled from '@emotion/styled'
const SliderWrapper = styled.div`
  display: flex;
  width: 21.2rem;
  height: 26.6rem;
  align-items: center;
  .swiper-wrapper {
    .swiper-slide {
      width: fit-content !important;
    }
  }
`
const IndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`

const Indicator = styled.div<{ isCurrent: boolean }>`
  width: ${({ isCurrent }) => (isCurrent ? '3.9rem' : '0.9rem')};
  height: 0.9rem;
  background-color: var(--color-black);
  border-radius: 2.5rem;
`

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin: 8rem auto 15.8rem auto;
`

const St = {
  SliderWrapper,
  IntroductionContainer,
  IndicatorContainer,
  Indicator,
}

export default St
