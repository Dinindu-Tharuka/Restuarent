import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";

const Dining = () => {

 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition:{ duration: 1} }}
      exit={{ opacity: 0 }}
    >
      <Flex width="100vw" height="100vh" bg="red">

      </Flex>
    </motion.div>
  );
};

export default Dining;
