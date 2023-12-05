import { HStack, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FIRST_FLOOR } from "../../../Generics/constants";
import TableButton from "../TableButton";

const Section_1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <HStack justifyContent="center" height='100%'>
        <SimpleGrid columns={5} spacing={2} height='100%' alignItems='flex-start'>
          {FIRST_FLOOR.map((table) => (
            <TableButton tableButton={table} />
          ))}
        </SimpleGrid>
      </HStack>
    </motion.div>
  );
};

export default Section_1;
