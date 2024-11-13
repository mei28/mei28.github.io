import React from 'react';
import { Box, Text, VStack, HStack, Progress, Button, Icon, Grid, useColorModeValue, Link as UILink } from '@yamada-ui/react';
import { ArrowRight } from '@yamada-ui/lucide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../data/skillData';

const SkillsOverview: React.FC = () => {
  const mainSkills = skills.filter(skill => skill.isHome);
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const buttonBg = useColorModeValue('gray.500', 'gray.700');
  const buttonHoverBg = useColorModeValue('gray.700', 'gray.500');

  return (
    <Box as="section" id="experience" py="16" px="4" textAlign='center'>
      <Text fontSize="lg" color={textColor} mb="2" textAlign="center">Explore My</Text>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb="8" color={useColorModeValue('gray.800', 'white')}>
        Experience
      </Text>

      <Grid templateColumns={{ md: 'repeat(2, 1fr)', base: 'repeat(3, 1fr)' }} gap={6}>
        {mainSkills.map((skill, index) => (
          <VStack
            key={index}
            bg={bg}
            border="1px"
            borderColor={borderColor}
            p="6"
            rounded="lg"
            shadow="md"
            textAlign="center"
          >
            <HStack gap={2} mb="4" alignItems="center" justifyContent="center">
              {skill.icon && <FontAwesomeIcon icon={skill.icon} size="2x" className="text-blue-600" />}
              <Text fontSize="xl" fontWeight="semibold">{skill.name}</Text>
            </HStack>

            <Progress
              value={skill.level}
              colorScheme={'blue'}
              rounded="full"
              h="2.5"
            />
            <Text color={textColor} mt="2">{skill.level}%</Text>
          </VStack>
        ))}
      </Grid>

      <UILink href="/#/all-experiences" mt="10" display="inline-block" >
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
          View All Experiences
        </Button>
      </UILink>
    </Box>
  );
};

export default SkillsOverview;

