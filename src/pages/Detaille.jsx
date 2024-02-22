import React from "react";
import EventsSection from "../components/Event";
import CellulesEquipe from "../components/CellulesEquipe";
import CellulesEquipeTech from "../components/CellulesEquipeTech";
import CellulesEquipeCreatititi from "../components/CellulesEquipeCreativiti";
import Footer from "../components/Footer";

const Detaille = () => {
  return (
    <>
      <section>
        <CellulesEquipe />
      </section>
      <section>
        <CellulesEquipeTech />
      </section>

      <section>
        <CellulesEquipeCreatititi />
      </section>

      {/* <section id="events">
        <EventsSection />
      </section> */}

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Detaille;
