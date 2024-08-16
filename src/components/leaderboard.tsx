import React from "react";
import {
  Box,
  VStack,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react";

interface Score {
  player: string;
  score: number;
}

interface LeaderboardProps {
  scores: Score[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
  return (
    <Box bg="gray.700" p={4} borderRadius="md" maxWidth="400px" width="100%">
      <VStack spacing={4}>
        <Heading size="md" color="teal.300">
          Leaderboard
        </Heading>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th color="white">Rank</Th>
              <Th color="white">Player</Th>
              <Th color="white" isNumeric>
                Score
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {scores.map((score, index) => (
              <Tr key={index}>
                <Td color="white">{index + 1}</Td>
                <Td color="white">{score.player}</Td>
                <Td color="white" isNumeric>
                  ${score.score}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {scores.length === 0 && (
          <Text color="gray.400">No scores yet. Be the first to play!</Text>
        )}
      </VStack>
    </Box>
  );
};

export default Leaderboard;
