import { Button, Card, CardBody, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { OrderItem, Product } from "../../../../Generics/interfaces";
import { COLOURS, REQUEST } from "../../../../Generics/constants";
import { useContext } from "react";
import CurrentOrderContext from "../../../../Contexts/Orders/CurrentOrderContext";
import useOrderItemMutate from "../../../../Hooks/OrderItem/useOrderItemMutate";
import { FieldValues, useForm } from "react-hook-form";
interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  // Model
  const { isOpen, onOpen, onClose } = useDisclosure();

  // form
  const { register, handleSubmit} = useForm()

  //////
  const toast = useToast()

  const { currentOrder } = useContext(CurrentOrderContext);
  const orderItemMutate = useOrderItemMutate(
    () => {
      toast({
        title: 'Order Item',
        description: "Order Item Successfully added.",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
    },
    REQUEST.POST,
    currentOrder.id ? currentOrder.id : 0
  );

  const onSubmit = (data:FieldValues)=>{
    const orderitem = {
      ...data,
      product_id:product.id
    } as OrderItem
    orderItemMutate.mutate(orderitem)

  }

  

  return (
    <>
      <Card
        _hover={{
          bg: COLOURS.TABLE_BUTTON_HOVER_COLOR,
        }}
        onClick={() => {
          onOpen()
         }}
        margin={2}
      >
        <CardBody>
          <Text>{product.title}</Text>
          <Text>Rs: {product.price}.00</Text>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add {product.title} Quantity</ModalHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <HStack>
            <Input placeholder="Quantity" type="number" {...register('quantity')}/>

            <Button type="submit">Add</Button>

            </HStack>
          </form>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductItem;