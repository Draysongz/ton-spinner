import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  VStack,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  prize: number;
}

const ResultModal: React.FC<ResultModalProps> = ({
  isOpen,
  onClose,
  prize,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"sm"}>
      <ModalOverlay />
      <ModalContent bg="#CC1F68" color="white" borderRadius="md">
        <ModalBody>
          <VStack spacing={4} py={8}>
            <Text fontSize="3xl" fontWeight="bold">
              Win!
            </Text>
            <Image src="/trophy3.png" alt="Trophy" />
            <Text fontSize="xl" fontWeight={"bold"}>
              You get ${prize}
            </Text>
            <Button colorScheme="green" onClick={onClose} w={"10rem"}>
              Claim
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ResultModal;
