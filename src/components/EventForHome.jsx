import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PopoverCm from "./Popover";
import EventGride from "./EventGride";

function EventsSectionForHome() {
  // Données d'exemple pour les événements avec leurs URL d'images
  const events = [
    {
      id: 1,
      name: "tech_day",
      description:
        "La deuxième édition de l'événement Microsoft sur le thème de l'it et dev en utilisant les dernières technologies de Microsoft. Les club Quark et club industrie4.0 inaugurera l'événement en accueillant l'un des experts de Microsoft qui guidera pas à pas les conférences. De plus, ils partageront avec les participants leurs parcours professionnels et expériences, avec une surprise spéciale annonçant les dernières innovations introduites par Microsoft, notamment dans les domaines de l'it et du développement.",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E22AQEs_gQqWFGOMg/feedshare-shrink_1280/0/1707999677363?e=1710979200&v=beta&t=M4SpYd2n55ZAk0GynWP1jPgnZn4rp3qaKR9gpg7Ecl4",
    },
    {
      id: 2,
      name: "2",
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E22AQHpJGryrUUAqA/feedshare-shrink_1280/0/1707999678104?e=1710979200&v=beta&t=biOhGagV6N6cBMjvNSE0tkHLdFo21O9dkxt6H5SKeKM",
    },
    {
      id: 3,
      name: "3",
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E22AQGnvfexV5pvbA/feedshare-shrink_1280/0/1707999677353?e=1710979200&v=beta&t=XESxaxLkZghR_qGCKXBDIrXmBgwBYflYTzz_YcgXw9M",
    },
    {
      id: 4,
      name: "tech_day_Yassin",
      description:
        "Cet événement promet une immersion instructive dans le monde de la programmation et du développement, tout en offrant des conseils pratiques pour votre future carrière dans le domaine. Nous sommes impatients de vous accueillir à nouveau, chers informaticiens 🧑‍💻",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E22AQEi0Ni9YMEZuA/feedshare-shrink_1280/0/1706908619002?e=1710979200&v=beta&t=K-YslygG5MaSPnI0dWEHn08EXowAaP0vzor0YgWVtyw",
    },
    {
      id: 5,
      name: "5",
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQGANR0AJxbo2A/feedshare-shrink_1280/0/1677280121782?e=1710979200&v=beta&t=R6zf8HuW6PfPvHKvGOPamkhkpm815H0s4OvqSZSvKFA",
    },
    {
      id: 6,
      name: "6",
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQGCcZNWuZvMzg/feedshare-shrink_1280/0/1677280135688?e=1710979200&v=beta&t=EoAwU3Lp8z0uyYqbrZ58Jzkkg9SqZRfgM_zEo_XunSA",
    },
    {
      id: 7,
      name: "7",
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
      <SimpleGrid p={5} columns={{ base: 2, md: 4, lg: 5 }} spacing={1}>
        {events.map((event) => (
          <Box m={5}>
            <EventGride
              name={event.name}
              description={event.description}
              imageUrl={event.imageUrl}
            />
          </Box>
        ))}
      </SimpleGrid>
      <Box textAlign="center" mb={5}>
        <Link to={"/Events"}>
          <Button>More Events</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default EventsSectionForHome;
