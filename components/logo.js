import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import iceImage from '../public/images/ice.png'

import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  allign-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &: hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  // const footPrintImg = `/images/footprint${useColorModeValue(',', '-dark')}.png`
  const footPrintImg = iceImage
  return (
    <Link href="/">
      <LogoBox>
        <Image
          src={footPrintImg}
          alt="logo"
          width={20}
          height={20}
        />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontweight='bold'
          ml={3}
        >
          mei' s portfolio
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
