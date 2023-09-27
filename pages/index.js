import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoTwitter, IoLogoGithub, IoLogoX } from 'react-icons/io'
import { FaKaggle } from 'react-icons/fa'
import { SiSpeakerdeck } from 'react-icons/si'
import { GridItem } from '../components/grid-item'

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

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>Contact</Heading>
          <List>
            <ListItem>
              <Link href="https://twitter.com/_mei28_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @_mei28_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/mei28" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @mei28
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://kaggle.com/mei2828" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<FaKaggle />}
                >
                  @mei2828
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://speakerdeck.com/mei28" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<SiSpeakerdeck />}
                >
                  @mei28
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://atcoder.jp/users/mei28" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Image src='/images/ice.png' alt='speakerdeck' boxSize='1em' />}
                >
                  @mei28
                </Button>
              </Link>
            </ListItem>

          </List>

        </Section>
      </Container>

    </Layout >
  )
}

export default Page
