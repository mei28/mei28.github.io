import React from 'react';
import { Box, Button, Icon, Image, Text, VStack, HStack, Grid, Card, CardBody, CardHeader, CardFooter, useColorModeValue, Link as UILink } from '@yamada-ui/react';
import { Bookmark, ArrowRight } from '@yamada-ui/lucide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { publications, Publication } from '../data/publicationsData';
import { getLinkIcon } from '../components/AllPublications';

const renderPublicationItem = (publication: Publication, index: number): JSX.Element => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
  const iconColor = useColorModeValue('red.500', 'red.300');

  return (
    <Card
      key={index}
      bg={bg}
      border="1px"
      borderColor={borderColor}
      rounded="lg"
      shadow="sm"
      transition="all 0.3s"
      _hover={{ shadow: 'md' }}
    >
      <CardHeader>
        <HStack align="start" gap="4">
          <Box w="32" h="32" flexShrink={0}> {/* Adjusted size to increase the image area */}
            {publication.image ? (
              <Image
                src={publication.image}
                alt={publication.title}
                rounded="lg"
                w="full"
                h="full"
                objectFit="cover"
              />
            ) : (
              <Icon
                as={publication.icon ? publication.icon : Bookmark}
                boxSize="24" // Increased icon size to match larger image area
                color={iconColor}
              />
            )}
          </Box>

          <CardBody>
            <VStack align="start" flex="1">
              <Text fontSize="xl" fontWeight="semibold" color={textColor} mb="1">
                {publication.title}
              </Text>
              <Text fontSize="sm" color={secondaryTextColor} fontStyle="italic" dangerouslySetInnerHTML={{ __html: publication.authors }} />
              <Text fontSize="sm" color={secondaryTextColor}>
                {publication.info}
              </Text>
            </VStack>
          </CardBody>
        </HStack>
      </CardHeader>


      <CardFooter>
        <HStack wrap="wrap" gap="2">
          {publication.links.map((link, idx) => (
            <Button
              key={idx}
              size="sm"
              bg="gray.200"
              _hover={{ bg: 'gray.300' }}
              leftIcon={<FontAwesomeIcon icon={getLinkIcon(link.label)} />}
              onClick={() => window.open(link.url, '_blank')}
              variant="ghost"
              colorScheme="gray"
            >
              {link.label}
            </Button>
          ))}
        </HStack>
      </CardFooter>
    </Card>
  );
};
const Publications: React.FC = () => {
  const pickupPublications = publications.filter(pub => pub.pickup);
  const bg = useColorModeValue('gray.50', 'gray.800');
  const buttonBg = useColorModeValue('gray.500', 'gray.700');
  const buttonHoverBg = useColorModeValue('gray.700', 'gray.500');

  return (
    <Box as="section" id="publications" bg={bg} py="16" px="6" textAlign="center">
      <Text fontSize="lg" color="gray.600" mb="2">
        Watch My
      </Text>
      <Text as="h1" fontSize="3xl" fontWeight="bold" mb="10">
        Publications
      </Text>
      {/* Responsive Grid for Publications */}
      <Grid
        templateColumns={{ base: '1fr 1fr', md: '1fr' }}
        gap="6"
      >
        {pickupPublications.map(renderPublicationItem)}
      </Grid>
      <UILink href="/#/all-publications" mt="10" display="inline-block">
        <Button
          bg={buttonBg}
          color="white"
          _hover={{ bg: buttonHoverBg }}
          size="lg"
          rightIcon={<Icon as={ArrowRight} />}
          rounded="lg"
          shadow="md"
          transition="all 0.3s"
        >
          View All Publications
        </Button>
      </UILink>
    </Box>
  );
};

export default Publications;

