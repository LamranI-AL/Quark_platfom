import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Button, QRCode } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaWpexplorer } from "react-icons/fa6";
import { MdOutlineDataExploration } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

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
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: "#333", color: "#fff", padding: "20px" }}
    >
      <Box alignContent={"center"} m="8">
        <Flex justify="space-around" align="center" flexWrap="wrap">
          <Box flex="1" maxW="300px">
            <Text fontSize="xl" fontWeight="bold" mb="2" color="#F4DFB6">
              Nous contacter
            </Text>
            <Flex align="center" mb="2">
              <Icon as={FaEnvelope} mr="2" color="#D24545" />
              <Text>quark.ensabm@gmail.com</Text>
            </Flex>
            <Flex align="center" mb="2">
              <Icon as={FaPhone} mr="2" color="#A5DD9B" />
              <Text>+212 666187356</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaMapMarkerAlt} mr="2" color="#FAA300" />
              <Text>Mghila, Beni Mellal</Text>
            </Flex>
          </Box>
          <Box flexBasis={{ base: "100%", md: "25%" }}>
            <Text fontSize="xl" fontWeight="bold" mb="4" color="#F4DFB6">
              Partenaires
            </Text>
            <Flex gap={2}>
              <Box m={1}>
                <MdOutlineDataExploration color="#86A789" />
              </Box>
              <Text fontWeight="bold" size={"sm"}>
                L’académie régionale d'éducation et de formation Beni Mellal
                (Lycée // HASSAN II)
              </Text>
            </Flex>
            <Flex gap={2}>
              <Box m={1}>
                <FaWpexplorer color="#86A789" />
              </Box>
              <Text size={"sm"} fontWeight="bold">
                Observatoire d’Oukaimden
              </Text>
            </Flex>
          </Box>

          <Box
            flex="1"
            alignSelf={"center"}
            maxW="300px"
            mt={{ base: "4", md: "0" }}
          >
            <Text fontSize="xl" fontWeight="bold" mb="2" color="#F4DFB6">
              Autres liens
            </Text>
            <Flex direction="column">
              <Box m={1}>
                <a
                  href="https://www.instagram.com/quark.ensabm/"
                  target="_blank"
                >
                  <button
                    style={{
                      backgroundColor: "#EE99C2",
                      border: "none",
                      padding: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    <TiSocialInstagram color="#fff" />
                  </button>
                </a>
              </Box>
              <Box m={1}>
                <a
                  href="https://www.linkedin.com/company/quark-ensabm"
                  target="_blank"
                >
                  <button
                    style={{
                      backgroundColor: "#0077b5",
                      border: "none",
                      padding: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    <TiSocialLinkedin color="#fff" />
                  </button>
                </a>
              </Box>
              <Box m={1}>
                <button
                  style={{
                    backgroundColor: "#3b5998",
                    border: "none",
                    padding: "8px",
                    borderRadius: "4px",
                  }}
                >
                  <SlSocialFacebook color="#fff" />
                </button>
              </Box>
            </Flex>
          </Box>
          <Box>
            <div
              id="myqrcode"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ position: "relative" }}
            >
              <Box
                style={{
                  marginBottom: 10,
                  transition: "transform 0.3s ease",
                }}
                scale={isHovered ? 1.2 : 1}
              >
                <QRCode
                  value="https://www.instagram.com/quark.ensabm/"
                  bgColor={"white"}
                />
              </Box>

              <Box ml={8}>
                <Button color="teal" onClick={downloadQRCode}>
                  Download
                </Button>
              </Box>
            </div>
          </Box>
        </Flex>
      </Box>
    </motion.footer>
  );
};

export default Footer;
