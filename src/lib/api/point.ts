import { Apis } from './axios'
import PATH from './constant'

function subtractPoint(memberId: number) {
  return Apis.default.DELETE(`${PATH.POINTS_SUBTRACT}?memberId=${memberId}`)
}

export { subtractPoint }
