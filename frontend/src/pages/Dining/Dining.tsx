import { Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { COLOURS } from "../../Generics/constants";
import { useNavigate } from "react-router-dom";
import OrderContext from "../../Contexts/Orders/OrdersContexts";
import useOrders from "../../Hooks/Orders/useOrders";
import useTables from "../../Hooks/Floor/useTables";
import useFloors from "../../Hooks/Floor/useFloors";
import TableSection from "./Sections/TableSection";

const Dining = () => {
  const [floorNo, setFloorNo] = useState(1);
  // const floors = ["First Floor", "Second Floor", "Second Floor"];
  const navigate = useNavigate();

  // for fetch tables
  const { data: floors } = useFloors();
  const numOfFloors = floors?.length;
  const { data: tables } = useTables({ floor_id: floorNo });

  console.log('tables', tables)

  const { data: orders } = useOrders();

  const onClick = () => {
    navigate("/");
  };
  return (
    <OrderContext.Provider value={{ orders }}>
      <VStack width="100vw" height="100vh" bg={COLOURS.BACKGROUND_COLOR}>
        <Flex width="100vw">
          <IconButton
            bg={COLOURS.BACKGROUND_COLOR}
            aria-label=""
            icon={<IoHomeSharp />}
            alignSelf="self-start"
            onClick={onClick}
          />
          <Text
            fontWeight="bold"
            alignSelf="center"
            position="absolute"
            left="50vw"
          >
            {/* {floors[floor]} */}
          </Text>
        </Flex>
        <HStack bg={COLOURS.BACKGROUND_COLOR} height="90vh">
          <IconButton
            bg={COLOURS.BACKGROUND_COLOR}
            aria-label=""
            icon={<GrPrevious />}
            height="100%"
            isDisabled={!(floorNo > 1)}
            onClick={() => setFloorNo(floorNo - 1)}
          />

          {tables ? <TableSection tables={tables}/> : <Text color='red'>No Tables</Text>}

          <IconButton
            bg={COLOURS.BACKGROUND_COLOR}
            aria-label=""
            icon={<GrNext />}
            isDisabled={!(floorNo < (numOfFloors ? numOfFloors : 1))}
            height="100%"
            onClick={() => setFloorNo(floorNo + 1)}
          />
        </HStack>
      </VStack>
    </OrderContext.Provider>
  );
};

export default Dining;
