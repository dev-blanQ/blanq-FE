import { fontProps } from '@/types'

function FONT({ font, weight, size, letterSpacing }: fontProps): string {
  return `
    font-family:${font};
    font-weight: ${weight};
    font-size: ${size}rem;
    letter-spacing: ${letterSpacing};
  `
}

const HEADER = {
  title: FONT({
    weight: 700,
    size: 2,
    font: 'Poppins',
    letterSpacing: 'normal',
  }),
  body: FONT({
    weight: 600,
    size: 1.3,
    font: 'Poppins',
    letterSpacing: 'normal',
  }),
}

export const FONTS = {
  h1: FONT({
    weight: 800 /*ExtraBold*/,
    size: 6,
    font: 'Pretendard',
    letterSpacing: 'normal',
  }),
  body1: FONT({
    weight: 600 /*SemiBold*/,
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
    weight: 500 /*Medium*/,
    size: 1.6,
    font: 'Pretendard',
    letterSpacing: 'normal',
  }),
  body4: FONT({
    weight: 500,
    size: 1.2,
    font: 'Pretendard',
    letterSpacing: 'normal',
  }),
  body5: FONT({
    weight: 400 /*Regular*/,
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
  HEADER,
}

export type FontsKeyType = keyof typeof FONTS
