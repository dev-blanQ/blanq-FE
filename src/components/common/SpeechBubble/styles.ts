import styled from '@emotion/styled'
const StyledRoot = styled.div`
  width: 27.5rem;
  background: var(--color-gray-300);
  padding: 1.5rem;

  border-radius: 1rem;
  color: var(--color-black);
  position: relative;
  &:before {
    content: '';
    position: absolute;
    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid var(--color-gray-300);
    border-bottom: 0.8rem solid transparent;
    border-top: 0.8rem solid var(--color-gray-300);
    left: -1rem;
    top: 0.5rem;
  }
`

const St = {
  StyledRoot,
}

export default St
