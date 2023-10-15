import React from 'react';
import { Box, Text, Link, useColorModeValue } from "@chakra-ui/react";

const PaperComponent = ({ paper }) => {
  const borderColor = useColorModeValue("gray.600", "gray.200");
  return (
    <Box border="1px" borderColor={borderColor} p={4} borderRadius="md" my={4}>
      <Text fontWeight="bold" fontSize="xl" mb={2}>{paper.title}</Text>
      <Text mb={2}>{paper.authors}</Text>
      <Text fontStyle="italic" mb={4}>{paper.conference}</Text>
      {paper.links && (
        <Box>
          {Object.entries(paper.links).map(([key, value]) => (
            <Link href={value} isExternal mx={1} key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)} {/* Capitalize the first letter */}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PaperComponent;
