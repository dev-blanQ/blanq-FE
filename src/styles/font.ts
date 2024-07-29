import { fontProps } from '@/types'

function FONT({ weight, size, letterSpacing }: fontProps): string {
  return `
    font-family:inherit;
    font-weight: ${weight};
    font-size: ${size}rem;
    letter-spacing: ${letterSpacing};
  `
}

const KOREAN = {
  h1: FONT({
    weight: 800,
    size: 2,

    letterSpacing: 'normal',
  }),
  //h2: FONT({ weight: 400, size: 1.4, lineHeight: 140, letterSpacing: 4 }),
  //body1: FONT({ weight: 600, size: 1.6, lineHeight: 140, letterSpacing: 3 }),
  h2: FONT({
    weight: 800,
    size: 1.8,

    letterSpacing: 'normal',
  }),

  h3: FONT({
    weight: 800,
    size: 1.2,

    letterSpacing: 'normal',
  }),
  body1: FONT({
    weight: 700,
    size: 1.6,

    letterSpacing: 'normal',
  }),
  body2: FONT({
    weight: 700,
    size: 1.2,

    letterSpacing: 'normal',
  }),
  body3: FONT({
    weight: 700,
    size: 1.0,

    letterSpacing: 'normal',
  }),
}

const ENGLISH = {
  h1: FONT({
    weight: 800,
    size: 6,

    letterSpacing: 'normal',
  }),
  //h2: FONT({ weight: 400, size: 1.4, lineHeight: 140, letterSpacing: 4 }),
  //body1: FONT({ weight: 600, size: 1.6, lineHeight: 140, letterSpacing: 3 }),
  h2: FONT({
    weight: 800,
    size: 1.35,

    letterSpacing: 'normal',
  }),
  body1: FONT({
    weight: 700,
    size: 2,

    letterSpacing: 'normal',
  }),
  body2: FONT({
    weight: 700,
    size: 1.35,

    letterSpacing: 'normal',
  }),
}

export const FONTS = {
  KOREAN,
  ENGLISH,
}

export type FontsKeyType = keyof typeof FONTS
