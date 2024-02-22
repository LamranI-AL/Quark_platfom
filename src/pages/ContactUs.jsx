import React from "react";
import FormValidation from "../components/FormValidation";
import {
  Box,
  Center,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Message from "../components/Message";

const ContactUs = () => {
  const imgUrl =
    "https://img.freepik.com/vecteurs-libre/illustration-vectorielle-rencontre-ligne-concept-abstrait-conference-telephonique-rejoindre-groupe-meetup-service-ligne-appel-video-communication-distance-reunion-informelle-metaphore-abstraite-du-reseautage-membres_335657-2920.jpg?w=740&t=st=1708147545~exp=1708148145~hmac=2361d7938507cfa1be0e032a0e6cb874261043021c56ca275c6160617d46eab8";
  const imgUrl1 =
    "https://img.freepik.com/vecteurs-libre/support-client-illustration-design-plat_23-2148887720.jpg?w=740&t=st=1708147677~exp=1708148277~hmac=fc5e69b75efa5d2dd2a2d05b52d7856676a8866d5b60f140f4ec4c327bb14fd3";
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SimpleGrid p={5} columns={{ base: 1, lg: 2 }} spacing={4}>
        <Box
          textAlign="center"
          lineHeight="200px"
          boxSize={{ base: 150, lg: 300 }}
          flex="1"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              // border: "1px solid #fff",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Center>
              <Image
                src={imgUrl1}
                alt="Image"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Center>
          </motion.div>
        </Box>

        <Box flex="1" p="8">
          <FormValidation />
        </Box>
      </SimpleGrid>
      <Message />
    </motion.div>
  );
};

export default ContactUs;
