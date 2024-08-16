import React from "react";
import { Box, VStack, Text, Progress, Image, Center } from "@chakra-ui/react";

const LoadingScreen: React.FC = () => {
  return (
    <Box
      bg="#0A182A"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={8}>
        <Box textAlign="center">
          <Center>
            <Image src="/ColorfulChunks.png" alt="Trophy" />
          </Center>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="cyan.400"
            textTransform="uppercase"
          >
            Ton
          </Text>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            color="cyan.400"
            textTransform="uppercase"
          >
            Spinner
          </Text>
        </Box>
        <Box width="80%" maxWidth="300px">
          <Progress size="sm" colorScheme="cyan" isIndeterminate bg="red.500" />
        </Box>
      </VStack>
    </Box>
  );
};

export default LoadingScreen;
