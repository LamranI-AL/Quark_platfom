import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
//les donnes
const MessagesMemberData = [
  {
    id: 1,
    MemberName: "othmane lamrani alaoui",
    Message:
      "Quark is not just a name , it's a life style🏛️, a way of thinking 💭.",
    BureauPeriode: "2023-2024",
  },
  {
    id: 2,
    MemberName: "youssef kerrom",
    Message: "Équipe Technique",
    BureauPeriode: "2023-2024",
  },
  {
    id: 2,
    MemberName: "merrouk aymane ",
    Message: "Équipe Technique",
    BureauPeriode: "2023-2024",
  },
];
const MembesrMessages = () => {
  return MessagesMemberData.map((member) => {
    return (
      <Card>
        <CardHeader>
          <Heading size="md"> {member.MemberName}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{member.Message}</Text>
        </CardBody>
        <CardFooter>
          <Button>{member.BureauPeriode}</Button>
        </CardFooter>
      </Card>
    );
  });
};

const Message = () => {
  return (
    <SimpleGrid p={5} columns={{ base: 2, lg: 6 }} spacing={3}>
      <MembesrMessages />
    </SimpleGrid>
  );
};

export default Message;
