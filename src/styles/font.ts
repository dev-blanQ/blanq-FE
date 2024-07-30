import { fontProps } from '@/types'

function FONT({ font, weight, size, letterSpacing }: fontProps): string {
  return `
    font-family:${font};
    font-weight: ${weight};
    font-size: ${size}rem;
    letter-spacing: ${letterSpacing};
  `
}

export const FONTS = {
  h1: FONT({
    weight: 800,
    size: 6,
    font: 'Pretendard',
    letterSpacing: 'normal',
  }),
  body1: FONT({
    weight: 600,
    size: 1.8,
    font: 'Pretendard',
    letterSpacing: 'normal',
  }),
  body2: FONT({
    weight: 600,
    size: 1.4,
    font: 'Pretendard',
    letterSpacing: 'normal',
  }),
  body3: FONT({
    weight: 500,
    size: 1.6,
    font: 'Pretendard',
    letterSpacing: 'normal',
  }),
  body4: FONT({
    weight: 500,
    size: 1.4,
    font: 'Pretendard',
    letterSpacing: 'normal',
  }),
  body5: FONT({
    weight: 400,
    size: 1.6,
    font: 'Pretendard',
    letterSpacing: 'normal',
  }),
  body6: FONT({
    weight: 400,
    size: 1.4,
    font: 'Pretendard',
    letterSpacing: 'normal',
  }),
  logo: FONT({
    weight: 700,
    size: 2,
    font: 'Poppins',
    letterSpacing: 'normal',
  }),
}

export type FontsKeyType = keyof typeof FONTS
