import { HStack, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FIRST_FLOOR } from "../../../Generics/constants";
import TableButton from "../TableButton";
import { makeOrderTables } from "../Functions/functions";
import useOrders from "../../../Hooks/Orders/useOrders";

const Section_1 = () => {
  const { data:orders } = useOrders()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <HStack justifyContent="center" height='100%'>
        <SimpleGrid columns={5} spacing={2} height='100%' alignItems='flex-start'>
          {orders !== undefined && makeOrderTables(FIRST_FLOOR, orders).map((table, index) => (
            <TableButton tableButton={table} key={index}/>
          ))}
        </SimpleGrid>
      </HStack>
    </motion.div>
  );
};

export default Section_1;
