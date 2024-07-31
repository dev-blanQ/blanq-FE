import Title from '@/components/common/Layout/Title'
import Line from '@/components/common/Sentence/line'
import useTasks from './hooks/useTasks'
import St from './styles'

const Quest = () => {
  const { quests } = useTasks()
  console.log(quests)
  return (
    <St.Container>
      {' '}
      <Title content="blanQ-uest : 포인트 모으기" />
      <St.ContentWrapper>
        {quests.map(({ content }, idx) => (
          <St.Quiz key={idx}>
            <Line chunks={content} />
          </St.Quiz>
        ))}
      </St.ContentWrapper>
    </St.Container>
  )
}

export default Quest
