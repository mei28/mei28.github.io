import { Box, Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import iceImage from '../public/images/ice.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>Works</Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id='inkdrop'
              title='Inkdrop'
              thumbnail={iceImage}
            >
              A markdonw note-taking app with 100+ plugins.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id='drop'
              title='drop'
              thumbnail={iceImage}
            >
              note-taking app with 100+ plugins.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>

  )
}

export default Works;
