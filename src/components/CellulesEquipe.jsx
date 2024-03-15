import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ModelTasck from "./ModelTasck";
import imgCreationProjet from "../assets/imges/cellulCreationProj.png";
import imgRecherchScientifique from "../assets/imges/cellulScience.png";

// Données des descriptions d'équipe
const teamDescriptions = [
  {
    id: 1,
    imgUrl: imgRecherchScientifique,
    title: "Cellule de Recherche Scientifique - Explorer l'Inconnu :",
    description:
      "En tant qu'ingénieurs en herbe, notre passion pour la science et la technologie est inébranlable. Nous menons des projets de recherche interdisciplinaires, exploitant notre expertise en génie pour résoudre des problèmes complexes et repousser les limites de la connaissance. Notre équipe est composée de chercheurs dévoués, prêts à relever les défis scientifiques les plus ardus. Nous organisons des colloques, des ateliers et des discussions pour partager nos découvertes et inspirer la prochaine génération de scientifiques.",
  },
  {
    id: 2,
    imgUrl: imgCreationProjet,
    title: "Cellule de Création de Projet - Donnez Vie à Vos Idées :",
    description:
      "comme étant l'un des axes les plus important au maroc et suite au nombreux blocages trouvés au terrain surtout en ce qui concerne l'accompagnement et l'orientation. notre club a pensé a son tour de donner l'opportunité au membre du club pour partager leurs expériences a travers des , les encourager et les fomer dans plusieurs sujets considérés trés important dans le monde de l'entreprenariat par des workshops et des ateliers animé par des formateurs et des experts.",
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
const CellulesEquipe = () => {
  const decriptionEquipe =
    "L'Équipe de Recherche Scientifique du Club Quark incarne l'esprit de découverte et d'exploration qui anime notre institution d'ingénierie. Notre équipe se consacre à la recherche scientifique de pointe, à l'innovation et à la quête de nouvelles connaissances.";
  const description =
    "Une cellule de recherche scientifique est une unité spécialisée qui se consacre à l'exploration et à la compréhension de phénomènes, de concepts ou de problématiques spécifiques par le biais de la méthode scientifique. Ses objectifs fondamentaux sont les suivants : Découverte de connaissances : La cellule de recherche scientifique a pour mission de contribuer à l'expansion des connaissances en explorant des domaines particuliers de la science la résolution de problèmes, l'amélioration des technologies ou la promotion du bien-être humain. Diffusion des résultats : La diffusion des résultats de la recherche est un objectif essentiel";

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
          Équipe de Recherche Scientifique
        </Heading>
        <Text px={20}>{decriptionEquipe}</Text>
        <SimpleGrid pl={5} columns={{ base: 1, lg: 2 }} spacing={1}>
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
            title={"En savoir plus sur notre équipe"}
            description={description}
            buttonName={"objectifs"}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default CellulesEquipe;
