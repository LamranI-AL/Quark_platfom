import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imgTechnique from "../assets/imges/techniqueImage2.png";
import imgRecherch from "../assets/imges/recherchImage.png";
import imgCreativiter from "../assets/imges/Creativity.png";
import "./Css/buuton.css";
const teamDescriptions = [
  {
    id: 1,
    imgUrl: imgTechnique,
    title: "Équipe Technique",
    description:
      "Une équipe de plus de 70 personnes qui vise a former les adhérents du club dans plusieurs domaines qui ont relation avec la technlogie et l'entreprenariat",
  },
  {
    id: 2,
    imgUrl: imgCreativiter,
    title: "Équipe de Créativité",
    description:
      "Stimuler l'innovation et la créativité sous toutes ses formes. Composée d'étudiants passionnés et ingénieux, notre équipe travaille en étroite collaboration pour concevoir et donner vie à des idées novatrices.",
  },
  {
    id: 3,
    imgUrl: imgRecherch,
    title: "Équipe de Recherche Scientifique",
    description:
      "L'Équipe de Recherche Scientifique du Club Quark incarne l'esprit de découverte et d'exploration qui anime notre institution d'ingénierie.",
  },
];

// Composant pour afficher la description d'une équipe
const TeamDescription = ({ title, description, imgUrl }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Box
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        m={5}
        borderTop="5px solid"
        borderColor={"#5F374B"}
      >
        <Box>
          <Image borderRadius={20} src={imgUrl} boxSize={300} />
          <Heading pl={2} pt={3} as="h3" size="md" mb="4">
            {title}
          </Heading>
        </Box>

        <Text p={4}>{description}</Text>
      </Box>
    </motion.div>
  );
};

// Composant Section pour afficher les descriptions des équipes
const TeamDescriptionSection = () => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.4 },
    },
  };
  return (
    <motion.div
      // initial={{ x: "100%", opacity: 0 }}
      // animate={{ x: "0%", opacity: 1 }}
      // transition={{ duration: 1.1 }}
      initial="initial"
      variants={variants}
      whileInView="inView"
    >
      <Box
        m={2}
        p={5}
        borderTop="5px solid"
        borderRadius={5}
        borderColor="#5F374B"
      >
        <Heading as="h2" size="xl" textAlign="center">
          Nos Équipes
        </Heading>
        <SimpleGrid p={5} columns={{ base: 1, lg: 3 }} spacing={2}>
          {teamDescriptions.map((description) => (
            <TeamDescription
              key={description.id}
              title={description.title}
              description={description.description}
              imgUrl={description.imgUrl}
            />
          ))}
        </SimpleGrid>
        <Box textAlign="center" m={5}>
          <Link to={"/details"}>
            {/* <button class="" role=""></button> */}
            <Button color={"white"} className="button-86" role="button">
              Learn More
            </Button>
          </Link>
        </Box>
      </Box>
    </motion.div>
  );
};

export default TeamDescriptionSection;
