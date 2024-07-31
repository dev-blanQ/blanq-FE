import St from './styles'

interface CubicProps {
  blank?: string
}

const Cubic = ({ blank }: CubicProps) => {
  return (
    <St.Cubic.Wrapper>
      <St.Cubic.Text>{blank ?? '빈칸'}</St.Cubic.Text>
    </St.Cubic.Wrapper>
  )
}

export default Cubic
