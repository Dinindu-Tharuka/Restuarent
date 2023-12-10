import { Button, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import AddCategoryForm from "./AddCategoryForm"
import { MdOutlineAddBox } from "react-icons/md"


const AddCategoryMode = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton
        icon={<MdOutlineAddBox />}
        aria-label="category add"       
        colorScheme="green"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddCategoryForm/>
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddCategoryMode