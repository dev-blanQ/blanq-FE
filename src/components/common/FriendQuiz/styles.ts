import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
const BubbleRoot = styled.div<{ isExist: boolean }>`
  width: ${({ isExist }) => (isExist ? `auto` : `fit-content`)};
  background-color: ${({ isExist }) =>
    isExist ? `var(--color-gray-300)` : `var(--color-gray-400)`};
  padding: 1.5rem;

  border-radius: 1rem;
  color: var(--color-black);
  position: relative;
  &:before {
    content: '';
    position: absolute;
    border-left: 0.8rem solid transparent;
    border-right: ${({ isExist }) =>
      isExist
        ? ` 0.8rem solid var(--color-gray-300)`
        : ` 0.8rem solid var(--color-gray-400)`};

    border-bottom: 0.8rem solid transparent;
    border-top: ${({ isExist }) =>
      isExist
        ? ` 0.8rem solid var(--color-gray-300)`
        : ` 0.8rem solid var(--color-gray-400)`};
    left: -1rem;
    top: 0.5rem;
  }
`
const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
const Name = styled.div`
  padding: 0 0.8rem;
  ${FONTS.body4}
`

const SpeechText = styled.div`
  ${FONTS.body6}
`

const St = {
  BubbleRoot,
  StyledRoot,
  ContentContainer,
  Name,
  SpeechText,
}

export default St
