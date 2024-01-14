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
  useToast,
} from "@chakra-ui/react";
import { useContext} from "react";
import CurrentOrderContext from "../../../Contexts/Orders/CurrentOrderContext";
import { FieldValues, useForm } from "react-hook-form";
import { REQUEST } from "../../../Generics/constants";
import useOrderMutate from "../../../Hooks/Orders/useOrderMutate";
import useAllProducts from "../../../Hooks/Product/Product/useAllProducts";
import useOrders from "../../../Hooks/Orders/useOrders";
import { AiFillDelete } from "react-icons/ai";
import { Order, OrderItem } from "../../../Generics/interfaces";
import useOrderItemMutate from "../../../Hooks/OrderItem/useOrderItemMutate";
import OrderCancelConfirmation from "./OrderCancelConfirmation";
import BillShowModel from "./BillShow/BillShowModel";
import KichenBillModel from "./BillShow/KichenBillModel";
import useUserMe from "../../../Hooks/User/useUserMe";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const Billing = () => {
  const { currentOrder } = useContext(CurrentOrderContext);
  const { data: orders } = useOrders();
  const currentFetchOrder = orders?.find(
    (order) => order.id === currentOrder?.id
  );

  const useMutate = useOrderItemMutate(()=>{
    console.log('ok')
  }, REQUEST.UPDATE, currentFetchOrder?.id)

  // Changing value of the quantity
  
  const addingNumber =(orderitem:OrderItem)=>{
    const newObj = {
      ...orderitem,
      quantity:orderitem.quantity+1
    }
    console.log(newObj)
    useMutate.mutate(newObj)
  }
  const substractNumber =(orderitem:OrderItem)=>{
    const newObj = {
      ...orderitem,
      quantity:orderitem.quantity-1
    }
    useMutate.mutate(newObj)
  }
  
  const orderMutate = useOrderMutate(() => {
    toast({
      title: "Order",
      description: "Order Successfully updated.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }, REQUEST.UPDATE);

  
  const { userMe } = useUserMe();

  const { data: products } = useAllProducts();

  // delete order item
  const orderitemMutate = useOrderItemMutate(
    () => {},
    REQUEST.DELETE,
    currentOrder?.id ? currentOrder?.id : 0
  );

  const toast = useToast();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    const newlyOrder = {
      ...currentFetchOrder,
      ...data,
      customer_name: data.customer_name
        ? data.customer_name
        : currentFetchOrder?.customer_name,
      discount: data.discount ? data.discount : currentFetchOrder?.discount,
      service_charge: data.service_charge
        ? data.service_charge
        : currentFetchOrder?.service_charge,
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

        <Container maxHeight="50vh" minHeight="50vh" overflow="auto">
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Product</Th>
                <Th></Th>
                <Th textAlign="right">quantity</Th>
                <Th textAlign="right">Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentFetchOrder?.orderitems?.map((orderitem) => (
                <Tr>
                  <Td>
                    {userMe.is_superuser && (
                      <IconButton
                        colorScheme="red"
                        icon={<AiFillDelete />}
                        aria-label="delete"
                        onClick={() => onDeleteOrderItem(orderitem)}
                      />
                    )}
                  </Td>
                  <Td>
                    {
                      products?.find(
                        (product) => orderitem.product_id === product.id
                      )?.title
                    }
                  </Td>
                  <Td>
                    <VStack margin={0} padding={0}>
                      <IconButton 
                      icon={<CiSquarePlus />} 
                      aria-label="add"
                      margin={0}
                      onClick={()=>addingNumber(orderitem)}
                      />
                      <IconButton
                        icon={<CiSquareMinus />}
                        aria-label="substract"   
                        margin={0} 
                        onClick={()=>substractNumber(orderitem)}                   
                      />
                    </VStack>
                  </Td>
                  <Td textAlign="right">{orderitem.quantity}</Td>
                  <Td textAlign="right">{orderitem.item_total}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Container>

        {(userMe.is_superuser || userMe.is_cashier) && (
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

            <form onSubmit={handleSubmit(onSubmit)}>
              <HStack justifyContent="space-between" marginBottom={2}>
                <FormLabel marginRight={2}>Customer</FormLabel>
                <Input
                  type="text"
                  defaultValue={currentFetchOrder?.customer_name}
                  placeholder="Name"
                  {...register("customer_name")}
                  marginRight={2}
                  margin={0}
                />
                <FormLabel>Discount</FormLabel>
                <Input
                  margin={0}
                  type="number"
                  defaultValue={currentFetchOrder?.discount}
                  placeholder="(%)"
                  {...register("discount")}
                  marginRight={2}
                />
              </HStack>
              <HStack marginBottom={2}>
                <FormLabel whiteSpace="nowrap">Service Charge (%)</FormLabel>
                <Input
                  margin={0}
                  type="number"
                  defaultValue={currentFetchOrder?.service_charge}
                  {...register("service_charge")}
                  marginRight={2}
                />

                <Button margin={0} type="submit" width="200px">
                  Add
                </Button>
              </HStack>
            </form>

            <HStack>
              {currentOrder !== undefined && (
                <OrderCancelConfirmation order={currentOrder} />
              )}
              <KichenBillModel order={currentFetchOrder} />

              <BillShowModel order={currentFetchOrder} />
            </HStack>
          </Container>
        )}
      </VStack>
    </Flex>
  );
};

export default Billing;
