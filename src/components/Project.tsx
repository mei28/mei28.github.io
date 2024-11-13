import React from 'react';
import { Box, Text, VStack, HStack, Button, Grid, useColorModeValue, Image, Card, CardBody, CardFooter } from '@yamada-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Sections, sectionTitles } from '../sections';
import { ProjectData, projectsData } from '../data/projectsData';

const ProjectItem: React.FC<ProjectData> = ({ imgSrc, imgAlt, title, description, links }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const isExternalLink = (url: string) => url.startsWith('http://') || url.startsWith('https://');

  return (
    <Card bg={cardBg} shadow="md" rounded="xl" border="1px" borderColor={borderColor} overflow="hidden">
      {imgSrc && (
        <Image src={imgSrc} alt={imgAlt} w="100%" h="auto" objectFit="cover" />
      )}
      <CardBody p="6">
        <Text fontSize="xl" fontWeight="semibold" color={textColor} mb="2">
          {title}
        </Text>
        <Text color={useColorModeValue('gray.600', 'gray.400')} mb="4">{description}</Text>
      </CardBody>
      <CardFooter p="6">
        <HStack gap={2} wrap="wrap">
          {links.map((link, index) => (
            <Button
              key={index}
              as="a"
              href={link.url}
              target={isExternalLink(link.url) ? '_blank' : '_self'}
              variant="outline"
              colorScheme="gray"
              leftIcon={link.icon && <FontAwesomeIcon icon={link.icon} />}
            >
              {link.label}
            </Button>
          ))}
        </HStack>
      </CardFooter>
    </Card>
  );
};

const ProjectList: React.FC = () => {
  return (
    <Box as="section" id={Sections.Projects} py="16" px="4" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Text fontSize="lg" textAlign="center" color={useColorModeValue('gray.700', 'gray.300')} mb="2">
        Browse My Recent
      </Text>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb="12" color={useColorModeValue('gray.800', 'white')}>
        {sectionTitles[Sections.Projects]}
      </Text>

      <Grid templateColumns={{ md: '1fr', base: 'repeat(2, 1fr)' }} gap={6} mx="auto" maxW="6xl">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
            title={project.title}
            description={project.description}
            links={project.links}
          />
        ))}
      </Grid>

      <Box textAlign="center" mt="8">
        <Button as="a" href="/#/all-projects" colorScheme="gray" rightIcon={<FontAwesomeIcon icon={faAnglesRight} />}>
          View All Projects
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectList;

