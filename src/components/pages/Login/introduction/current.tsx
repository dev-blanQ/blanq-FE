import St from './styles'

const Current = ({
  currentSlide,
  total,
}: {
  currentSlide: number
  total: number
}) => {
  const arr = new Array(total).fill(0)
  return (
    <St.IndicatorContainer>
      {arr.map((_, idx) => (
        <St.Indicator isCurrent={currentSlide === idx} />
      ))}
    </St.IndicatorContainer>
  )
}
export default Current
