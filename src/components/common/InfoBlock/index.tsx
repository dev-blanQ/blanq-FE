import Text from './text'
import StateIcon from './stateIcon'
import styled from '@emotion/styled'
const InfoBlock = () => {
  return (
    <StyledRoot>
      <Text />
      <StateIcon />
    </StyledRoot>
  )
}

export default InfoBlock

const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2.4rem;
  justify-content: space-between;
  background-color: var(--color-gray-400);
  border-radius: 1.5rem;
`
