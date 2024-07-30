import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'

import { ReactNode } from 'react'

const Gradient = styled.div`
  border-radius: 1.5rem;
  background: radial-gradient(
      circle at top left,
      var(--color-green-100),
      transparent 70% 25rem
    ),
    radial-gradient(
      circle at bottom left,
      var(--color-green-200),
      transparent 70% 25rem
    ),
    radial-gradient(
      circle at top right,
      var(--color-pink-100),
      transparent 90% 25rem
    ),
    radial-gradient(
      circle at bottom right,
      var(--color-blue-100),
      transparent 90% 25rem
    );
`

export { Gradient }
