import React from 'react';
import { Box, Text, VStack, HStack, Progress, Button, Icon, Grid, useColorModeValue } from '@yamada-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga4';
import { skills } from '../data/skillData';

const SkillsDetail: React.FC = () => {
  ReactGA.send({ hintType: 'pageview', page: '/all-experiences', title: 'skill page' });

  return (
    <VStack as="section" id="skills-detail" py="24" px="4" bg={useColorModeValue('gray.50', 'gray.900')} align="center" gap="8">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" color={useColorModeValue('gray.800', 'white')}>
        All Skills
      </Text>

      <VStack gap={8} w="full" maxW="6xl" align="center">
        <SkillSection title="Programming Languages" type="language" />
        <SkillSection title="Frameworks" type="framework" />
        <SkillSection title="Tools" type="tool" />
      </VStack>

      <Box textAlign="center" mt="8">
        <Button as="a" href="/" colorScheme="gray" leftIcon={<FontAwesomeIcon icon={faAnglesLeft} />}>
          Back to Home
        </Button>
      </Box>
    </VStack>
  );
};

const SkillSection: React.FC<{ title: string; type: string }> = ({ title, type }) => {
  const filteredSkills = skills.filter(skill => skill.type === type);
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box w="full">
      <Text fontSize="2xl" fontWeight="bold" mb="6" color={useColorModeValue('gray.800', 'white')} textAlign="center">
        {title}
      </Text>

      <Grid templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)' }} gap={4} justifyContent="center">
        {filteredSkills.map((skill, index) => (
          <VStack
            key={index}
            bg={bg}
            border="1px"
            borderColor={borderColor}
            p="4"
            rounded="lg"
            shadow="md"
            gap={4}
            textAlign="center"
          >
            <HStack justifyContent="center" mb="4">
              {skill.icon && <FontAwesomeIcon icon={skill.icon} size="2x" className="text-blue-600" />}
              <Text fontSize="xl" fontWeight="semibold" color={textColor}>{skill.name}</Text>
            </HStack>

            {skill.description && (
              <Text color={textColor} mb="4">
                {skill.description}
              </Text>
            )}

            <Box w="full">
              <Progress value={skill.level} colorScheme="blue" rounded="full" h="2.5" bg="gray.200" mb="2" />
              <Text color={textColor}>{skill.level}%</Text>
            </Box>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsDetail;

