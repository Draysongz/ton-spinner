import React, { useState, useEffect } from "react";
import { Box, VStack, Text, Progress } from "@chakra-ui/react";

// Define the props interface
interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          onLoadingComplete();
          return 100;
        }
        const newProgress = oldProgress + 10;
        return Math.min(newProgress, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [onLoadingComplete]);

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.800"
    >
      <VStack spacing={6} width="80%" maxWidth="400px">
        <Text fontSize="4xl" fontWeight="bold" color="teal.300">
          TON SPINNER
        </Text>
        <Progress
          value={progress}
          width="100%"
          colorScheme="teal"
          height="4px"
          hasStripe
          isAnimated
        />
        <Text color="white">Loading... {progress}%</Text>
      </VStack>
    </Box>
  );
};

export default LoadingScreen;
