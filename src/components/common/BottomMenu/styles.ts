import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'

export const TabsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: inherit;

  background-color: var(--color-black);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1.5rem 0;
  border-radius: 1.5rem;
  ${FONTS.body4};
`
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`
export const Text = styled.p<{ isActive: boolean }>`
  color: ${({ isActive }) =>
    isActive ? `var(--color-white)` : `var(--color-gray-100)`};
`
