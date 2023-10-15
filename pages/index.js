import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon, UnorderedList } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoTwitter, IoLogoGithub, IoLogoX } from 'react-icons/io'
import { FaKaggle } from 'react-icons/fa'
import { SiSpeakerdeck } from 'react-icons/si'
import { GridItem } from '../components/grid-item'
import Education from '../components/education'

import Publications from '../pages/publications'


const Page = () => {
  return (
    <Layout>
      <Container>

        <Box display={{ base: 'block', md: 'flex' }} alignItems='center'>
          <Box flexShrink={0} mb={{ base: 4, md: 0 }} mr={{ md: 6 }} align='center'>
            <Image
              borderColor='whiteAlpha.800'
              boarderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              borderRadius='full'
              src='/images/profile.jpeg'
              alt='selfy'
            />
          </Box>

          <Box>
            <Heading as='h2' variant="page-title">Profile</Heading>
            <UnorderedList m={0} ml="1" styleType="none">
              <ListItem mb={1}>東京大学 総合文化研究科 広域科学専攻 広域システム科学系 博士後期課程 1年</ListItem>
              <ListItem mb={1}>東京大学 馬場研究室</ListItem>
              <ListItem mb={1}>mail: mingzhe-yang [at] g.ecc.u-tokyo.ac.jp</ListItem>
            </UnorderedList>
          </Box>

        </Box>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>Education</Heading>
          <Education />
        </Section>


        <Section delay={0.1}>
          <Publications />
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">Work</Heading>
          <Paragraph>
            This is a paragraph {' '}
            <Link
              as={NextLink}
              href={'/works/inkdrop'}
            >main</Link>
          </Paragraph>
          who
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
          <Heading as='h3' variant='section-title'>Accounts</Heading>
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
