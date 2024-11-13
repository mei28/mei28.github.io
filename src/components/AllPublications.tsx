import React from 'react';
import { Box, Button, Icon, Image, Text, VStack, HStack, Grid, Link as UILink, Tag, useColorModeValue } from '@yamada-ui/react';
import { Bookmark, ArrowLeft, FileText, Image as LucideImage, Play, Video, Globe, Presentation } from '@yamada-ui/lucide';
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
    case 'paper': return FileText;
    case 'poster': return LucideImage;
    case 'demo': return Play;
    case 'slides': return Presentation;
    case 'video': return Video;
    case 'hp': return Globe;
    default: return Bookmark;
  }
};

// Get tag color scheme
const getTagColorScheme = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'first author': return 'emerald';
    case 'peer-reviewed': return 'blue';
    case 'sports analytics': return 'purple';
    default: return 'gray';
  }
};

// Render each publication item
const renderPublicationItem = (publication: Publication, index: number) => {
  const bg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.300', 'gray.500');
  const titleColor = useColorModeValue('gray.800', 'white');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const iconColor = useColorModeValue('red.500', 'red.300');

  return (
    <Box key={index} bg={bg} border="1px" borderColor={borderColor} p="6" rounded="lg" shadow="sm">
      <Grid templateColumns={{ base: '1fr 2fr 1fr 1fr' }} gap={4} alignItems="start">
        {/* Image or Icon */}
        <Box display="flex" justifyContent="center" alignItems="center">
          {publication.image ? (
            <Image src={publication.image} alt={publication.title} borderRadius="lg" maxW="full" maxH="48" />
          ) : (
            <Icon as={Bookmark} boxSize="24" color={iconColor} />
          )}
        </Box>

        {/* Publication Info */}
        <VStack align="start" gap={2}>
          <Text fontSize="xl" fontWeight="semibold" color={titleColor} mb="1">{publication.title}</Text>
          <Text fontSize="sm" color={textColor} fontStyle="italic" dangerouslySetInnerHTML={{ __html: publication.authors }} />
          <Text fontSize="sm" color={textColor}>{publication.info}</Text>
          {publication.notes && (
            <Text color={textColor} dangerouslySetInnerHTML={{ __html: publication.notes }} />
          )}
        </VStack>

        {/* Links */}
        <HStack wrap="wrap" justifyContent="center" gap={2}>
          {publication.links.map((link, idx) => (
            <Button key={idx} size="sm" colorScheme="gray" onClick={() => window.open(link.url, '_blank')}>
              <Icon as={getLinkIcon(link.label)} mr="2" color={iconColor} />
              {link.label}
            </Button>
          ))}
        </HStack>

        {/* Tags */}
        <HStack wrap="wrap" justifyContent="center" gap={2}>
          {publication.tags?.map((tag, idx) => (
            <Tag key={idx} px={4} py={1} borderRadius="full" colorScheme={getTagColorScheme(tag)} fontSize="sm">
              {tag}
            </Tag>
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
    <Box as="section" id="all-publications" py="24" px="4" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Text as="h1" fontSize="3xl" fontWeight="bold" textAlign="center" mb="12" color={useColorModeValue('gray.800', 'white')}>
        All Publications
      </Text>
      {Object.entries(groupedPublications).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)).map(([year, pubs]) => (
        <Box key={year} mb="12">
          <Text as="h2" fontSize="2xl" fontWeight="bold" mb="6" color={useColorModeValue('gray.800', 'white')}>
            {year}
          </Text>
          <Grid gap={4}>
            {pubs.map(renderPublicationItem)}
          </Grid>
        </Box>
      ))}
      <UILink href="/" display="inline-block" mt="8">
        <Button colorScheme="gray" leftIcon={<Icon as={ArrowLeft} />}>Back to Home</Button>
      </UILink>
    </Box>
  );
};

export default AllPublications;

