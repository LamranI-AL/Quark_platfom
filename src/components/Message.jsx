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
const MembesrMessages = ({ users }) => {
  return users.map((user) => {
    return (
      <Card key={user.id}>
        <CardHeader>
          <Heading size="md"> {user.name}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{user.message}</Text>
        </CardBody>
        <CardFooter>
          <Button size={"sm"}>{user.email}</Button>
        </CardFooter>
      </Card>
    );
  });
};

const Message = ({ users }) => {
  return (
    <>
      <Heading textAlign="center" as="h2" size="xl" mb="8">
        Comment section
      </Heading>
      <SimpleGrid p={5} columns={{ base: 1, lg: 1 }} spacing={3}>
        <MembesrMessages users={users} />
      </SimpleGrid>
    </>
  );
};

export default Message;
