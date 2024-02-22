import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "./Css/Buuton2.css";
import { MdOutlineTravelExplore } from "react-icons/md";

const TeamDrawer = ({ descriptionIndiv, name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <button
        // m={2}
        class="button"
        ref={btnRef}
        size="md"
        onClick={onOpen}
      >
        <MdOutlineTravelExplore className="icon" />
        Explore
      </button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{name}</DrawerHeader>

          <DrawerBody>
            <Image />
            <Text>{descriptionIndiv}</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal">contact</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TeamDrawer;
