import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Button, Flex, QRCode } from "antd";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <SimpleGrid
        color={"black"}
        bg="#5F374B"
        pl={3}
        columns={{ base: 1, md: 3, lg: 3 }}
        spacing={1}
        className=" py-3 px-8"
      >
        <Box textAlign="center">
          <Text fontSize={"x-small"}>
            &copy; 2024 Quark web site. Tous droits réservés.
          </Text>
        </Box>
        <Box>
          <Text fontSize={"x-small"} textAlign="center">
            Scannez ce QR code :
          </Text>
        </Box>
      </SimpleGrid>
    </motion.footer>
  );
};

export default Footer;
