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
import FloorDeleteConfirmation from "./FloorDeleteConfirmation";

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
              <Th></Th>
              <Th>Floor Number</Th>
              <Th>Tables</Th>
              <Th>Table End No</Th>
            </Tr>
          </Thead>
          <Tbody>
            {floors?.map((floor) => (
              <Tr>
                <Td><FloorDeleteConfirmation floor={floor}/></Td>
                <Td>{floor.floor_number}</Td>
                <Td>{(floor.table_end_number - floor.table_start_number)> 0 ?(floor.table_end_number - floor.table_start_number + 1) : 0}</Td>
                <Td>{(floor.vip_table_end_number - floor.vip_table_start_number) > 0 ? (floor.vip_table_end_number - floor.vip_table_start_number + 1)  : 0}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Floors;
