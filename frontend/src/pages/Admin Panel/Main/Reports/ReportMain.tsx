
import { Container, Table, Thead, VStack, Tr, Th, HStack, Tbody, Td, Button, Text } from "@chakra-ui/react"
import usePageOrders from "../../../../Hooks/Orders/usePageOrders"
import { SIZES } from "../../../../Generics/constants"
import { useState } from "react"
import { converDateTme } from "./Functions/functions"


const ReportMain = () => {
  const [page, setPage]= useState(1)
 
  const {data:orders} = usePageOrders({page:page})
  console.log(orders, 'orders')

  const userCount = orders?.count;
  let lastPage = 0;
  if (userCount !== undefined) {
    lastPage = Math.ceil(userCount / SIZES.ORDER_PAGE_SIZE);
  }
  return (
    <VStack width="100%" >
      <Container overflow='auto' maxWidth='100%' minHeight='80vh' maxHeight='80vh'>
        
          <Table overflow='auto'>
            <Thead>
              <Tr>
                <Th>User Name</Th>
                <Th>Date</Th>
                <Th></Th>
                <Th>
                  <HStack spacing={5}>
                  </HStack>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders?.results.map((order) => (
                <Tr>
                  <Td>{order.id}</Td>
                  <Td>{converDateTme(order.date ? order.date : '')}</Td>
                  <Td>             
                  </Td>
                  <Td>
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
  )
}

export default ReportMain