import { Box, Heading, Text, SimpleGrid, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ModelTasck from "./ModelTasck";
import imgCreativiter from "../assets/imges/Creativity.png";

// Données des descriptions d'équipe
const teamDescriptions = [
  {
    id: 1,
    imgUrl: imgCreativiter,
    title: "Équipe de Créativité - L'Art de Réinventer :",
    description:
      "Notre Équipe de Créativité au sein du Club Quark est le fer de lance de l'innovation à l'École Nationale des Sciences Appliquées de Béni Mellal. Nous sommes des esprits passionnés qui croient en la puissance de la créativité pour transformer le monde qui nous entoure. Nous croyons que la diversité est la clé de l'innovation, c'est pourquoi notre équipe est composée d'étudiants aux horizons variés. Nous sommes les artisans de l'originalité, les gardiens de l'audace et les créateurs de nouvelles voies !",
  },
];

// Composant pour afficher la description d'une équipe avec animation
const EquipeCreaCelluleDescription = ({ title, description, imgUrl }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Box
        p={6}
        borderRadius="lg"
        m={5}
        borderTop="5px solid"
        borderColor="#430A5D"
      >
        <Box>
          <Image borderRadius={20} src={imgUrl} boxSize={300} />
          <Heading pl={3} as="h3" size={{ base: "sm", lg: "lg" }} mb="4">
            {title}
          </Heading>
        </Box>
        <Text>{description}</Text>
      </Box>
    </motion.div>
  );
};

// Composant Section pour afficher les descriptions des équipes avec animation
const CellulesEquipeCreatititi = () => {
  const decriptionEquipe =
    "Notre Équipe de Créativité est le cœur battant du Club Quark. Notre mission est claire : stimuler l'innovation et la créativité sous toutes ses formes. Composée d'étudiants passionnés et ingénieux, notre équipe travaille en étroite collaboration pour concevoir et donner vie à des idées novatrices. Nous organisons des ateliers inspirants, des sessions de brainstorming, des projets collaboratifs et des événements qui incitent à la réflexion créative";
  const description =
    "En règle générale: Nous sommes un collectif de talents variés, tous unis par une passion commune pour la créativité. En travaillant ensemble: nous repoussons les limites de créativité, nous embrassons la diversité des idées, nous créons des projets exceptionnels.";
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 1.1 }}
    >
      <Box m={5} p={10}>
        <Heading
          as="h2"
          size={{ base: "sm", lg: "xl" }}
          mb="8"
          textAlign="center"
        >
          Équipe de Créativité
        </Heading>
        <Text px={20}>{decriptionEquipe}</Text>
        <SimpleGrid pl={5} columns={{ base: 1, lg: 1 }} spacing={1}>
          {teamDescriptions.map((description) => (
            <EquipeCreaCelluleDescription
              key={description.id}
              title={description.title}
              description={description.description}
              imgUrl={description.imgUrl}
            />
          ))}
        </SimpleGrid>
        <Box textAlign="center" m={5}>
          <ModelTasck
            title={"objectifs"}
            description={description}
            buttonName={"objectifs"}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default CellulesEquipeCreatititi;
