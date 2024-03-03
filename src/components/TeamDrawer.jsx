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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const TeamDrawer = ({ descriptionIndiv, name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        size={"sm"}
        colorScheme="teal"
        variant="ghost"
        ref={btnRef}
        onClick={onOpen}
      >
        <span>Explore</span>
        <svg width="10px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </Button>

      {/* <button class="button" ref={btnRef} size="md" onClick={onOpen}>
        <MdOutlineTravelExplore className="icon" />
        Explore
      </button> */}

      <Drawer
        isOpen={isOpen}
        size={"lg"}
        placement="right"
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
