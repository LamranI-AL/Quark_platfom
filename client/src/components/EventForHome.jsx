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
  const [eventts, setEventts] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/event").then((res) => {
      setEventts(res.data);
    });
  }, []);

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
