import React, { useEffect, useState } from "react";
import { VStack, Text, Button, HStack, Heading } from "@chakra-ui/react";
import { Wheel } from "react-custom-roulette";
import { motion } from "framer-motion";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "../../hooks/useTonConnect";
import { useTonSpinner } from "../../hooks/useTonSpinner";


interface GameScreenProps {
  onSpinComplete: (result: string) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ onSpinComplete }) => {
  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number >(0);
   const [spinsLeft, setSpinsLeft] = useState<number | undefined>(undefined);

  const { connected, userAddress } = useTonConnect();
  const { Deposit, spinLeft, deductSpin } = useTonSpinner();

  const buySpin = async () => {
    if (!connected) return;
    await Deposit();
    // setSpinsLeft(1);
  };

  useEffect(()=>{
   if(spinLeft != 0){
     console.log(spinLeft);
    setSpinsLeft(spinLeft)
   }

  }, [spinLeft, userAddress])
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
    if (connected && spinsLeft && spinsLeft > 0) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      deductSpin()
      // setSpinsLeft(spinsLeft - 1);
    }
  };

  const handleSpinStop = () => {
    setMustSpin(false);
    onSpinComplete(data[prizeNumber].option);
  };

  return (
    <VStack bg="#0A182A" height="auto" p={4} spacing={10} align="center">
      <TonConnectButton />
      <VStack mt={5} color={"white"}>
        <Text
          color="black"
          fontSize="md"
          fontWeight={"bold"}
          bg={"white"}
          rounded={"2xl"}
          p={2}
          onClick={buySpin}
        >
          {spinsLeft && spinsLeft >= 1 ? `${spinsLeft} spin left` : "Buy one spin"}
        </Text>
        <Heading>Spin the Wheel</Heading>
        <Text fontSize="md">Tap on the wheel or press</Text>
        <Text fontSize="md">"Spin" to earn</Text>
      </VStack>
      <VStack position="relative" width="auto" height="auto">
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
            perpendicularText={true}
            textDistance={70}
            textColors={["#ffffff"]}
            fontSize={30}
            fontWeight={"bold"}
            backgroundColors={["#006F67", "#FC320F"]}
          />
        </motion.div>
      </VStack>
      <HStack spacing={4} my={10}>
        <Button bg="red" color={"#fff"} onClick={() => setSpinsLeft(1)}>
          Reset
        </Button>
        <Button
          bg="green"
          color={"#fff"}
          onClick={handleSpinClick}
          isDisabled={!connected || spinsLeft === 0}
        >
          Spin
        </Button>
      </HStack>
    </VStack>
  );
};

export default GameScreen;
