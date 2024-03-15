import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Button, Flex, QRCode } from "antd";
import { motion } from "framer-motion";

const Footer = () => {
  const downloadQRCode = () => {
    const canvas = document.getElementById("myqrcode").querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "QRCode.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <SimpleGrid
        bg="#EEE4B1"
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
        <Flex gap={6}>
          <QRCode
            size={70}
            value="https://www.instagram.com/quark.ensabm/"
            bgColor={"white"}
          />
          <Button size="sm" color="teal" onClick={downloadQRCode}>
            Download
          </Button>
        </Flex>
      </SimpleGrid>
    </motion.footer>
  );
};

export default Footer;
