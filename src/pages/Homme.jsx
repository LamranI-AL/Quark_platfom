import TeamSection from "../components/Team";
import TeamDescriptionSection from "../components/Equipes";
import HeroSection from "../components/HeroSection";
import { Box, Center } from "@chakra-ui/react";
import Event from "../components/Event";
import EventsSectionForHome from "../components/EventForHome";
import Footer from "../components/Footer";

const Homme = () => {
  return (
    <>
      <Box mt={5}>
        <HeroSection />
      </Box>

      <section>
        <TeamDescriptionSection />
      </section>

      <section>
        <EventsSectionForHome />{" "}
      </section>

      <section>
        <TeamSection />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Homme;
