import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import EventGride from "./EventGride";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Empty } from "antd";

function EventsSection() {
  const [eventts, setEventts] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/event").then((res) => {
      setEventts(res.data);
    });
  }, []);

  return (
    <Box m={5} p={5}>
      <Heading p={5} textAlign={"center"} mb={10}>
        Evenements
      </Heading>
      <SimpleGrid columns={{ base: 2, sm: 3, lg: 4 }}>
        {eventts.length > 0 ? (
          eventts.map((event) => (
            <Box mt={4}>
              <EventGride
                name={event.name}
                description={event.description}
                imageUrl={event.imgUrl}
              />
            </Box>
          ))
        ) : (
          <Box>
            <Empty />
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
}

export default EventsSection;
