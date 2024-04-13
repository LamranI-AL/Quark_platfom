import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import EventGride from "./EventGride";
import { Empty } from "antd";

function EventsSection() {
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
    {
      _id: {
        $oid: "65e32a08b2fe632c4a63fd47",
      },
      name: "Tech Day V1.0",
      description:
        "Le club Quark souffle sa première bougie et organise sa 1ère edition sous le thème It et Dev en se servant des dernières technologies de Microsoft . Notre club a fait appel à des experts de Microsoft qui se déplaceront de l’étranger pour animer des conférences . Ces derniers vont venir avec leur expertise et leur savoir faire pour partager avec les participants leurs expériences et leur parcours professionnel et surtout leur annoncer les dernières innovations introduites par Microsoft en matière de technologie et précisément dans l’It et le Développement🖥️.",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQHZ5wwderzcPw/feedshare-shrink_1280/0/1676831682569?e=1712188800&v=beta&t=cBz3fwrXLz7B3v9QJlg7MFCMGyPRNXnKoZZ4wJn9nrM",
    },
    {
      _id: {
        $oid: "65e337deb2fe632c4a63fd48",
      },
      name: "Astro Day FES",
      description:
        " ASTRONOMY DAY 6 AT ENSA FEZ 🎉\n📅 Mark your calendars for 24/02/2024 as we embark on a journey through the wonders of the universe! 🌠\nJoin us for a day filled with celestial marvels, captivating presentations, and hands-on activities that will ignite your passion for the cosmos! 🌟✨\nExplore the mysteries of distant galaxies, marvel at the beauty of our solar system, and dive into the fascinating world of astrophysics. 🌌💫\n\nWhether you’re a seasoned astronomer or just beginning your cosmic voyage, Astronomy Day at ENSA Fez promises an unforgettable experience for all! 🚀🌙",
      imgUrl:
        "https://drive.google.com/drive/folders/103jUlGxhBJqMFLyqDHeqVJIezWUxH0yv",
    },
    {
      _id: {
        $oid: "65e33958b2fe632c4a63fd49",
      },
      name: "Tech day2 V1.0",
      description:
        " M. Yassine Driouich, notre inspirant Senior DotNet Developer & MVP Microsoft, est de retour à l'ENSA BM pour une journée 100% informatique. Rejoignez-nous pour une conférence et un workshop où il partagera les premières étapes de la programmation, la création d'un clean code, les design patterns essentiels, Git, l'agilité, ainsi que les technologies en demande sur le marché du travail.\nMais ce n'est pas tout ! M. Yassine vous fera vivre son expérience dans le monde professionnel avec sa spécialité .NET. L'événement culminera avec un workshop 100% pratique, axé sur la création d'une application à l'aide d'ASP.NET Core Web API (DotNet8).",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQF5u9zQbZ4E6g/feedshare-shrink_800/0/1677280367937?e=1712188800&v=beta&t=5d0wokicrmEogg4Ye3SsYaEgnhcldHbRNApWw1QcP3g",
    },
    {
      _id: {
        $oid: "65e339e9b2fe632c4a63fd4a",
      },
      name: "BEYOND THE HORIZON V2.0",
      description:
        " La sortie la plus attendue et tant espérée de l’année est enfin arrivée ! ✨Préparez-vous à être époustouflé lors de « BEYOND THE HORIZON V.2 » à Oukaimden, Marrakech, le 9 et 10 décembre 2022. C’est le moment où le ciel se transforme en une scène enchanteresse, où chaque étoile devient une danseuse flamboyante pour vous faire vivre les meilleurs souvenirs de votre vie et vous détendre du stress des études et contrôles .🌟",
      imgUrl:
        "https://media.licdn.com/dms/image/D4E22AQGd5ExBpU2-6Q/feedshare-shrink_1280/0/1704051078716?e=1712188800&v=beta&t=qoiOsJFSBHIQovs3RTS6As4MogooB03T_4u626NDHXk",
    },
    {
      _id: {
        $oid: "65e33b48b2fe632c4a63fd4b",
      },
      name: "Équipe technique Retro",
      description:
        "On vous présente cette fois-ci l’équipe technique👨‍🔧.Cette équipe qui regroupe plus ce que 90 étudiants dans 3 cellules (programmation, design, marketing). Le choix de ces équipes a été fait pour donner l’opportunité aux futurs ingénieurs de l’ENSABM à développer leurs hard skills et approfondir leurs connaissances dans le domaine informatique, la création artistique et l’entrepreneuriat 🦾. Pour cela, plusieurs ateliers ont été organisés pour créer un atmosphère d’échange entre les étudiants de notre école afin de partager leurs expériences et leurs connaissances. Les adhérents du club ont bénéficié d’une formation de Python 🐍 d’une formation dans le marketing digital 📈… Un grand merci à tout nos partenaires qui nous ont aidé afin d’arriver à nos but et à tout ce succès.We are the best 💜🤍 ",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQG55tGcKUQGQQ/feedshare-shrink_2048_1536/0/1677272519107?e=1712188800&v=beta&t=XHObWwYWB9kzPc-OgNEqCl840DkyGSB8Zzy2osUo6_k",
    },
    {
      _id: {
        $oid: "65e33ccbb2fe632c4a63fd4c",
      },
      name: "Équipe technique Retro2",
      description:
        "On vous présente cette fois-ci l’équipe technique👨‍🔧.Cette équipe qui regroupe plus ce que 90 étudiants dans 3 cellules (programmation, design, marketing). Le choix de ces équipes a été fait pour donner l’opportunité aux futurs ingénieurs de l’ENSABM à développer leurs hard skills et approfondir leurs connaissances dans le domaine informatique, la création artistique et l’entrepreneuriat 🦾. Pour cela, plusieurs ateliers ont été organisés pour créer un atmosphère d’échange entre les étudiants de notre école afin de partager leurs expériences et leurs connaissances. Les adhérents du club ont bénéficié d’une formation de Python 🐍 d’une formation dans le marketing digital 📈… Un grand merci à tout nos partenaires qui nous ont aidé afin d’arriver à nos but et à tout ce succès.We are the best 💜🤍 ",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQGDCMRqBstiqw/feedshare-shrink_2048_1536/0/1677272506872?e=1712188800&v=beta&t=WYGrFuJZQLNd5kv3JydbqGPTW9IvWdylmOLjA0D0qmY",
    },
    {
      _id: {
        $oid: "65e33d54b2fe632c4a63fd4d",
      },
      name: "L'equipe de créativité Retro",
      description:
        "L'equipe de créativité nous étonne chaque fois avec ses activités uniques et fascinantes. Cette fois-ci, c'était une activité à 100% artistique. Un atelier de peinture a été organisé par l'équipe, en dehors de notre école et exactement à Ain asserdoune. La nature, la beauté du lieu a inspiré les peintres et leur a permis d'ajouter une touche particulière sur leurs tableaux. Les participants ont bénéficié de tout le matériel dont ils avaient besoin afin d'assurer le succès et la réussite de l'activité. Des tableaux avec des différents sujet à touche naturel astronomique et artistique, chacun a dessiné son propre tableau et s'est exprimé librement. On tient à dire Un grand merci pour les participants et surtout pour les bureau du Club Quark qui a fait de son mieux pour la reussite de l'activité. On est vraiment fier de vous.\nWe are the best !💜🤍",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQHdwf35d5K90w/feedshare-shrink_2048_1536/0/1677272529013?e=1712188800&v=beta&t=mYVsL27e479R1fXfDsb-7g5DIahGIcH3rv_GRtOanCI",
    },
    {
      _id: {
        $oid: "65e33e18b2fe632c4a63fd4e",
      },
      name: "L'equipe de créativité Retro2",
      description:
        "L'equipe de créativité nous étonne chaque fois avec ses activités uniques et fascinantes. Cette fois-ci, c'était une activité à 100% artistique. Un atelier de peinture a été organisé par l'équipe, en dehors de notre école et exactement à Ain asserdoune. La nature, la beauté du lieu a inspiré les peintres et leur a permis d'ajouter une touche particulière sur leurs tableaux. Les participants ont bénéficié de tout le matériel dont ils avaient besoin afin d'assurer le succès et la réussite de l'activité. Des tableaux avec des différents sujet à touche naturel astronomique et artistique, chacun a dessiné son propre tableau et s'est exprimé librement. On tient à dire Un grand merci pour les participants et surtout pour les bureau du Club Quark qui a fait de son mieux pour la reussite de l'activité. On est vraiment fier de vous.\nWe are the best !💜🤍",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQFPmc0z5TZpRw/feedshare-shrink_2048_1536/0/1677272450796?e=1712188800&v=beta&t=hhS9WbQboOQrw181iWMKOW9id6cDt05IMRG1GCkgULc",
    },
    {
      _id: {
        $oid: "65e33e2eb2fe632c4a63fd4f",
      },
      name: "Équipe de recherche scientifique Retro",
      description:
        "La recherche c’est la clé du développement.\nConscient de l’importance de la recherche scientifique, le club quark a décidé de créer une équipe qui a pour mission faire des recherches qui peuvent aider les autres équipes à bien réussir leurs projets scientifiques surtout dans les projets astronomiques du club🔭🪐. Plus ce que 60 étudiant qui se réunit chaque semaine pour partager leurs dernières recherches et les résultats qui ont trouvé 👨🏻‍💻C’est toujours impressionnant de voir des jeunes passionnés par la recherche scientifique vu la grande importance et le grand qui joue dans le développement de notre pays . 🇲🇦\nOn vous remercie toutes et tous pour le sens de responsabilité et votre ponctualité que vous continuez toujours à montrer durant les ateliers organisés.🦾\n.\nWe are the best 🤍💜",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQHfw5LCIXyHSA/feedshare-shrink_2048_1536/0/1677272460883?e=1712188800&v=beta&t=3uOLfNka9YPGMO0a0L9wnNGBFFUQYft7gFVhYypdV1k",
    },
    {
      _id: {
        $oid: "65e33ed8b2fe632c4a63fd50",
      },
      name: "Équipe de recherche scientifique Retro",
      description:
        "La recherche c’est la clé du développement.\nConscient de l’importance de la recherche scientifique, le club quark a décidé de créer une équipe qui a pour mission faire des recherches qui peuvent aider les autres équipes à bien réussir leurs projets scientifiques surtout dans les projets astronomiques du club🔭🪐. Plus ce que 60 étudiant qui se réunit chaque semaine pour partager leurs dernières recherches et les résultats qui ont trouvé 👨🏻‍💻C’est toujours impressionnant de voir des jeunes passionnés par la recherche scientifique vu la grande importance et le grand qui joue dans le développement de notre pays . 🇲🇦\nOn vous remercie toutes et tous pour le sens de responsabilité et votre ponctualité que vous continuez toujours à montrer durant les ateliers organisés.🦾\n.\nWe are the best 🤍💜",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQE_FuQPhpEQwA/feedshare-shrink_2048_1536/0/1677272428375?e=1712188800&v=beta&t=Lf8C8OfNhNkbula2Q-4hRPdLKHmxnq25XLIRqLK7m7I",
    },
    {
      _id: {
        $oid: "65e33f1bb2fe632c4a63fd51",
      },
      name: "Anniversary of the club 🎉",
      description: "Anniversary of the club 🎉\nWe are the best 🤍💜",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQFIGO8dfWpK8g/feedshare-shrink_2048_1536/0/1677272372159?e=1712188800&v=beta&t=Zx5PhZyEB-L16IYA7O2xi58EaKQsnbUhkPspqDT2dDI",
    },
    {
      _id: {
        $oid: "65e33fa1b2fe632c4a63fd52",
      },
      name: "olympique inter-club",
      description:
        "Le 20 mars était une date très spéciale pour les étudiants de l’ENSABM. Les clubs de l’école se sont confrontés ( ⚽️ 🏀 🏃 )pour pouvoir gagner le grand prix 🏆 de la première édition de cette compétition. Notre club avait le grand plaisir d’organiser un tel événement en collaboration avec le club sport de l’ensabm.\nUn grand merci pour les personnes qui ont donné de leur temps et leur énergie pour la réussite de ces olympiades.\n🕛 Le 20 mars 2022\n📍lycée hassan 2 béni mellal",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQGx1zcjNaL4Sw/feedshare-shrink_2048_1536/0/1677272340051?e=1712188800&v=beta&t=EEnj6uJ9qWC66JTVjBCDj-VZWqET6gtC0Y_AgfMev6s",
    },
    {
      _id: {
        $oid: "65e33ff4b2fe632c4a63fd53",
      },
      name: "barbecue pic-nic",
      description:
        "Quoi de mieux qu'un pique-nique entre potes ?\nDans le cadre des activités amusantes organisées par le club Quark. Cette fois-ci la destination était les grandes montagnes de béni mellal🏔 pour faire un petit barbecue pic-nic pour se détendre et se relaxer du stress des études😌.\nWe are the best 💜🤍\n.\n🕘 Le 13 février 2022 à partir de 9h30\n📍forêt d'Ain Asserdoune",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQHxFxtxC9eLUw/feedshare-shrink_2048_1536/0/1677272311326?e=1712188800&v=beta&t=6DQAfo1bHC1Ci4yPnIwPdP611mN9GRLz1YlP-hIun5Y",
    },
    {
      _id: {
        $oid: "65e342d8b2fe632c4a63fd54",
      },
      name: "soirée d'astronomie",
      description:
        "Club quark ENSA BENI MELLAL a l'honneur de vous présenter la soirée d'astronomie organisée en collaboration avec le lycée HASSAN II, un événement éblouissant -1er de son genre- à ne pas rater.\n\nWe are the best 🤍💜",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQHdTye8nayj6w/feedshare-shrink_800/0/1676557166793?e=1712188800&v=beta&t=zO6DybRfFcYk7mvO41b8ESgY2mUNjn5Udv2NLs5CSlY",
    },
    {
      _id: {
        $oid: "65e3431cb2fe632c4a63fd55",
      },
      name: "soirée d'astronomie ",
      description:
        "Club quark ENSA BENI MELLAL a l'honneur de vous présenter la soirée d'astronomie organisée en collaboration avec le lycée HASSAN II, un événement éblouissant -1er de son genre- à ne pas rater.\n\nWe are the best 🤍💜",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQGjVMs7cCkcdA/feedshare-shrink_2048_1536/0/1676556679519?e=1712188800&v=beta&t=0cfuKcntnVeJxw7QVIwGt2aT57P_wEHb23OG5WpA0Ek",
    },
    {
      _id: {
        $oid: "65e34491b2fe632c4a63fd56",
      },
      name: "BEYOND THE HORIZON V1.0",
      description:
        "Club QUARK, de l’ENSA Béni Mellal, a organisé une sortie scientifique/culturelle le samedi 5 juin 2021 encadrée par le Professeur Mohamed Sabil et l'administration de l’ENSABM (Marrakech – Oukeimden – Ourika).\nL’arrivée à Marrakech, la destination était Atlas Golf, la visite du musée qui contient divers fossiles et pierres, sans oublier la bibliothèque extraordinaire.\nUne formation riche et pratique sur le Télescope (le plus grand télescope à l'Afrique du Nord) et sur le Radio télescope.\n• Oukeimden un paysage magnifique des hautes montagnes et du ciel clair. Le sommet où nous avons découvert l'observatoire, ded nouveaux télescopes, la lecture du ciel, une magnifique soirée astronomique.\n• Ourika, les paysages agréables, époustouflants et air frais. Ce voyage été un témoin de beaux moments scientifiques et culturels, l'ambiance était plein d'amour et de respect, ainsi que d'harmonie.\nhashtag#QUARK_ENSABM\nWe are the best !! 👊🏻\n> Discover more details in our highlights in instagrame  @quark.ensabm",
      imgUrl:
        "https://media.licdn.com/dms/image/C4E22AQEDXXt-sqXBuA/feedshare-shrink_800/0/1676557608389?e=1712188800&v=beta&t=jcFGptMF0GtqXXdVHLl2v1eB0i0SiNqXfsjD7V2q5pA",
    },
  ];

  return (
    <Box m={5} p={5}>
      <Heading p={5} textAlign={"center"} mb={10}>
        Evenements
      </Heading>
      <SimpleGrid columns={{ base: 2, sm: 3, lg: 4 }} spacing={2}>
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
