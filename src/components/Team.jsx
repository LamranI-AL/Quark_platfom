import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Flex,
  Button,
  Divider,
} from "@chakra-ui/react";
import {
  PiInstagramLogoDuotone,
  PiLinkedinLogoDuotone,
  PiFacebookLogoDuotone,
} from "react-icons/pi";
import TeamDrawer from "./TeamDrawer";

// Exemple de données de membres de l'équipe
const teamMembers = [
  {
    id: 1,
    name: "Othmane Lamrani alaoui",
    descriptionIndiv: " Un etudient de TDI || web devlopper ",
    fb: "",
    insta: "",
    linkedin: "https://www.linkedin.com/company/93078211/admin/feed/posts/",
    position: "Président",
    image:
      "https://media.licdn.com/dms/image/D4E03AQEyCB-9g-1DLg/profile-displayphoto-shrink_200_200/0/1675771341651?e=2147483647&v=beta&t=4azLNFxyPDveSE23i5fObtdb4JPy1RNssUW3yiJ4G70",
  },
  {
    id: 2,
    name: "Ayman marrouk",
    descriptionIndiv: "",
    fb: "",
    insta: "",
    linkedin: "",
    position: "Vice-président",
    image:
      "https://media.licdn.com/dms/image/D4E03AQELQT1Xhh_8-A/profile-displayphoto-shrink_200_200/0/1706640931641?e=2147483647&v=beta&t=YFR6XCAlB0l3YrOhXpulX6xoBA6Bk3HQi4WW17hwEzI",
  },
  {
    id: 3,
    name: "Ayoub El mahjoubi",
    descriptionIndiv: "",
    fb: "",
    insta: "",
    linkedin: "",
    position: "Project-manager",
    image: "",
  },
  {
    id: 4,
    name: "Arwa Tiyari",
    descriptionIndiv: "",
    fb: "",
    insta: "",
    linkedin: "",
    position: "R.communication",
    image: "url_de_l_image2.jpg",
  },
  {
    id: 5,
    name: "Youssef Ait Karroum",
    descriptionIndiv:
      "Je suis AIT KARROUM YOUSSEF, un étudiant en deuxième année de classe préparatoire à l'École Nationale des Sciences Appliquées de Béni Mellal. Actuellement, j'occupe le poste de **secrétaire général du club QUARK*. Depuis mon enfance, je suis passionné par tout ce qui touche à l'astronomie, l'astrologie et l'informatique. Lorsque j'ai intégré l'ENSA, j'ai exploré ce mélange d'intérêts au sein d'un club parmi de nombreux autres. Mon parcours m'a permis d'approfondir mes connaissances dans ces domaines fascinants. J'ai participé à des discussions sur les dernières découvertes astronomiques, j'ai observé les étoiles lors de soirées d'observation et j'ai également développé des compétences en programmation informatique pour analyser des données astronomiques. En tant que secrétaire général du club QUARK, je m'efforce de partager ma passion avec d'autres étudiants et d'organiser des événements enrichissants pour notre communauté. Si vous avez des idées ou des projets liés à l'astronomie, l'astrologie ou l'informatique, je serais ravi d'en discuter et de collaborer avec vous !",
    fb: "",
    insta: "",
    linkedin: "",
    position: "Secrétaire général",
    image:
      "https://media.licdn.com/dms/image/D4E03AQEXq0TMx6qzrg/profile-displayphoto-shrink_200_200/0/1677832074944?e=1713398400&v=beta&t=EXpQzUawAGlZHA3gjJY1AXSIWDErbREOlbz6aTDfAOI",
  },

  {
    id: 6,
    name: "Ikram Tifardine",
    descriptionIndiv: "",
    fb: "",
    insta: "",
    linkedin: "",
    position: "Resp. Technique",
    image: "url_de_l_image3.jpg",
  },
  {
    id: 7,
    name: "Abderahman el bouhadi",
    descriptionIndiv: "",
    fb: "",
    insta: "",
    linkedin: "",
    position: "Resp. de créativité",
    image:
      "https://media.licdn.com/dms/image/D4E03AQGNiCZMKbp4Fw/profile-displayphoto-shrink_200_200/0/1707138238091?e=1713398400&v=beta&t=qMvwhF_wjAAbe6aBTO2EFoKOsei2cvrpo0SSRiQU1DQ",
  },
];

// Composant Card pour afficher un membre de l'équipe
const TeamMemberCard = ({ member }) => {
  return (
    <Box
      h={300}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image
        mx={30}
        p={2}
        boxSize={100}
        borderRadius={50}
        src={member.image}
        alt={member.name}
      />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontSize="sm" fontWeight="bold" color="gray.500">
            {member.position}
          </Text>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {member.name}
        </Box>
        <Divider py={5} />
        <Flex gridColumn={4} mt={7}>
          <Box width={10}>
            <a href={member.insta}>
              <Button bg={"transparent"}>
                <PiInstagramLogoDuotone />
              </Button>
            </a>
          </Box>
          <Box width={10}>
            <a href={member.fb}>
              <Button bg={"transparent"}>
                <PiFacebookLogoDuotone />
              </Button>
            </a>
          </Box>
          <Box width={10}>
            <a href={member.linkedin}>
              <Button bg={"transparent"}>
                <PiLinkedinLogoDuotone />
              </Button>
            </a>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

// Composant Section pour afficher les membres de l'équipe
const TeamSection = () => {
  return (
    <Box
      m={1}
      mt={20}
      border={"1px solid"}
      borderRadius={8}
      p={6}
      borderColor={"black"}
    >
      <Box m={2}>
        <Heading textAlign="center" as="h2" size="xl" mb="8">
          Members de bureau
        </Heading>
        <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 7 }} spacing={3}>
          {teamMembers.map((member) => (
            <Box>
              <TeamMemberCard key={member.id} member={member} />
              <Box m={5}>
                <TeamDrawer
                  name={member.name}
                  descriptionIndiv={member.descriptionIndiv}
                />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default TeamSection;
