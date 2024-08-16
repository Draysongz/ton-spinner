import React from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ResultScreenProps {
  totalWinnings: number;
  spinResults: number[];
  onPlayAgain: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  totalWinnings,
  spinResults,
  onPlayAgain,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        bg="gray.800"
        color="white"
        p={8}
        borderRadius="lg"
        boxShadow="xl"
        maxWidth="600px"
        margin="auto"
      >
        <VStack spacing={6} align="stretch">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Heading textAlign="center" color="teal.300">
              Game Over!
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Text fontSize="2xl" textAlign="center">
              Total Winnings: ${totalWinnings}
            </Text>
          </motion.div>
          <Box overflowX="auto">
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th color="teal.300">Spin</Th>
                  <Th color="teal.300">Amount Won</Th>
                </Tr>
              </Thead>
              <Tbody>
                {spinResults.map((result, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Td>{index + 1}</Td>
                    <Td>${result}</Td>
                  </motion.tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button colorScheme="teal" onClick={onPlayAgain} width="100%">
              Play Again
            </Button>
          </motion.div>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default ResultScreen;
