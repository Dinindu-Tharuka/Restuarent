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
} from "@chakra-ui/react";
import { useContext } from "react";
import CurrentOrderContext from "../../../Contexts/Orders/CurrentOrderContext";
import { FieldValues, useForm } from "react-hook-form";
import { REQUEST } from "../../../Generics/constants";
import useOrderMutate from "../../../Hooks/Orders/useOrderMutate";
import useOrderItems from "../../../Hooks/OrderItem/useOrderItems";
import useAllProducts from "../../../Hooks/Product/Product/useAllProducts";

const Billing = () => {
  const { currentOrder } = useContext(CurrentOrderContext);
 

  const {data:products} = useAllProducts()

 

  

  const { register, handleSubmit } = useForm();
  const orderMutate = useOrderMutate(() => {
    console.log('craeted')
  }, REQUEST.UPDATE);

  const { data: orderitems} = useOrderItems({order_id:currentOrder.id ? currentOrder.id : 0})

  const onSubmit = (data: FieldValues) => {
    const newlyOrder = {
      ...currentOrder,
      ...data,
    };

    orderMutate.mutate(newlyOrder);
  };
  return (
    <Flex width="100%">
      <VStack justifyContent="center" width="100%">
        <Text fontSize={20}>Restuarent</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack>
            <Input
              type="text"
              defaultValue={currentOrder.customer_name}
              placeholder="Customer Name"
              {...register("customer_name")}
            />
            <Button type="submit">Save</Button>
          </HStack>
        </form>
        <Table>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>quantity</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orderitems?.map((orderitem) => (
              <Tr>
                <Td>
                  {
                    products?.find(
                      (product) => orderitem.product_id === product.id
                    )?.title
                  }
                </Td>
                <Td>{orderitem.quantity}</Td>
                <Td>{orderitem.item_total}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Flex>
  );
};

export default Billing;
