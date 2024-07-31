import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'

const DefaultBtn = styled.button`
  border-radius: 0.5rem;
  width: 38.6rem;
  height: 5.2rem;
  text-align: center;
`

const SubmitBtn = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 10rem;
  background-color: var(--color-black);
  color: var(--color-white);
  margin-left: 1.5rem;
  ${FONTS.body5}
`
const Cubic = styled(DefaultBtn)`
  color: var(--color-yellow-100);
  background-color: var(--color-green-400);
  height: 4rem;
`
export { DefaultBtn, Cubic, SubmitBtn }
