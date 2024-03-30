import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import EventGride from "./EventGride";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./Css/buuton.css";

function EventsSectionForHome() {
  // Données d'exemple pour les événements avec leurs URL d'images
  const [eventts, setEventts] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/event").then((res) => {
      setEventts(res.data);
    });
  }, []);

  const events = [
    {
      id: 1,
      name: "Tech Day V2.0",
      description:
        "La deuxième édition de l'événement Microsoft sur le thème de l'it et dev en utilisant les dernières technologies de Microsoft. Les club Quark et club industrie4.0 inaugurera l'événement en accueillant l'un des experts de Microsoft qui guidera pas à pas les conférences. De plus, ils partageront avec les participants leurs parcours professionnels et expériences, avec une surprise spéciale annonçant les dernières innovations introduites par Microsoft, notamment dans les domaines de l'it et du développement.",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E22AQEs_gQqWFGOMg/feedshare-shrink_1280/0/1707999677363?e=1710979200&v=beta&t=M4SpYd2n55ZAk0GynWP1jPgnZn4rp3qaKR9gpg7Ecl4",
    },
    {
      id: 4,
      name: "Tech Day ",
      description:
        "Cet événement promet une immersion instructive dans le monde de la programmation et du développement, tout en offrant des conseils pratiques pour votre future carrière dans le domaine. Nous sommes impatients de vous accueillir à nouveau, chers informaticiens 🧑‍💻",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E22AQEi0Ni9YMEZuA/feedshare-shrink_1280/0/1706908619002?e=1710979200&v=beta&t=K-YslygG5MaSPnI0dWEHn08EXowAaP0vzor0YgWVtyw",
    },
    {
      id: 7,
      name: "Tech Day V1.0",
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQFfo8CJwtQupw/feedshare-shrink_1280/0/1677280145242?e=1710979200&v=beta&t=MQOwht7FspONfu7YDg0rh0Bswx5xY5VoiBPZuNU_YKw",
    },
  ];

  return (
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
  );
}

export default EventsSectionForHome;
