import {
  FormLabel,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import FloorAddModel from "./FloorAddModel";
import useFloors from "../../../../Hooks/Floor/useFloors";

const Floors = () => {
  const { data: floors } = useFloors();
  return (
    <>
      <HStack position="absolute" right="2vw">
        <FloorAddModel />
      </HStack>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Floor Id</Th>
              <Th>Floor Number</Th>
              <Th>Table Start No</Th>
              <Th>Table End No</Th>
            </Tr>
          </Thead>
          <Tbody>
            {floors?.map((floor) => (
              <Tr>
                <Td>{floor.id}</Td>
                <Td>{floor.floor_number}</Td>
                <Td>{floor.table_start_number}</Td>
                <Td>{floor.table_end_number}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Floors;
