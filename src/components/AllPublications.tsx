import React from 'react';
import { Box, Button, Icon, Image, Text, VStack, HStack, Grid, Link as UILink, useColorModeValue } from '@yamada-ui/react';
import { faAnglesLeft, faBookmark, faFilePdf, faImage, faPlay, faVideo, faPersonChalkboard, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactGA from 'react-ga4';
import { publications, Publication } from '../data/publicationsData';

// Group publications by year
const groupPublicationsByYear = (publications: Publication[]) => {
  return publications.reduce((acc: Record<number, Publication[]>, publication) => {
    const { year } = publication;
    if (!acc[year]) acc[year] = [];
    acc[year].push(publication);
    return acc;
  }, {});
};

// Get icon based on link label
export const getLinkIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case 'paper': return faFilePdf;
    case 'poster': return faImage;
    case 'demo': return faPlay;
    case 'slides': return faPersonChalkboard;
    case 'video': return faVideo;
    case 'hp': return faGlobe;
    default: return faBookmark;
  }
};

// Render each publication item
const renderPublicationItem = (publication: Publication, index: number) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box key={index} bg={bg} border="1px" borderColor={borderColor} p="6" rounded="lg" shadow="sm">
      <Grid templateColumns={{ base: '2fr 4fr 1fr 1fr' }} gap={4} alignItems="start">
        {/* Image or Icon */}
        <Box display="flex" justifyContent="center" alignItems="center">
          {publication.image ? (
            <Image src={publication.image} alt={publication.title} borderRadius="lg" maxW="full" maxH="48" />
          ) : (
            <Icon as={FontAwesomeIcon} icon={publication.icon || faBookmark} boxSize="12" color="red.500" />
          )}
        </Box>

        {/* Publication Info */}
        <VStack align="start" gap={2}>
          <Text fontSize="xl" fontWeight="semibold" mb="1">{publication.title}</Text>
          <Text fontSize="sm" color={textColor} fontStyle="italic" dangerouslySetInnerHTML={{ __html: publication.authors }} />
          <Text fontSize="sm" color="gray.600">{publication.info}</Text>
          {publication.notes && (
            <Text color="gray.600" dangerouslySetInnerHTML={{ __html: publication.notes }} />
          )}
        </VStack>

        {/* Links */}
        <HStack wrap="wrap" justifyContent="center" gap={2}>
          {publication.links.map((link, idx) => (
            <Button key={idx} size="sm" colorScheme="gray" onClick={() => window.open(link.url, '_blank')}>
              <Icon as={FontAwesomeIcon} icon={getLinkIcon(link.label)} mr="2" />
              {link.label}
            </Button>
          ))}
        </HStack>

        {/* Tags */}
        <HStack wrap="wrap" justifyContent="center" gap={2}>
          {publication.tags?.map((tag, idx) => (
            <Box key={idx} px={4} py={1} borderRadius="full" bg="gray.100" color="gray.800" fontSize="sm">
              {tag}
            </Box>
          ))}
        </HStack>
      </Grid>
    </Box>
  );
};

const AllPublications: React.FC = () => {
  const groupedPublications = groupPublicationsByYear(publications);

  ReactGA.send({ hitType: 'pageview', page: '/all-publications', title: 'publications page' });

  return (
    <Box as="section" id="all-publications" py="16" px="4" bg={useColorModeValue('gray.50', 'gray.800')}>
      <Text as="h1" fontSize="3xl" fontWeight="bold" textAlign="center" mb="12">All Publications</Text>
      {Object.entries(groupedPublications).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)).map(([year, pubs]) => (
        <Box key={year} mb="12">
          <Text as="h2" fontSize="2xl" fontWeight="bold" mb="6">{year}</Text>
          <Grid gap={4}>
            {pubs.map(renderPublicationItem)}
          </Grid>
        </Box>
      ))}
      <UILink href="/" display="inline-block" mt="8">
        <Button colorScheme="gray" leftIcon={<Icon as={FontAwesomeIcon} icon={faAnglesLeft} />}>Back to Home</Button>
      </UILink>
    </Box>
  );
};

export default AllPublications;

