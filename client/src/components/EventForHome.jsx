import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import EventGride from "./EventGride";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./Css/buuton.css";
import { motion } from "framer-motion";

function EventsSectionForHome() {
  const variants = {
    initial: { opacity: 0, y: 20 },
    inView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.4 },
    },
  };
  const eventts = [
    {
      _id: {
        $oid: "65df3e8b80120bcd7dfd41db",
      },
      name: "Tech Day V2.0",
      description:
        " la deuxième édition de l'événement Microsoft sur le thème de l'it et dev en utilisant les dernières technologies de Microsoft. Le club Quark et le club industrie4.0 inaugurera l'événement en accueillant l'un des experts de Microsoft qui guidera pas à pas les conférences. De plus, ils partageront avec les participants leurs parcours professionnels et expériences, avec une surprise spéciale annonçant les dernières innovations introduites par Microsoft, notamment dans les domaines de l'it et du développement. L'occasion se déroulera le 17 février. L'ENSABM invitera un groupe de représentants des villes de la région de Béni Mellal-Kénitra et d'autres de différentes villes de différentes régions, incluant présidents, professeurs, chefs d'entreprise, ingénieurs, banquiers et spécialistes du marketing. Partage, développement, passion et innovation sont les mots-clés de cet événement. Notre objectif principal est de promouvoir les compétences des jeunes Marocains intéressés par l'it à travers leur sens de la créativité et leur capacité à relever tous les défis afin de créer et innover confortablement.",
      imgUrl:
        "https://media.licdn.com/dms/image/D4E22AQEs_gQqWFGOMg/feedshare-shrink_1280/0/1707999677363?e=1712188800&v=beta&t=sDW8foRc4EVbqEvKy0omPLIxxCMbMzXtbe-Fw66pl8s",
    },
    {
      _id: {
        $oid: "65df3ee880120bcd7dfd41dc",
      },
      name: "WORKSHOP",
      description:
        "Cet événement promet une immersion instructive dans le monde de la programmation et du développement, tout en offrant des conseils pratiques pour votre future carrière dans le domaine. Nous sommes impatients de vous accueillir à nouveau, chers informaticiens 🧑‍💻\nRavi de vous annoncer notre collaboration avec le club @industrie__4.0 ! Rejoignez-nous dans cette aventure passionnante 🔥",
      imgUrl:
        "https://media.licdn.com/dms/image/D4E22AQEi0Ni9YMEZuA/feedshare-shrink_800/0/1706908619002?e=1712188800&v=beta&t=OzjeftZCoaMU2Vosx44eZG4R-upOOsHD8hffWQ0SJfc",
    },
    {
      _id: {
        $oid: "65e328e1b2fe632c4a63fd45",
      },
      name: "BEYOND THE HORIZON V3.0",
      description:
        "Embarking on a captivating scientific odyssey with Club Quark and a team of esteemed professors and experts at the trappist observatory in oukaimden. Amidst the majestic mountains, our journey unfolded with the revelation of telescopic wonders, delving into the vast mysteries of the cosmos. Engaging conferences on astronomy turned the landscape into our open-air classroom, where discussions illuminated celestial secrets. As the sun bid adieu, painting the sky in hues of twilight, we seamlessly transitioned into a time of camaraderie, forging connections and reveling in the astronomical marvels. Oukaimden, a realm of discovery, etched indelible memories beneath the glittering tapestry of the universe 🪐✨",
      imgUrl:
        "https://media.licdn.com/dms/image/D4E22AQGd5ExBpU2-6Q/feedshare-shrink_1280/0/1704051078716?e=1712188800&v=beta&t=qoiOsJFSBHIQovs3RTS6As4MogooB03T_4u626NDHXk",
    },
    {
      _id: {
        $oid: "65e3295bb2fe632c4a63fd46",
      },
      name: "rabat festival",
      description:
        "Embark on a three-day odyssey in Rabat from the 4th to the 6th of May, where the realms of astronomy, mathematics and physics converged in a celebration of knowledge and exploration! This extraordinary event unfolded with an array of workshops hosted by renowned engineering schools, each offering a hands-on journey into the intricacies of various disciplines.The city buzzed with the intellectual fervor as experts and enthusiasts alike delved into conferences that unveiled the latest breakthroughs and theories in astronomy, mathematics, and physics. From unraveling the mysteries of the cosmos to navigating the complexities of mathematical algorithms, every session was a stepping stone in our collective quest for understanding the universe. 😍",
      imgUrl:
        "https://media.licdn.com/dms/image/D4E22AQFiSbSWwLpcaw/feedshare-shrink_800/0/1682759208866?e=1712188800&v=beta&t=UubFzL3cVqroU_f-a3QA3aDPdYfWGDWEodEpa5NfXWI",
    },
  ];
  return (
    <motion.div initial="initial" variants={variants} whileInView="inView">
      <Box p={5} m={3}>
        <Heading p={8} textAlign={"center"}>
          Last Evenements
        </Heading>
        <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={1}>
          {eventts
            .map((event) => (
              <Box m={5}>
                <EventGride
                  name={event.name}
                  description={event.description}
                  imageUrl={event.imgUrl}
                />
              </Box>
            ))
            .slice(0, 4)}
        </SimpleGrid>
        <Box textAlign="center" mb={5}>
          <Link to={"/Events"}>
            <Button className="button-86" color={"white"}>
              Événements +
            </Button>
          </Link>
        </Box>
      </Box>
    </motion.div>
  );
}

export default EventsSectionForHome;
