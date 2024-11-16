import React from 'react';
import { Box, Text, Flex, Link as UILink, useColorModeValue, Icon } from '@yamada-ui/react';
import { Mail, Twitter, X, Linkedin } from '@yamada-ui/lucide';

interface ContactInfo {
  icon: any;
  link?: string;
  text: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    text: 'mingzhe-yang [at] g.ecc.u-tokyo.ac.jp'
  },
  {
    icon: Twitter,
    link: 'https://x.com/_mei28_',
    text: 'Twitter (JP)'
  },
  {
    icon: X,
    link: 'https://x.com/_me_i28',
    text: 'Twitter (EN)'
  },
  {
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/mingzhe-yang-3669242bb/',
    text: 'LinkedIn'
  }
];

const renderContactInfo = (contactInfo: ContactInfo[]): JSX.Element[] => {
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const hoverColor = useColorModeValue('gray.500', 'gray.400');

  return contactInfo.map((info, index) => (
    <Flex key={index} align="center" justify="center" gap="2" p="4">
      <Icon as={info.icon} boxSize="6" />
      {info.link ? (
        <UILink href={info.link} color={textColor} _hover={{ color: hoverColor }} isExternal>
          {info.text}
        </UILink>
      ) : (
        <Text color={textColor} lineClamp={2}>{info.text}</Text>
      )}
    </Flex >
  ));
};

const Contact: React.FC = () => {
  const bg = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.500', 'gray.600');

  return (
    <Box
      as="section"
      id="contact"
      textAlign="center"
      my="8"
      mx={{ base: '4', md: '8', lg: '16', xl: '24' }} // Adjusted responsive margin
    >
      <Text fontSize="lg" mb="2">
        Get in Touch
      </Text>
      <Text as="h1" fontSize="3xl" fontWeight="bold" mb="6">
        Contact Me
      </Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        align="center"
        border="1px solid"
        borderColor={borderColor}
        bg={bg}
        rounded="2xl"
        p="4"
      >
        {renderContactInfo(contactInfo)}
      </Flex>
    </Box>
  );
};

export default Contact;
