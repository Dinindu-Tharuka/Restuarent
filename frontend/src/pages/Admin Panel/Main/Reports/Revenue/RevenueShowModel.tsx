import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import RevenueReportShow from "./RevenueReportShow"
import { Order } from "../../../../../Generics/interfaces"

interface Props{
  orders:Order[]
}
const RevenueShowModel = ({ orders }:Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} width='280px'>Revenue Report</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Revenue Report</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RevenueReportShow orders={orders}/>
          </ModalBody>          
        </ModalContent>
      </Modal>
    </>
  )
}

export default RevenueShowModel