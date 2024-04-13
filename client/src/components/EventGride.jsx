import ModelTasck from "./ModelTasck";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

const EventGride = ({ name, description }) => {
  // const { Meta } = Card;
  return (
    <>
      <Card p={6} boxShadow={"xl"}>
        <CardHeader my={5}>
          <Heading size="md" color="#430A5D">
            {" "}
            {name}{" "}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text color="#430A5D">
            <a href="http://www.instagram.com/quark.ensabm." target="_blank">
              www.instagram.com/quark.ensabm.
            </a>
          </Text>
        </CardBody>
        <CardFooter my={3}>
          <ModelTasck
            title={name}
            buttonName={"détaille"}
            description={description}
          />
        </CardFooter>
      </Card>
    </>
  );
};

export default EventGride;
