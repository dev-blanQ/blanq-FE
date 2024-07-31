import St from './styles'
import Image from 'next/image'

const Profile = ({ src, name }: { src: string; name: string }) => {
  return (
    <St.Wrapper>
      <Image
        src={src}
        alt="profile image"
        width={100}
        height={100}
        style={{
          borderRadius: '10rem',
        }}
      />
      <St.Text>김광현</St.Text>
    </St.Wrapper>
  )
}

export default Profile
