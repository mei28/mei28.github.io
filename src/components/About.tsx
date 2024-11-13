import React from 'react';
import { Box, Button, Icon, Image, VStack, HStack, Text, Grid, GridItem, useColorModeValue } from '@yamada-ui/react';
import { Search, Users, ArrowRight } from '@yamada-ui/lucide';

interface Education {
  degree: string;
  period: string;
  institution: string;
}

interface Interest {
  item: string;
}

const educationDetails: Education[] = [
  {
    degree: 'B.Sc. in Information Engineering',
    period: '2016 - 2020',
    institution: 'University of Tsukuba'
  },
  {
    degree: 'M.Sc. in Engineering',
    period: '2020 - 2022',
    institution: 'University of Tsukuba'
  },
  {
    degree: 'Ph.D. in Arts and Sciences',
    period: '2022 - now',
    institution: 'The University of Tokyo'
  }
];

const interests: Interest[] = [
  { item: 'Human-AI Collaboration' },
  { item: 'Explainable AI / Trust AI' },
  { item: 'Human-Computer Interaction' }
];

const About: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.400', 'gray.600');
  const subtitleColor = useColorModeValue('gray.500', 'gray.300');
  const titleColor = useColorModeValue('gray.800', 'white');
  const buttonBg = useColorModeValue('gray.500', 'gray.700');
  const buttonHoverBg = useColorModeValue('gray.700', 'gray.500');
  const boxMinHeight = "xl";

  return (
    <Box as="section" id="about" py="16" px="8" textAlign="center">
      <Text fontSize="lg" color={subtitleColor} mb="2">
        Get To Know More
      </Text>
      <Text as="h1" fontSize="3xl" fontWeight="bold" color={titleColor} mb="12">
        About Me
      </Text>
      <Grid
        w="full"
        templateColumns={{ base: '1fr 2fr', lg: '1fr' }}
        gap="8"
        alignItems="start"
      >
        {/* Profile Image */}
        <GridItem colSpan={1} w="full" h="full" display="flex" justifyContent="center">
          <Image
            src="/assets/about/about-pic.jpg"
            alt="Profile picture"
            borderRadius="2xl"
            objectFit="cover"
            w="full"
            maxW="sm"
          />
        </GridItem>

        {/* Text Content */}
        <GridItem colSpan={1} w="full" h="full">
          <HStack gap="8" align="start">
            {/* Interests Card */}
            <VStack
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              borderRadius="2xl"
              p="6"
              gap="4"
              textAlign="center"
              w="full"
              minH={boxMinHeight}
            >
              <Icon as={Search} boxSize="6" color={titleColor} />
              <Text fontSize="xl" fontWeight="semibold" color={titleColor}>
                Interests
              </Text>
              <VStack align="start" gap="4" w="full">
                {interests.map((interest, index) => (
                  <Text key={index} fontWeight="semibold">
                    {interest.item}
                  </Text>
                ))}
              </VStack>
            </VStack>

            {/* Education Card */}
            <VStack
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
              borderRadius="2xl"
              p="6"
              gap="4"
              textAlign="center"
              w="full"
              minH={boxMinHeight}
            >
              <Icon as={Users} boxSize="6" color={titleColor} />
              <Text fontSize="xl" fontWeight="semibold" color={titleColor}>
                Education
              </Text>
              <VStack align="start" gap="4" w="full">
                {educationDetails.map((edu, index) => (
                  <Box key={index} textAlign="left">
                    <Text fontWeight="semibold">{edu.degree}</Text>
                    <Text color={subtitleColor} fontSize="sm">
                      @{edu.institution}, {edu.period}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </VStack>
          </HStack>
        </GridItem>
      </Grid>

      <Text color={titleColor} mt="8">
        I am a Ph.D. student at the University of Tokyo in Japan.
      </Text>

      <Button
        as="a"
        href="/#/all-about"
        bg={buttonBg}
        color="white"
        _hover={{ bg: buttonHoverBg }}
        mt="8"
        size="lg"
        rightIcon={<Icon as={ArrowRight} />}
      >
        View My Profiles!
      </Button>
    </Box>
  );
};

export default About;

