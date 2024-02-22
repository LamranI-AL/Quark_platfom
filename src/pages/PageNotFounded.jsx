import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const PageNotFounded = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <Box textAlign="center" mt={10}>
        <Heading as="h1" mr={300} mb={4}>
          404 - Not Found
        </Heading>
        <Image
          //   src={img}
          alt="Not Found"
          style={{ maxWidth: "100%", height: "auto" }}
          boxSize={500}
        />

        <Text fontSize="xl" mr={300} mb={4}>
          La page que vous recherchez semble introuvable.
        </Text>
        <Text fontSize="xl" mr={300} mb={4}>
          oooops ... dont cry{" "}
        </Text>
      </Box>
    </motion.div>
  );
};

export default PageNotFounded;
