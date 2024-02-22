import {
  Box,
  Center,
  Grid,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import EventGride from "./EventGride";

function EventsSection() {
  // Données d'exemple pour les événements avec leurs URL d'images
  const events = [
    {
      id: 21,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E22AQEs_gQqWFGOMg/feedshare-shrink_1280/0/1707999677363?e=1710979200&v=beta&t=M4SpYd2n55ZAk0GynWP1jPgnZn4rp3qaKR9gpg7Ecl4",
    },
    {
      id: 22,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E22AQHpJGryrUUAqA/feedshare-shrink_1280/0/1707999678104?e=1710979200&v=beta&t=biOhGagV6N6cBMjvNSE0tkHLdFo21O9dkxt6H5SKeKM",
    },
    {
      id: 23,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E22AQGnvfexV5pvbA/feedshare-shrink_1280/0/1707999677353?e=1710979200&v=beta&t=XESxaxLkZghR_qGCKXBDIrXmBgwBYflYTzz_YcgXw9M",
    },
    {
      id: 1,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E22AQEi0Ni9YMEZuA/feedshare-shrink_1280/0/1706908619002?e=1710979200&v=beta&t=K-YslygG5MaSPnI0dWEHn08EXowAaP0vzor0YgWVtyw",
    },
    {
      id: 24,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E22AQGd5ExBpU2-6Q/feedshare-shrink_1280/0/1704051078716?e=1710979200&v=beta&t=pluu2yBTEwop48hfEhUS33eGZlpRAsJCeavBeum9EmQ",
    },
    {
      id: 2,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQF5u9zQbZ4E6g/feedshare-shrink_1280/0/1677280367937?e=1710979200&v=beta&t=Z04P-hBthNUj76hKPsOPDl0FnFtiQP8QTgaJ1AbIqbo",
    },
    {
      id: 3,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQGANR0AJxbo2A/feedshare-shrink_1280/0/1677280121782?e=1710979200&v=beta&t=R6zf8HuW6PfPvHKvGOPamkhkpm815H0s4OvqSZSvKFA",
    },
    {
      id: 4,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQGCcZNWuZvMzg/feedshare-shrink_1280/0/1677280135688?e=1710979200&v=beta&t=EoAwU3Lp8z0uyYqbrZ58Jzkkg9SqZRfgM_zEo_XunSA",
    },
    {
      id: 5,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQFfo8CJwtQupw/feedshare-shrink_1280/0/1677280145242?e=1710979200&v=beta&t=MQOwht7FspONfu7YDg0rh0Bswx5xY5VoiBPZuNU_YKw",
    },
    {
      id: 6,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQFPfKh7aEqDCA/feedshare-shrink_1280/0/1677279882071?e=1710979200&v=beta&t=JK1ZK79lQOKFXeAF8hHnz77lghYO5IvgCBezgV6gjMI",
    },
    {
      id: 7,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQHEHw3KlcUrew/feedshare-shrink_1280/0/1677279610486?e=1710979200&v=beta&t=zRMFIjyZ5T8E5DNWuHzSpWsyjIExuwMTGsaSG341-vw",
    },
    {
      id: 8,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQE4t0vfPUt0kg/feedshare-shrink_1280/0/1677279605698?e=1710979200&v=beta&t=5ttOay5NxCwP1SMfYUY0LOqqeSWxdPTgRCS0L5jn7_g",
    },
    {
      id: 9,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQHdwf35d5K90w/feedshare-shrink_2048_1536/0/1677272529013?e=1710979200&v=beta&t=q7wlNrTjY48kyHH3NP27LX7mVGWaR760Ydp2vw1Vcp4",
    },
    {
      id: 10,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQFEvTMOHPpDpQ/feedshare-shrink_1280/0/1677280363920?e=1710979200&v=beta&t=8nCEWjDtLjzKK8fU3CoPdemPMmZ_RLUp30LDUutSmTo",
    },
    {
      id: 11,
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQGDCMRqBstiqw/feedshare-shrink_2048_1536/0/1677272506872?e=1710979200&v=beta&t=sBuKqhjR8IfmRvyEpop51XhssMzMr9yWW-18ramtixU",
    },
    {
      id: 12,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQHfw5LCIXyHSA/feedshare-shrink_2048_1536/0/1677272460883?e=1710979200&v=beta&t=Q58hjWKABqZurUh7x3SZ1EBJP8RH1ifkFaxwantblJk",
    },
    {
      id: 13,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQFEcRTKGT1JsA/feedshare-shrink_2048_1536/0/1677272383366?e=1710979200&v=beta&t=BvG_V1IFq_CUkq51zlYHJsx07W8QWdXDzl3wkJJ9vMQ",
    },
    {
      id: 14,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQG55tGcKUQGQQ/feedshare-shrink_2048_1536/0/1677272519107?e=1710979200&v=beta&t=SUaPrCyGvxabrwn_sDP5F9vSK9JMOBeaxVln2uvusko",
    },
    {
      id: 15,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQFEcRTKGT1JsA/feedshare-shrink_2048_1536/0/1677272383366?e=1710979200&v=beta&t=BvG_V1IFq_CUkq51zlYHJsx07W8QWdXDzl3wkJJ9vMQ",
    },
    {
      id: 16,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQGx1zcjNaL4Sw/feedshare-shrink_2048_1536/0/1677272340051?e=1710979200&v=beta&t=jBI2GUhZKTTrixHvQYurkBv_9qpHJgFuxnLovUFVB0k",
    },
    {
      id: 17,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQHxFxtxC9eLUw/feedshare-shrink_2048_1536/0/1677272311326?e=1710979200&v=beta&t=bz3JHSqk3VFPfXSJlv_BHubLRWmVq2Ejxw6nRBVpAIo",
    },
    {
      id: 18,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQGcgOcJeQwOhg/feedshare-shrink_2048_1536/0/1677271474726?e=1710979200&v=beta&t=gNCzqfDkEcK0bNBy4M8yT3PamD2_su0zHJETbWB7SBQ",
    },
    {
      id: 19,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQFkpdhpfztDKA/feedshare-shrink_2048_1536/0/1677271394796?e=1710979200&v=beta&t=hcekkufZp0GHzMojjrUAp3Xdi1FfTkBsewLotlrxG3g",
    },
    {
      id: 20,
      description: "",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E22AQHZtcYmlBfD3g/feedshare-shrink_800/0/1677268559652?e=1710979200&v=beta&t=aq6d-DhAp7gH7I307I5jMT3PBhOkAqTqksZcm5aoPzo",
    },
  ];

  return (
    <Box m={5} p={5}>
      <Heading p={5} textAlign={"center"} mb={10}>
        Evenements
      </Heading>
      <SimpleGrid pl={5} columns={{ base: 2, md: 4, lg: 5 }} spacing={6}>
        {events.map((event) => (
          <Box>
            <EventGride
              name={event.name}
              description={event.description}
              imageUrl={event.imageUrl}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default EventsSection;
