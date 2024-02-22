// export default Footer;
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaWpexplorer } from "react-icons/fa6";
import { MdDataExploration, MdOutlineDataExploration } from "react-icons/md";

const Footer = () => {
  return (
    <Flex
      pt={10}
      // borderTop="6px solid"
      // borderColor={"purple.800"}
      textColor={"gray.800"}
      boxShadow={6}
      pr={5}
      p={2}
      mt={30}
      bg={"gray.200"}
      justifyContent="space-around"
      alignItems="center"
    >
      <Box
        p={5}
        flexBasis={{ base: "100%", md: "50%" }}
        mb={{ base: "4", md: "1" }}
      >
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          Contactez-nous
        </Text>
        <Text fontWeight="bold" size={"sm"}>
          Adresse: école nationale des sciences appliquées, Béni Mellal, Mghila,
          Maroc
        </Text>
        <Text fontWeight="bold">Email: quarkensabm@gmail.com</Text>
      </Box>
      <Box flexBasis={{ base: "100%", md: "25%" }}>
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          Partenaires
        </Text>
        <Flex gap={2}>
          <Box m={1}>
            <MdOutlineDataExploration />
          </Box>
          <Text fontWeight="bold" size={"sm"}>
            L’académie régionale d'education et de formation Beni Mellal (Lycée
            HASSAN II)
          </Text>
        </Flex>
        <Flex gap={2}>
          <Box m={1}>
            <FaWpexplorer />
          </Box>
          <Text size={"sm"} fontWeight="bold">
            Observatoire d’oukaimden
          </Text>
        </Flex>
      </Box>
      <Box flexBasis={{ base: "100%", md: "25%" }}>
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Suivez-nous
        </Text>
        <Box>
          <Box m={3}>
            <Link href="#">
              <FaLinkedin />
            </Link>
          </Box>
          <Box m={3}>
            <Link href="#">
              <FaInstagram />
            </Link>
          </Box>
          <Box m={3}>
            <Link href="#">
              <FaFacebook />
            </Link>
          </Box>
          <Box m={3}>
            <Link href="#">
              <FaTwitter />
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Footer;
