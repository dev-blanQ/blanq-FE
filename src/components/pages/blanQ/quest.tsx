import { Container, Title, ContentWrapper, Quiz, QuizControl } from './styles'

const Quest = () => {
  return (
    <Container>
      {' '}
      <Title>blanQ-uest : 포인트 모으기</Title>
      <ContentWrapper>
        <Quiz>블랭큐는 오늘 먹은 블랭큐는 오늘 먹은</Quiz>
        <Quiz>블랭큐는 오늘 먹은 블랭큐는 오늘 먹은</Quiz>
        <Quiz>블랭큐는 오늘 먹은 블랭큐는 오늘 먹은</Quiz>
        <Quiz>블랭큐는 오늘 먹은 블랭큐는 오늘 먹은</Quiz>
      </ContentWrapper>
    </Container>
  )
}

export default Quest
