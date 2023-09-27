import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import iceImage from '../public/images/ice.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
    </Container>

    <Section delay={0.1}>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
          title="How to build a portfolio website"
          thumbnail={iceImage}
          href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
        />

        <GridItem
          title="How to build a portfolio website"
          thumbnail={iceImage}
          href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
        />
        <GridItem
          title="How to build a portfolio website"
          thumbnail={iceImage}
          href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
        />
        <GridItem
          title="How to build a portfolio website"
          thumbnail={iceImage}
          href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
        />
        <GridItem
          title="How to build a portfolio website"
          thumbnail={iceImage}
          href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
        />
      </SimpleGrid>
    </Section>
  </Layout>

)
export default Posts
