import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name='viewpoint' content="width=device-width, initial-scale=1" />
        <meta name="description" content="mei's portfolio" />
        <meta name="author" content="Mingzhe Yang" />
        <meta name="author" content="mei" />
        <link rel="shortcut icon" href="/images/ice.png" type="image/x-icon" />
        <meta name="twitter:title" content="Takuya Matsuyama" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_mei28_" />
        <meta name="twitter:creator" content="@_mei28_" />
        // <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Mingzhe Yang" />
        <meta name="og:title" content="Mingzhe Yang" />
        <meta property="og:type" content="website" />
        // <meta property="og:image" content="" />
        <title> mei's portfolio</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
