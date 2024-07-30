import {
  Container,
  Title,
  ContentWrapper,
  TellMeBox,
  QuizControl,
  Main,
  Sub,
  InviteBtn,
  MakeQuizBtn,
} from './styles'
import Image from 'next/image'

const QuizToday = () => {
  return (
    <Container>
      <Title>나의 이야기</Title>
      <ContentWrapper>
        <TellMeBox>
          <Main>오늘은 무슨 일이 있었나요?</Main>
          <Sub>나의 이야기는 20자 이하로 적을 수 있어요</Sub>
        </TellMeBox>
        <QuizControl>
          <InviteBtn>
            <Image
              src="/assets/icon/airplane.png"
              alt="airplane icon"
              width={18}
              height={18}
            />
          </InviteBtn>
          <MakeQuizBtn>이야기 만들기</MakeQuizBtn>
        </QuizControl>
      </ContentWrapper>
    </Container>
  )
}

export default QuizToday
