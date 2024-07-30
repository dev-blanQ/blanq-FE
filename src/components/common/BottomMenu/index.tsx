import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { BOTTOM_MENU_INFO } from '@/constants'
import { BottomMenuInfoProps } from '@/types'

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
          <Link href={link}>
            <MenuWrapper>
              <Image
                src={link === pathname ? active : inactive}
                alt={alt}
                width={width}
                height={height}
              />
              <Text>{alt}</Text>
            </MenuWrapper>
          </Link>
        ),
      )}
    </TabsWrapper>
  )
}

export default BottomMenu

const TabsWrapper = styled.div`
  /*position: fixed;*/
  bottom: 0;
  width: inherit;

  background-color: var(--color-black);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1.5rem 0;
  border-radius: 1.5rem;
`
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`
const Text = styled.p`
  color: var(--color-gray-100);
`
