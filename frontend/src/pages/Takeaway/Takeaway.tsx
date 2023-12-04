import { motion } from "framer-motion";

const Takeaway = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      Take Away
    </motion.div>
  );
};

export default Takeaway;
