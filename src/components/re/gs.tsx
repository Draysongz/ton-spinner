import React, { useState } from "react";
import { Box, VStack, Text, Button, HStack, Heading } from "@chakra-ui/react";
import { Wheel } from "react-custom-roulette";
import { motion } from "framer-motion";

interface GameScreenProps {
  onSpinComplete: (result: string) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ onSpinComplete }) => {
  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);
  const [spinsLeft, setSpinsLeft] = useState<number>(1);

  const data = [
    { option: "1" },
    { option: "2" },
    { option: "3" },
    { option: "4" },
    { option: "5" },
    { option: "6" },
    { option: "7" },
    { option: "8" },
    { option: "9" },
    { option: "10" },
    { option: "11" },
    { option: "12" },
  ];

  const handleSpinClick = () => {
    if (spinsLeft > 0) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setSpinsLeft(spinsLeft - 1);
    }
  };

  const handleSpinStop = () => {
    setMustSpin(false);
    onSpinComplete(data[prizeNumber].option);
  };

  return (
    <Box bg="#0A182A" height="100vh" p={4}>
      <VStack spacing={8} align="center">
        <VStack mt={5}>
          <Heading> Spin the Wheel</Heading>
          <Text color="white" fontSize="md">
            Tap on the wheel or press
          </Text>
          <Text color="white" fontSize="md">
            "Spin" to earn
          </Text>
        </VStack>

        <Box position="relative" width="300px" height="300px">
          <motion.div
            animate={mustSpin ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={handleSpinStop}
              outerBorderColor="#FCC912"
              outerBorderWidth={10}
              innerRadius={10}
              innerBorderWidth={10}
              innerBorderColor="orange"
              radiusLineColor="#4FD1C5"
              radiusLineWidth={1}
              textColors={["#ffffff"]}
              fontSize={30}
              fontWeight={"bold"}
              backgroundColors={["#2C5282", "#006F67", "#3182CE", "#FC320F"]}
            />
          </motion.div>
        </Box>
        <Text
          color="black"
          fontSize="md"
          fontWeight={"bold"}
          bg={"white"}
          rounded={"2xl"}
          p={2}
        >
          {spinsLeft} spin left
        </Text>
        <HStack spacing={4}>
          <Button bg="red" color={"#fff"} onClick={() => setSpinsLeft(1)}>
            Reset
          </Button>
          <Button
            bg="green"
            color={"#fff"}
            onClick={handleSpinClick}
            isDisabled={spinsLeft === 0}
          >
            Spin
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default GameScreen;
