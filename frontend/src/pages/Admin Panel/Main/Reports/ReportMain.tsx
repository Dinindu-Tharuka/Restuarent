import {
  Container,
  Table,
  Thead,
  VStack,
  Tr,
  Th,
  HStack,
  Tbody,
  Td,
  Button,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import usePageOrders from "../../../../Hooks/Orders/usePageOrders";
import { SIZES } from "../../../../Generics/constants";
import { useState } from "react";
import { converDateTme } from "./Functions/functions";
import OrderDeleteConfirm from "./Orders/OrderDeleteConfirm";
import useOrders from "../../../../Hooks/Orders/useOrders";
import RevenueShowModel from "./Revenue/RevenueShowModel";
import useAllProducts from "../../../../Hooks/Product/Product/useAllProducts";
import ProductShowModel from "./Product/ProductShowModel";

const ReportMain = () => {
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { data: orders } = usePageOrders({
    page: page,
    startDate: startDate,
    endDate: endDate,
  });

  // for filtering orders
  const {data: allOrders} = useOrders({startDate:startDate, endDate:endDate})

  // For filter products
  const {data:products} = useAllProducts({startDate:startDate, endDate:endDate})

  
  const userCount = orders?.count;
  let lastPage = 0;
  if (userCount !== undefined) {
    lastPage = Math.ceil(userCount / SIZES.ORDER_PAGE_SIZE);
  }
  return (
    <VStack width="100%">
      <HStack>
        <InputGroup>
          <InputLeftAddon children="START" />
          <Input
            type="date"
            onChange={(e) => setStartDate(e.currentTarget.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children="END" />
          <Input
            type="date"
            onChange={(e) => setEndDate(e.currentTarget.value)}
          />
        </InputGroup>

        {allOrders && <RevenueShowModel orders={allOrders}/>}

        {products && <ProductShowModel products={products}/>}
       

      </HStack>
      <Container
        overflow="auto"
        maxWidth="100%"
        minHeight="80vh"
        maxHeight="80vh"
      >
        <Table overflow="auto">
          <Thead>
            <Tr>
              <Th>User Name</Th>
              <Th>Date</Th>
              <Th>Table</Th>
              <Th>Total</Th>
              <Th></Th>
              <Th>
                <HStack spacing={5}></HStack>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders?.results.map((order) => (
              <Tr>
                <Td>{order.id}</Td>
                <Td>{converDateTme(order.date ? order.date : "")}</Td>
                <Td>{order.table}</Td>
                <Td>{order.total}</Td>
                <Td>
                  <OrderDeleteConfirm order={order} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>

      <HStack position="absolute" top="90vh" right="40vw">
        <Button
          width={SIZES.ADMIN_PAGE_BUTTON_WIDTH}
          isDisabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>

        <Text>
          {page} of {lastPage}
        </Text>
        <Button
          width={SIZES.ADMIN_PAGE_BUTTON_WIDTH}
          isDisabled={page === lastPage}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </HStack>
    </VStack>
  );
};

export default ReportMain;
