import { HStack, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SECOND_FLOOR_PART_2 } from "../../../Generics/constants";
import TableButton from "../TableButton";
import { useContext } from "react";
import OrderContext from "../../../Contexts/Orders/OrdersContexts";
import { makeOrderTables } from "../Functions/functions";

const Section_3 = () => {
  const { orders } = useContext(OrderContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <HStack justifyContent="center" alignItems="flex-start">
        <SimpleGrid columns={5} spacing={2} height="100%">
        {orders !== undefined &&
            makeOrderTables(SECOND_FLOOR_PART_2, orders).map((table, index) => (
              <TableButton tableButton={table} key={index} />
            ))}
        </SimpleGrid>
      </HStack>
    </motion.div>
  );
};

export default Section_3;
