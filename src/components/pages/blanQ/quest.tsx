import Title from '@/components/common/Layout/Title'
import St from './styles'

const Quest = () => {
  return (
    <St.Container>
      {' '}
      <Title content="blanQ-uest : 포인트 모으기" />
      <St.ContentWrapper>
        <St.Quiz>블랭큐는 오늘 먹은 블랭큐는 오늘 먹은</St.Quiz>
        <St.Quiz>블랭큐는 오늘 먹은 블랭큐는 오늘 먹은</St.Quiz>
        <St.Quiz>블랭큐는 오늘 먹은 블랭큐는 오늘 먹은</St.Quiz>
        <St.Quiz>블랭큐는 오늘 먹은 블랭큐는 오늘 먹은</St.Quiz>
      </St.ContentWrapper>
    </St.Container>
  )
}

export default Quest
