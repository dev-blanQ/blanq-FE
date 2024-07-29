import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'

import { ReactNode } from 'react'

const DefaultBtn = styled.button`
  border-radius: 0.5rem;
  width: 38.6rem;
  height: 5.2rem;
  text-align: center;
`
const Cubic = styled(DefaultBtn)`
  color: var(--color-yellow-100);
  background-color: var(--color-green-400);
  height: 4rem;
`
export { DefaultBtn, Cubic }
