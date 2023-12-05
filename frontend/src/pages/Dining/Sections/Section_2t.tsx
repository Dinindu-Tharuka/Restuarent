import { HStack, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TableButton from "../TableButton";
import { SECOND_FLOOR_PART_1 } from "../../../Generics/constants";

const Section_2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <HStack justifyContent="center">
        <SimpleGrid columns={5} spacing={2}>
          {SECOND_FLOOR_PART_1.map((table) => (
            <TableButton tableButton={table} />
          ))}
        </SimpleGrid>
      </HStack>
    </motion.div>
  );
};

export default Section_2;
