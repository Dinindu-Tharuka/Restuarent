import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import RevenueReportShow from "./RevenueReportShow"
import { Order, Product } from "../../../../../Generics/interfaces"

interface Props{
  orders:Order[];
  product:Product[]
}
const RevenueShowModel = ({ orders, product }:Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} width='100%'>Revenue Report</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='custom'>
        <ModalOverlay />
        <ModalContent css={{
          width:"800px"
        }}>
          
          <ModalCloseButton />
          <ModalBody>
            <RevenueReportShow orders={orders} products={product}/>
          </ModalBody>          
        </ModalContent>
      </Modal>
    </>
  )
}

export default RevenueShowModel