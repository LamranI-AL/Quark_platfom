import React from "react";
import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ModelTasck from "./ModelTasck";
import imgProgramation from "../assets/imges/cellulProgramming.png";
import imgDisign from "../assets/imges/cellulDesigne.png";
import imgMarketing from "../assets/imges/cellulMarketing.png";

// Données des descriptions d'équipe
const teamDescriptions = [
  {
    id: 1,
    imgUrl: imgProgramation,
    title: "Cellule de programmation",
    description:
      "Équipe Technique - L'Art de l'Innovation Numérique : la cellule de programmation a fixé plusieurs objectifs sous forme des mini projets pour mettre en évidence tout ce qui a été appris durant les formations et les ateliers.",
  },
  {
    id: 2,
    imgUrl: imgDisign,
    title: "Cellule de design",
    description:
      "La conception graphique, notamment dans le domaine de Photoshop (PS), consiste à créer des éléments visuels attrayants, informatifs et esthétiques pour divers supports, tels que des sites web, des publications imprimées, des médias sociaux, etc. Cela implique de combiner la créativité artistique avec une compréhension approfondie de la composition, de la typographie, de la couleur, et de la communication visuelle pour transmettre efficacement un message ou une idée",
  },
  {
    id: 3,
    imgUrl: imgMarketing,
    title: "Cellule de marketing",
    description:
      "Le marketing, en tant que discipline clé dans le monde des affaires, s'articule autour de la création, de la promotion et de la vente de produits ou de services. Il englobe une variété de techniques, de stratégies et d'outils visant à atteindre les consommateurs, à répondre à leurs besoins et à établir des relations fructueuses avec eux. En fin de compte, le marketing cherche à influencer les décisions d'achat, à renforcer la réputation de la marque et à contribuer à la croissance de l'entreprise",
  },
];

// Composant pour afficher la description d'une équipe avec animation
const EquipeCelluleDescription = ({ title, description, imgUrl }) => {
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
          <Image borderRadius={20} src={imgUrl} />
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
const CellulesEquipeTech = () => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.4 },
    },
  };
  const decriptionEquipe =
    "une équipe de plus de 70 personnes qui vise a former les adhérents du club dans plusieurs domaines qui ont une relation avec la technlogie. l'équipe se compose de trois cellules. chacune de ces cellules traite des sujets indépendants et travaille sur plusieurs projets.";
  const description =
    "&Le marketing englobe un ensemble de stratégies et d'activités visant à promouvoir un produit, un service, une marque ou une entreprise. Ses objectifs principaux sont les suivants : Sensibilisation : Le marketing vise à accroître la notoriété d'un produit, d'une entreprise ou d'une marque auprès du public cible Rentabilité : Le marketing vise à générer des revenus et des profits Acquisition de clients : Le marketing cherche à attirer de nouveaux clients ou à fidéliser les clients existants || la cellule de programmation a fixé plusieurs objectifs sous forme des mini projets pour mettre en évidence tout ce qui a été appris durant les formations et les ateliers. Création d'un jeu astronomique sous le nom Quark, Création d'un similateur e-commerce, Création d'un robot, Création du site web.";
  return (
    <motion.div
      // initial={{ x: "100%", opacity: 0 }}
      // animate={{ x: "0%", opacity: 1 }}
      // transition={{ duration: 1.1 }}
      initial="initial"
      variants={variants}
      whileInView="inView"
    >
      <Box m={5} p={10}>
        <Heading
          as="h2"
          size={{ base: "sm", lg: "xl" }}
          mb="8"
          textAlign="center"
        >
          Équipe Technique
        </Heading>
        <Text px={5}>{decriptionEquipe}</Text>
        <SimpleGrid pl={5} columns={{ base: 1, lg: 3 }} spacing={1}>
          {teamDescriptions.map((description) => (
            <EquipeCelluleDescription
              key={description.id}
              title={description.title}
              description={description.description}
              imgUrl={description.imgUrl}
            />
          ))}
        </SimpleGrid>
        <Box textAlign="center" m={5}>
          <ModelTasck
            title={"Objectifs de équipe Technique "}
            description={description}
            buttonName={"Objectifs"}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default CellulesEquipeTech;
