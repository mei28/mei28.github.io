import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from "../../components/paragraph"
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title> Inkdrop <Badge>2016</Badge></Title>
        <P>
          A cross-platform Markdown note-taking app with 1 million downloads.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>website</Meta>
            <Link href="https://www.inkdrop.info/" > https://www.inkdrop.info <ExternalLinkIcon mx='2px' /></Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>macOS, Windows, Linux, iOS, Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS</span>
          </ListItem>
        </List>

        <WorkImage src='/images/ice.png' alt='inkdrop' />
      </Container>
    </Layout>
  )
}

export default Work
