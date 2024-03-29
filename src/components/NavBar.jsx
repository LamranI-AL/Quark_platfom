import ColorModeSwitch from "./ColorModeSwitch";

import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  MdOutlineEventNote,
  MdOutlineContactPhone,
  MdMenu,
} from "react-icons/md";
import { TbHomeInfinity, TbListDetails } from "react-icons/tb";
import { SiCloudfoundry, SiGmail } from "react-icons/si";
import { TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import "./Css/reseauxSocieaux.css";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div>
      <Flex pl={2}>
        <Flex p={2}>
          <Flex>
            <Box>
              <SiGmail color="#5F374B" />
            </Box>
            <Text fontSize={"x-small"} pl={1}>
              quark.ensabm@gmail.com
            </Text>
          </Flex>
          <Flex pl={3}>
            <Box>
              <SiCloudfoundry color="#5F374B" />
            </Box>
            <Text fontSize={"x-small"}>Mghila,Beni mellal</Text>
          </Flex>
        </Flex>
        <Spacer />
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          <Box m={1}>
            <button class="btn">
              <SlSocialFacebook color="#5F374B" />
            </button>
          </Box>
          <Box m={1}>
            <a
              href="https://www.linkedin.com/company/quark-ensabm"
              target="_blank"
            >
              <button class="btn">
                <TiSocialLinkedin color="#5F374B" />
              </button>
            </a>
          </Box>

          <Box m={1}>
            <a href="https://www.instagram.com/quark.ensabm/" target="_blank">
              <button class="btn">
                <TiSocialInstagram color="#5F374B" />
              </button>
            </a>
          </Box>
        </Flex>
      </Flex>
      <Spacer />
      <Flex justifyContent="flex-end" mx={2}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MdMenu />}
            display={{ base: "flex", md: "none" }} // Show only in small screens
          />
          <MenuList>
            <MenuItem>
              <Flex alignItems="center">
                <Box pl={5} m={1}>
                  <TbHomeInfinity />
                </Box>
                <Link to={"/"}>Accueil</Link>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex alignItems="center">
                <Box pl={5} m={1}>
                  <TbListDetails />
                </Box>
                <Link to={"/details"}>Détails</Link>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex alignItems="center">
                <Box pl={5} m={1}>
                  <MdOutlineEventNote />
                </Box>
                <Link to={"/Events"}>Événements</Link>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex alignItems="center">
                <Box pl={5} m={1}>
                  <MdOutlineContactPhone />
                </Box>
                <Link to={"/contact"}>Contactez-nous</Link>
              </Flex>
            </MenuItem>
            <MenuItem>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* Desktop Menu */}
      {/* <Flex display={{ base: "none", md: "flex" }} alignItems="center"> */}
      <Flex
        position={isSticky ? "fixed" : "relative"}
        bg={isSticky ? "#fff" : "transparent"}
        display={{ base: "none", md: "flex" }}
        top="0"
        left="0"
        right="0"
        p="4"
        alignItems="center"
        zIndex="1000"
        as="nav"
      >
        <Box ml={5}>
          <Link to={"/"}>
            <Text
              as="b"
              fontSize="x-large"
              fontFamily="cursive"
              color="#430A5D"
            >
              Quark
            </Text>
          </Link>
        </Box>
        <Spacer />
        <Flex pl={5} m={1}>
          <Box pl={5} m={1}>
            <TbHomeInfinity />
          </Box>
          <Link to={"/"}>Accueil</Link>
        </Flex>
        <Flex justifyContent={"space-around"} pl={5} m={1}>
          <Box mt={1} mr={1}>
            <TbListDetails />
          </Box>
          <Link to={"/details"}>Détails</Link>
        </Flex>

        <Flex justifyContent={"space-around"} pl={5} m={1}>
          <Box mt={1} mr={1}>
            <MdOutlineEventNote />
          </Box>
          <Link to={"/Events"}>Événements</Link>
        </Flex>

        <Flex pl={5} m={1}>
          <Box mt={1} mr={1}>
            <MdOutlineContactPhone />
          </Box>
          <Link to={"/contact"}>Contactez-nous</Link>
        </Flex>
        <Spacer />

        <SignedOut>
          <Box>
            <Button size={"sm"} colorScheme="teal" variant="ghost" mr={4}>
              <SignInButton />
            </Button>
          </Box>
        </SignedOut>
        <SignedIn>
          <Box>
            <Box mx={4}>
              <UserButton />
            </Box>
          </Box>
        </SignedIn>
        {/* <Box mt={2}>
          <ColorModeSwitch />
        </Box> */}
      </Flex>
    </div>
  );
};

export default NavBar;
