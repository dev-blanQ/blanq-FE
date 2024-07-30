import styled from '@emotion/styled'

const FriendsQuizLine = () => {
  return <StyledRoot>I'm speech bubble</StyledRoot>
}

export default FriendsQuizLine

const StyledRoot = styled.div`
  width: 250px;
  background: green;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  border-radius: 35px;
  color: cyan;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid green;
    border-top: 20px solid transparent;
    border-bottom: 20px solid green;
    left: -20px;
    top: 10px;
  }
`
