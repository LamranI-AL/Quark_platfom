import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Css/buuton.css";
// import "./Css/buuton3.css";

// Données des descriptions d'équipe
const teamDescriptions = [
  {
    id: 1,
    imgUrl:
      "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=900&t=st=1708034791~exp=1708035391~hmac=79f8809ccd3542e95713f4c0c88ae958f328ae8a25c786cc4d6c93f32906ac5a",
    title: "Équipe Technique",
    description:
      "Une équipe de plus de 70 personnes qui vise a former les adhérents du club dans plusieurs domaines qui ont relation avec la technlogie et l'entreprenariat",
  },
  {
    id: 2,
    imgUrl:
      "https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=740&t=st=1708034654~exp=1708035254~hmac=2f8915747f8a666e2b9384969aa5e3bfed7021848403bbb4f18ecbd57df2f674",
    title: "Équipe de Créativité",
    description:
      "Stimuler l'innovation et la créativité sous toutes ses formes. Composée d'étudiants passionnés et ingénieux, notre équipe travaille en étroite collaboration pour concevoir et donner vie à des idées novatrices.",
  },
  {
    id: 3,
    imgUrl: "https://www.bium.ch/wp-content/uploads/2018/12/outils-biblio.jpg",
    title: "Équipe de Recherche Scientifique",
    description:
      "L'Équipe de Recherche Scientifique du Club Quark incarne l'esprit de découverte et d'exploration qui anime notre institution d'ingénierie.",
  },
];

// Composant pour afficher la description d'une équipe avec animation
const TeamDescription = ({ title, description, imgUrl }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Box
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        m={5}
        borderTop="5px solid"
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

// Composant Section pour afficher les descriptions des équipes avec animation
const TeamDescriptionSection = () => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 1.1 }}
    >
      <Box
        m={2}
        p={5}
        borderTop="5px solid"
        borderRadius={5}
        borderColor={"purple"}
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
            {/* <button class="button1">
              Explore
            </button> */}
          </Link>
        </Box>
      </Box>
    </motion.div>
  );
};

export default TeamDescriptionSection;
