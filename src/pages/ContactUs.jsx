import React, { useEffect, useState } from "react";
import FormValidation from "../components/FormValidation";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Message from "../components/Message";
import Axios from "axios";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import "../components/Css/buuton.css";
import { redirect } from "react-router-dom";
import { Empty } from "antd";
import contact from "../assets/imges/Contact.png";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/message").then((res) => {
      setUsers(res.data);
    });
  }, [users]);
  // console.log(users);
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div>
      <SignedOut>
        <Flex>
          <Text color="#474F7A" ml={4} as="b" fontSize="x-large">
            Hello sure Signe in please ,
          </Text>
          <Spacer />
          <Flex>
            <Box>
              <Button colorScheme="teal" variant="ghost">
                <SignInButton />
              </Button>
            </Box>

            <Flex>
              <Box ml={6} m={1}>
                <UserButton />
              </Box>
              <Text mr={4} mt={3} fontSize="small">
                be member
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Flex
            align="center"
            justify="center"
            h="100vh"
            position="relative"
            overflow="hidden"
            p={20}
          >
            <Text color="#474F7A" ml={4} as="b" fontSize="sm">
              Discover the power of Quark ! By signing up, you'll gain access to
              exclusive features and be able to join the conversation through
              comments. Don't miss out on the opportunity to connect with others
              who share your interests—sign up today and be part of our vibrant
              community
            </Text>
          </Flex>
        </motion.div>
      </SignedOut>
      <SignedIn>
        <Flex>
          {isSignedIn && (
            <Heading ml={4} textAlign={"center"} as="b" fontSize="x-large">
              Hello {user.fullName}
            </Heading>
          )}
          <Spacer />
          <Flex>
            <Box>
              <Button mt={1} size={"sm"} colorScheme="red" variant="ghost">
                <SignOutButton signOutCallback={() => redirect("/contact")} />
              </Button>
            </Box>
          </Flex>
        </Flex>

        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SimpleGrid p={5} columns={{ base: 1, lg: 2 }} spacing={4}>
            <Box flex="1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={contact}
                  alt="Image"
                  w={{ base: "50% ", md: "80%" }}
                  h={{ base: "50% ", md: "80%" }}
                  p={10}
                  m={10}
                  objectFit="cover"
                />
              </motion.div>
            </Box>

            <Box flex="1" p="8">
              <FormValidation />
            </Box>
          </SimpleGrid>
          {users.length > 0 ? <Message users={users} /> : <Empty />}
        </motion.div>
      </SignedIn>
      <Footer />
    </div>
  );
};

export default ContactUs;
