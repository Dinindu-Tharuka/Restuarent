import {
  Button,
  Flex,
  HStack,
  Input,
  Table,
  Text,
  VStack,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Container,
  IconButton,
  FormLabel,
} from "@chakra-ui/react";
import { useContext } from "react";
import CurrentOrderContext from "../../../Contexts/Orders/CurrentOrderContext";
import { FieldValues, useForm } from "react-hook-form";
import { COLOURS, REQUEST } from "../../../Generics/constants";
import useOrderMutate from "../../../Hooks/Orders/useOrderMutate";
import useAllProducts from "../../../Hooks/Product/Product/useAllProducts";
import useOrders from "../../../Hooks/Orders/useOrders";
import { AiFillDelete } from "react-icons/ai";
import { Order, OrderItem } from "../../../Generics/interfaces";
import useOrderItemMutate from "../../../Hooks/OrderItem/useOrderItemMutate";
import OrderCancelConfirmation from "./OrderCancelConfirmation";
import BillShowModel from "./BillShowModel";

const Billing = () => {
  const { currentOrder } = useContext(CurrentOrderContext);
  const { data: orders } = useOrders();
  const currentFetchOrder = orders?.find(
    (order) => order.id === currentOrder?.id
  );

  const { data: products } = useAllProducts();

  // delete order item
  const orderitemMutate = useOrderItemMutate(
    () => {},
    REQUEST.DELETE,
    currentOrder?.id ? currentOrder?.id : 0
  );

  const { register, handleSubmit } = useForm();
  const orderMutate = useOrderMutate(() => {
    
  }, REQUEST.UPDATE);

  const onSubmit = (data: FieldValues) => {
    const newlyOrder = {
      ...currentOrder,
      ...data,
    } as Order;

    orderMutate.mutate(newlyOrder);
  };

  const onDeleteOrderItem = (orderitem: OrderItem) => {
    orderitemMutate.mutate(orderitem);
  };

 
  return (
    <Flex width="100%">
      <VStack justifyContent="center" width="100%">
        <Text fontSize={20}>
          Restuarent - Table ({currentFetchOrder?.table})
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack justifyContent="space-between">
            <FormLabel marginRight={5}>Customer</FormLabel>
            <Input
              type="text"
              defaultValue={currentOrder?.customer_name}
              placeholder="Customer Name"
              {...register("customer_name")}
              marginRight={10}
            />
            <Button type="submit">Save</Button>
          </HStack>
        </form>
        <Container maxHeight="60vh" minHeight="60vh" overflow="auto">
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Product</Th>
                <Th textAlign="right">quantity</Th>
                <Th textAlign="right">Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentFetchOrder?.orderitems?.map((orderitem) => (
                <Tr>
                  <Td>
                    <IconButton
                      colorScheme="red"
                      icon={<AiFillDelete />}
                      aria-label="delete"
                      onClick={() => onDeleteOrderItem(orderitem)}
                    />
                  </Td>
                  <Td>
                    {
                      products?.find(
                        (product) => orderitem.product_id === product.id
                      )?.title
                    }
                  </Td>
                  <Td textAlign="right">{orderitem.quantity}</Td>
                  <Td textAlign="right">{orderitem.item_total}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Container>

        <Container>
          <Table marginBottom={5}>
            <Tbody>
              <Tr>
                <Th></Th>
                <Th>Total Price</Th>
                <Th></Th>
                <Th></Th>
                <Th textAlign="right">{currentFetchOrder?.total}</Th>
              </Tr>
            </Tbody>
          </Table>
          <HStack>
            {currentOrder !== undefined && (
              <OrderCancelConfirmation order={currentOrder} />
            )}

            <BillShowModel order={currentFetchOrder}/>
          </HStack>
        </Container>
      </VStack>
    </Flex>
  );
};

export default Billing;
