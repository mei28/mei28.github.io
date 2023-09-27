import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
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
          <Image
            borderColor='whiteAlpha.800'
            boarderWidth={2}
            borderStyle='solid'
            maxWidth='100px'
            display='inline-block'
            borderRadius='full'
            src='/images/ice.png'
            alt='selfy'
          />
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">Work</Heading>
          <Paragraph>
            This is a paragraph {' '}
            <Link
              as={NextLink}
              href={'/works/inkdrop'}
            >main</Link>
          </Paragraph>
          <Box align='center' my={4}>
            <Link
              as={NextLink}
              href={'/works'}
            ><Button rightIcon={<ChevronRightIcon />} colorScheme='teal'> works </Button></Link>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">Bio</Heading>
          <BioSection> <BioYear>1998</BioYear> born</BioSection>
          <BioSection> <BioYear>2016</BioYear> graduate highschool</BioSection>
          <BioSection> <BioYear>2020</BioYear> graduate University of Tsukuba</BioSection>
          <BioSection> <BioYear>2022</BioYear> graduate University of Tsukuba</BioSection>
          <BioSection> <BioYear>2022</BioYear> enter The University of Tokyo</BioSection>
        </Section>

      </Container>
    </Layout>
  )
}

export default Page
