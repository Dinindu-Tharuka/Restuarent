import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { COLOURS } from "../../../Generics/constants";

const BillShowModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        width="50%"
        onClick={onOpen}
        bg={COLOURS.OK_COLOUR}
        color={COLOURS.MAIN_PAGE_WHITE}
        _hover={{
          color: "black",
          bg: COLOURS.HOVER_BUTTON_COLOR,
        }}
      >
        Preview
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bill</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button bg={COLOURS.OK_COLOUR} mr={3} >
              Print
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BillShowModel;
