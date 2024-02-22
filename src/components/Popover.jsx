import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Box,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const PopoverCm = ({ buttonTitle, title, description }) => {
  //   const initialFocusRef = React.useRef();
  return (
    <Popover
      //   initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button size={"sm"} bg={"transparent"}>
          {buttonTitle}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        color="white"
        bg="purple.800"
        borderColor="blue.800"
        w={600}
        ml={10}
      >
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          {title}
        </PopoverHeader>
        <PopoverArrow bg="purple.800" />
        <PopoverCloseButton />
        <PopoverBody>
          <Text size={"sm"}>{description}</Text>
        </PopoverBody>
        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <Box fontSize="sm">quark.ensabm</Box>
          <ButtonGroup size="sm">
            <Button colorScheme="green">
              <Link to={"/contact"}>Setup Message</Link>
            </Button>
            <Button colorScheme="blue">
              <Link to={"/detaille"}>More</Link>
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverCm;
