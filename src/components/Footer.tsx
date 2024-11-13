import React, { useEffect, useState } from 'react';
import { Box, Text } from '@yamada-ui/react';

const Footer: React.FC = () => {
  const [thisYear] = useState<number>(new Date().getFullYear());

  return (
    <Box as="footer" h={{ base: '64', md: '56', lg: '52', xl: '48' }} mx={{ base: '4', xl: '2.5' }} textAlign="center">
      <Text fontSize={{ base: 'base', sm: 'sm', md: 'xs', lg: 'base', xl: 'sm' }}>
        &copy; {thisYear} Mingzhe Yang. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;

