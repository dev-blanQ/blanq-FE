import Title from '@/components/common/Layout/Title'
import Score from '@/components/pages/rank/score'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import useQuizRank from './hooks/useQuizRank'

const QuizRank = () => {
  const router = useRouter()
  const { quizRank } = useQuizRank(router.query.id)
  console.log('quizRank', quizRank)

  return (
    <>
      {' '}
      <Container>
        <Title content="맞춘 친구들" />

        {quizRank &&
          quizRank.map(({ member, numOfTrial }, idx) => (
            <Score
              order={idx + 1}
              member={member}
              numOfTrial={numOfTrial}
              key={idx}
            />
          ))}
      </Container>
    </>
  )
}

export default QuizRank

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2.5rem 0;
  margin-bottom: 10rem;
`
