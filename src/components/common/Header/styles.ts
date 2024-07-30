import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
`

export const Title = styled.span`
  ${FONTS.HEADER.title}
`

export const PointContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  ${FONTS.HEADER.body}
`

export const PointStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  margin-right: 0.8rem;
`

export const User = styled.span`
  color: var(--color-black);
`
export const Max = styled.span`
  color: var(--color-gray-200);
`

export const TimerStatus = styled.div`
  background-color: var(--color-black);
  color: var(--color-white);
  border-radius: 10rem;
  padding: 0.5rem 1rem;
`
