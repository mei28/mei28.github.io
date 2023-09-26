import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"

const Page = () => {
  return (
    <Container>
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a Ph.D. student in Janpan!
      </Box>
      <Box display={{ md: 'flex' }}>

        <Box flexGrow={1}>
          <Heading as='h2' variant="page-title">mei</Heading>
        </Box>
        <p>mei</p>
      </Box>
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        align='center'
      >
        <Image borderColor='whiteAlpha.800' boarderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/ice.png' alt='selfy' />
      </Box>
    </Container>
  )
}

export default Page
