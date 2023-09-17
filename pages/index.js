import { Container, Box, Heading } from "@chakra-ui/react"
const Page = () => {
  return (
    <Container>
      <Box borderRadius='lg' bg='red' p={3} mb={6} align="center">
        Hello, I&apos;m a Ph.D. student in Janpan!
      </Box>
      <Box display={{ md: 'flex' }}>

        <Box flexGrow={1}>
          <Heading as='h2' variant="page-title">mei</Heading>
        </Box>
      </Box>
      <p>mei</p>
    </Container>
  )
}

export default Page
