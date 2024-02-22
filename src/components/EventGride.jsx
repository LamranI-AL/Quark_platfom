import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import PopoverCm from "./Popover";
import { Link } from "react-router-dom";
import "./Css/Card.css";

const EventGride = ({ imageUrl, name, description }) => {
  return (
    <>
      <div class="card">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="card-inner">
          <Box>
            <Image boxSize={220} borderRadius={10} src={imageUrl} />
          </Box>
          <Box>
            <Heading size="md"> {name}</Heading>
          </Box>
        </div>
      </div>
    </>
  );
};

export default EventGride;
