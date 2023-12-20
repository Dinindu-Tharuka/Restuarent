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
                <Td></Td>
                <Td></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Floors;
