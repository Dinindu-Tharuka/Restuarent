import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { ImProfile } from "react-icons/im";
import UserProfileCreateForm from "./UserProfileCreateForm";
import { User } from "../../../../../Generics/interfaces";

interface Props{
  user:User
}

const UserProfileShow = ({ user }:Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log('user', user)

  return (
    <>
      <IconButton icon={<ImProfile />} aria-label="profile" onClick={onOpen} />
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UserProfileCreateForm user={user} onSuccess={()=>onClose()}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserProfileShow;
