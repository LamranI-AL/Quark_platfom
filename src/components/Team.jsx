import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
import TeamDrawer from "./TeamDrawer";
import meImage from "../assets/bureau/me.jpeg";
import mehdiImage from "../assets/bureau/mehdiImage.jpg";
import abdRehmanImage from "../assets/bureau/abdRehmanImage.jpeg";
import ikramImage from "../assets/bureau/ikramImage.jpeg";
import arwaImage from "../assets/bureau/arwaImage.jpeg";
import abdlHakimImage from "../assets/bureau/abdlHakimImage.jpg";
import youssefImage from "../assets/bureau/youssefImage.jpg";
import aymaneImage from "../assets/bureau/aymaneImage.jpg";

// Exemple de données de membres de l'équipe
const teamMembers = [
  {
    id: 1,
    name: "Othmane Lamrani alaoui",
    descriptionIndiv:
      " As a student engineer, president of the Quark club, and former vice president of the Industry 4.0 club, I'm passionate about innovation and industrial digital transformation. Leveraging my skills as a web developer, I strive to create efficient digital solutions. My goal is to shape a smarter, more connected industrial future through the adoption of advanced technologies. ",
    fb: "",
    insta: "https://www.instagram.com/othman__la",
    linkedin: "https://www.linkedin.com/in/othmane-lamrani-alaoui-59193b247/",
    position: "Président",
    image: meImage,
  },
  {
    id: 2,
    name: "Ayman marrouk",
    descriptionIndiv:
      "our club is not just a extracurricular activity, but rather a project that grows and evolves with each passing day. It embodies our interests and values, particularly in technology, creativity and scientific research wich are the three team of our club.  We consistently strive for greatness and push the boundaries of what is possible.Being actively involved in the club's activities has been an immensely rewarding experience for me.  I have witnessed firsthand the incredible achievements and milestones we have reached together as a team. Whether it's organizing workshops, hosting events, or collaborating on research projects, every moment has been filled with purpose and fulfillment  Quark club is not only a place of opportunity and growth but also a testament to the power of collective ambition and determination  Seeing the quark family growing everyday and achieving everytime a new record and a new success make me proud and honored to serve it with all that i can.",
    fb: "",
    insta: "",
    linkedin: "",
    position: "Vice-président",
    image: aymaneImage,
  },
  {
    id: 4,
    name: "Arwa Tiyari",
    descriptionIndiv:
      "Hi, Im Arwa Tayari I'm a sophomore student at the national school of applied sciences at beni melal and I'm the communication manager of the Quark club, Since childhood, I've been captivated by the worlds of astronomy and engineering. It all started with movies and conversations with my dad, sparking a lifelong passion for exploring the cosmos and diving into the intricacies of engineering. Im also passionate about social media and influencing life that's why I'm the one who's responsible of all the club's platforms and social media accounts. that's a bit about me, I'm excited to share, learn and contribute with you, we are looking forward to working together.",
    fb: "",
    insta: "",
    linkedin: "",
    position: "R.communication",
    image: arwaImage,
  },
  {
    id: 5,
    name: "Youssef Ait Karroum",
    descriptionIndiv:
      "Je suis AIT KARROUM YOUSSEF, un étudiant en deuxième année de classe préparatoire à l'École Nationale des Sciences Appliquées de Béni Mellal. Actuellement, j'occupe le poste de secrétaire général du club QUARK . Depuis mon enfance, je suis passionné par tout ce qui touche à l'astronomie et l'informatique. Lorsque j'ai intégré l'ENSA, j'ai exploré ce mélange d'intérêts au sein d'un club parmi de nombreux autres. Mon parcours m'a permis d'approfondir mes connaissances dans ces domaines fascinants. J'ai participé à des discussions sur les dernières découvertes astronomiques, j'ai observé les étoiles lors de soirées d'observation  En tant que secrétaire général du club QUARK, je m'efforce de partager ma passion avec d'autres étudiants et d'organiser des événements enrichissants pour notre communauté. Si vous avez des idées ou des projets liés à l'astronomie ou l'informatique, je serais ravi d'en discuter et de collaborer avec vous !",
    fb: "",
    insta: "",
    linkedin: "",
    position: "Secrétaire général",
    image: youssefImage,
  },
  {
    id: 3,
    name: "abdelhakim echahbi",
    descriptionIndiv:
      "Je suis Abdelhakim Echahbi, un étudiant en première année à l'ENSA de Beni Mellal, et j'occupe le poste de responsable technique au sein du club Quark.Ma passion pour le design et l'informatique ne fait que croître, et je m'efforce maintenant de mettre en pratique ces intérêts au sein de mes études et de mes engagements extra-scolaires. Ma participation active dans le club Quark témoigne de mon désir de contribuer de manière significative à des projets techniques et créatifs.",
    fb: "",
    insta: "https://www.instagram.com/abdelhakim_echahbi",
    linkedin: "",
    position: "Resp. Technique",
    image: abdlHakimImage,
  },
  {
    id: 6,
    name: "Ikram Tifardine",
    descriptionIndiv:
      "Je m'appelle Ikram Tifardine ,étudiante en 2 eme année des classes préparatoires  à l'école Nationale des Sciences Appliquées de Béni Mellal . Club Quark est une source inépuisable d’apprentissage et de nouvelle découvertes . De plus, je suis totalement immergé dans le monde captivant de la recherche scientifique et de l’innovation technologique. En tant que membre de cette communauté stimulante ,et  afin de participer à l'organisation des différents événements tels que : 'BEYOND THE HORIZON' vol 2 & 3 et 'TECH DAY- 1st & 2nd edition' et autre.... , cette merveilleuse expérience a nourrit ma passion pour la science et m'a poussé les limites de ma compréhension du monde qui nous entoure et ma créativité  , ce qui m'a aidé à  développer mes compétences dans ces domaines fascinants.",
    fb: "#",
    insta: "#",
    linkedin:
      "https://www.linkedin.com/in/ikram-tifardine-7138712b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
    position: "Trésorier",
    image: ikramImage,
  },
  {
    id: 7,
    name: "Abderahman el bouhadi",
    descriptionIndiv:
      "Abderrahmane El-bouhadi, i am 20 years old from agadir, currently an engineering student at the national school of applied science located in beni mellal, i am an active member at the club “Quark” occupying the position of the creativity manager, very passionate about art.. i love drawing, crafting, and playing music.",
    fb: "",
    insta: "",
    linkedin: "",
    position: "Resp. de créativité",
    image: abdRehmanImage,
  },
  {
    id: 7,
    name: "El Mehdi Ait Said",
    descriptionIndiv:
      "Mehdi Ait Said, étudiant en première année du cycle préparatoire à l'ENSA BM, actuellement Responsable de l'équipe de créativité au sein du Club Quark. Notre objectif principal au sein du club est de favoriser l'épanouissement créatif et l'exploration des talents des étudiants dans le domaine de la technologie. Cela se traduit par la stimulation d'idées innovantes et la création d'un environnement propice à l'expression de la créativité",
    fb: "",
    insta: "",
    linkedin: "",
    position: "V-Re de créativité",
    image: mehdiImage,
  },
];

