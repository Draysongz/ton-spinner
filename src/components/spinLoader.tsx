import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import SpinnerWheel from "./spin";
import LoadingScreen from "./spinLoading";

// Define the component as a React Functional Component
const SpinLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Function to handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Return JSX based on loading state
  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <Box minH="100vh" bg="gray.800" py={10}>
          <SpinnerWheel />
        </Box>
      )}
    </>
  );
};

export default SpinLoader;
