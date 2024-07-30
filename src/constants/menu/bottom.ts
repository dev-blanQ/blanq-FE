import { BottomMenuInfoProps } from '@/types'

const DEFAULT_SIZE = {
  width: 18,
  height: 18,
}

export const BOTTOM_MENU_INFO: BottomMenuInfoProps[] = [
  {
    link: '/blanQ',
    image: {
      active: '/assets/menu/active/blanQ.png',
      inactive: '/assets/menu/inactive/blanQ.png',
      alt: 'blanQ',
      ...DEFAULT_SIZE,
    },
  },
  {
    link: '/chemi',
    image: {
      active: '/assets/menu/active/chemi.png',
      inactive: '/assets/menu/inactive/chemi.png',
      alt: 'chemi',
      ...DEFAULT_SIZE,
    },
  },
  {
    link: '/my',
    image: {
      active: '/assets/menu/active/my.png',
      inactive: '/assets/menu/inactive/my.png',
      alt: 'my',
      ...DEFAULT_SIZE,
    },
  },
]
