import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { BOTTOM_MENU_INFO } from '@/constants'
import { BottomMenuInfoProps } from '@/types'
import { TabsWrapper, MenuWrapper, Text } from './styles'

const BottomMenu = () => {
  const { pathname } = useRouter()
  // console.log(pathname)
  return (
    <TabsWrapper>
      {BOTTOM_MENU_INFO.map(
        (
          {
            image: { active, inactive, alt, width, height },
            link,
          }: BottomMenuInfoProps,
          idx,
        ) => (
          <Link href={link} key={idx}>
            <MenuWrapper>
              <Image
                src={link === pathname ? active : inactive}
                alt={alt}
                width={width}
                height={height}
              />
              <Text isActive={link === pathname ? true : false}>{alt}</Text>
            </MenuWrapper>
          </Link>
        ),
      )}
    </TabsWrapper>
  )
}

export default BottomMenu
