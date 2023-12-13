import { HStack, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TableButton from "../TableButton";
import { SECOND_FLOOR_PART_1 } from "../../../Generics/constants";
import { useContext } from "react";
import OrderContext from "../../../Contexts/Orders/OrdersContexts";
import { makeOrderTables } from "../Functions/functions";

const Section_2 = () => {
  const { orders } = useContext(OrderContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <HStack justifyContent="center">
        <SimpleGrid columns={5} spacing={2}>
          {orders !== undefined &&
            makeOrderTables(SECOND_FLOOR_PART_1, orders).map((table, index) => (
              <TableButton tableButton={table} key={index} />
            ))}
        </SimpleGrid>
      </HStack>
    </motion.div>
  );
};

export default Section_2;
