import React from 'react';
import { Box, Button, Icon, Image, VStack, HStack, Text, useColorModeValue, Flex } from '@yamada-ui/react';
import { Github, Twitter, Linkedin, FileText, Mail, GraduationCap } from '@yamada-ui/lucide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';

interface Account {
  icon: React.ReactNode;
  link: string;
}

const accounts: Account[] = [
  { icon: <Icon as={Github} boxSize="8" />, link: 'https://github.com/mei28' },
  { icon: <Icon as={Twitter} boxSize="8" />, link: 'https://x.com/_mei28_' },
  { icon: <Icon as={GraduationCap} boxSize="8" />, link: 'https://scholar.google.com/citations?user=0PIblkcAAAAJ' },
  { icon: <FontAwesomeIcon icon={faKaggle} size="2x" />, link: 'https://www.kaggle.com/mei2828' },
  { icon: <Icon as={FileText} boxSize="8" />, link: 'https://speakerdeck.com/mei28' },
  { icon: <Icon as={Linkedin} boxSize="8" />, link: 'https://linkedin.com/' },
];

const renderAccountIcons = (accounts: Account[]): JSX.Element[] => {
  return accounts.map((account, index) => (
    <Box as="a" href={account.link} target="_blank" key={index} cursor="pointer">
      {account.icon}
    </Box>
  ));
};

const Profile: React.FC = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('black', 'white');
  const buttonBg = useColorModeValue('black', 'white');
  const buttonHoverBg = useColorModeValue('gray.800', 'gray.300');
  const buttonTextColor = useColorModeValue('white', 'black');

  return (
    <Box as="section" id="profile" bg={bg} minH="50vh" display="flex" justifyContent="center" alignItems="center" py="24">
      <Flex direction={{ base: 'row', md: 'column' }} align="center" gap="10">
        {/* Profile Image */}
        <Image
          src="/assets/profile.png"
          alt="profile"
          boxSize={{ base: '64', md: '80' }}
          borderRadius="full"
          objectFit="cover"
        />

        {/* Profile Text and Buttons */}
        <VStack gap="6" align={{ base: 'center', md: 'start' }} textAlign={{ base: 'center', md: 'left' }}>
          <Box>
            <Text fontSize="lg" fontWeight="semibold">Hello, I'm</Text>
            <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold" color={textColor}>Mingzhe Yang</Text>
            <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="semibold" my="4">
              Ph.D. student <br />@The University of Tokyo
            </Text>
          </Box>
          <HStack gap="4" justify="center">
            <Button
              variant="outline"
              colorScheme="black"
              leftIcon={<Icon as={FileText} />}
              onClick={() => window.open('/path/to/resume.pdf', '_blank')}
            >
              Download CV
            </Button>
            <Button
              bg={buttonBg}
              color={buttonTextColor}
              _hover={{ bg: buttonHoverBg }}
              leftIcon={<Icon as={Mail} />}
              onClick={() => {
                const section = 'contact';
                if (location.pathname === '/') {
                  const element = document.getElementById(section);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  window.location.href = `/#${section}`;
                }
              }}
            >
              Contact Info
            </Button>
          </HStack>
          <HStack gap="4" mt="4" justify="center">
            {renderAccountIcons(accounts)}
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Profile;

