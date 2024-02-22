import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import logo from "../assets/V.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";
import { EditIcon, HamburgerIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import { SiCloudfoundry, SiGmail } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineContactPhone } from "react-icons/md";
import { TbHomeInfinity } from "react-icons/tb";
import "./Css/reseauxSocieaux.css";
import { MdOutlineEventNote } from "react-icons/md";

const NavBar = () => {
  return (
    <div>
      <Flex pl={2}>
        <Flex p={2}>
          <Flex>
            <Box>
              <SiGmail color="purple" />
            </Box>
            <Text fontSize={"x-small"} pl={1}>
              quark.ensabm@gmail.com
            </Text>
          </Flex>
          <Flex pl={3}>
            <Box>
              <SiCloudfoundry color="purple" />
            </Box>
            <Text fontSize={"x-small"}>Mghila,Beni mellal</Text>
          </Flex>
        </Flex>
        <Spacer />
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          <Box m={1}>
            <button class="btn">
              <SlSocialFacebook color="purple" />
            </button>
          </Box>
          <Box m={1}>
            <a href="https://www.linkedin.com/company/93078211/admin/feed/posts/">
              <button class="btn">
                <TiSocialLinkedin color="purple" />
              </button>
            </a>
          </Box>

          <Box m={1}>
            <a href="https://www.instagram.com/quark.ensabm/">
              <button class="btn">
                <TiSocialInstagram color="purple" />
              </button>
            </a>
          </Box>
        </Flex>
      </Flex>
      <Flex as="nav">
        <Box boxSize="50px" ml={5}>
          <Link to={"/"}>
            <Image src={logo} />
          </Link>
        </Box>
        <Spacer />
        <Flex pl={5} m={1}>
          <Box pl={5} m={1}>
            <TbHomeInfinity />
          </Box>
          <Link to={"/"}>Home</Link>
        </Flex>
        <Flex justifyContent={"space-around"} pl={5} m={1}>
          <Box mt={1} mr={1}>
            <TbListDetails />
          </Box>
          <Link to={"/details"}>Details</Link>
        </Flex>

        <Flex justifyContent={"space-around"} pl={5} m={1}>
          <Box mt={1} mr={1}>
            <MdOutlineEventNote />
          </Box>
          <Link to={"/Events"}>Evenements</Link>
        </Flex>

        <Flex pl={5} m={1}>
          <Box mt={1} mr={1}>
            <MdOutlineContactPhone />
          </Box>
          <Link to={"/contact"}>Contact us</Link>
        </Flex>
        <Spacer />
        <Box m={1}>
          <ColorModeSwitch />
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
