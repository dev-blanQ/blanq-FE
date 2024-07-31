import Image from 'next/image'
import St from './styles'
const StateIcon = () => {
  return (
    <>
      <St.IconWrapper>
        {' '}
        <Image
          src="/assets/icon/star.png"
          alt="star icon"
          width={20}
          height={20}
        />
      </St.IconWrapper>
    </>
  )
}
export default StateIcon
