import { motion } from "framer-motion";
import { Flex, HStack, IconButton, SimpleGrid } from "@chakra-ui/react";
import { FIRST_FLOOR } from "../../Generics/constants";
import TableButton from "./TableButton";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Dining = () => {
  return (
    <HStack>
      <IconButton
        colorScheme="blue"
        aria-label=""
        icon={<GrPrevious/>}
        height='20vh'
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <HStack width="100vw" height="100vh" justifyContent="center">
          <SimpleGrid columns={5} spacing={2}>
            {FIRST_FLOOR.map((table) => (
              <TableButton tableButton={table} />
            ))}
          </SimpleGrid>
        </HStack>
      </motion.div>
    </HStack>
  );
};

export default Dining;
