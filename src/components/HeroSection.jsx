import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import bgImage1 from "../assets/IMG-20230126-WA0056.jpg";
import ModelTasck from "./ModelTasck";
// import Buuton from "./Button/Buuton";

// Composant de la section Hero
const HeroSection = () => {
  const buttonName = "À propos";
  const title = "Explorez le Club Quark :";
  const description =
    "En tant qu'ingénieurs en herbe, notre passion pour la science et la technologie est inébranlable. Nous menons des projets de recherche interdisciplinaires, exploitant notre expertise en génie pour résoudre des problèmes complexes et repousser les limitesde  la connaissance. Notre équipe est composée de chercheursdévoués,  prêts à relever les défis scientifiques les plusardus. Nous organisons des colloques, des ateliers et desdiscussions pour partager nos découvertes et inspirer laprochaine génération de scientifiques.";
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Flex
        align="center"
        justify="center"
        h="100vh"
        position="relative"
        overflow="hidden"
        // border="4px solid #000"
      >
        <Box pl={10} flex="1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              border: "1px solid #fff",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              src={bgImage1}
              alt="Image"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </motion.div>
        </Box>

        <Box flex="1">
          <Box p="8">
            <Text
              // fontSize="6xl"
              fontSize={{ base: "3xl", lg: "6xl" }}
              fontWeight="bold"
              mb="4"
            >
              Explorez le Club Quark.
            </Text>
            <Text fontSize="2xl" mb="8">
              Club Quark de l'École Nationale des Sciences Appliquées de Béni
              Mellal
            </Text>
            <Text fontSize="lg" mb={3}>
              Le berceau de la créativité et de l'innovation étudiante à l’école
              nationale des sciences appliquées de béni mellal
            </Text>
            <ModelTasck
              title={title}
              description={description}
              buttonName={buttonName}
            />
          </Box>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default HeroSection;