// Composant Card pour afficher un membre de l'équipe
const TeamMemberCard = ({ member }) => {
  return (
    // <>
    //   <div class="ui card">
    //     <div class="ui  right slide masked reveal image ">
    //       <img
    //         src={member.image}
    //         class="visible content"
    //         // style={{ height: "150px" }}
    //       />
    //       <img
    //         src={member.image}
    //         class="hidden content"
    //         // style={{ height: "150px" }}
    //       />
    //     </div>
    //     <div class="content">
    //       <a class="header">{member.name}</a>
    //       <div class="meta">
    //         <span class="date">{member.position}</span>
    //       </div>
    //     </div>
    //     <div class="extra content">
    //       <a>
    //         <i class="users icon"></i>
    //         <TeamDrawer
    //           name={member.name}
    //           descriptionIndiv={member.descriptionIndiv}
    //         />
    //       </a>
    //     </div>
    //   </div>
    // </>
    <Box
      h={200}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow={"md"}
      borderTop={"4px solid"}
      borderColor={"#EEE4B1"}
      _hover={{ bg: "#EEE4B1", transform: "scale(1.02)" }}
      overflow="hidden"
    >
      <Image
        position="revert-layer"
        p={1}
        borderRadius={10}
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
      // borderTop={"4px solid"}
      borderRadius={8}
      p={6}
      // borderColor={"#EEE4B1"}
    >
      <Box m={2}>
        <Heading textAlign="center" as="h2" size="xl" mb="8">
          Members de bureau
        </Heading>
        <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 8 }} spacing={3}>
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
