import React, { useEffect, useState } from "react";
import FormValidation from "../components/FormValidation";
import {
  Box,
  Button,
  Flex,
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

const ContactUs = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/message").then((res) => {
      setUsers(res.data);
    });
  }, [users]);
  console.log(users);
  const imgUrl =
    "https://img.freepik.com/vecteurs-libre/illustration-vectorielle-rencontre-ligne-concept-abstrait-conference-telephonique-rejoindre-groupe-meetup-service-ligne-appel-video-communication-distance-reunion-informelle-metaphore-abstraite-du-reseautage-membres_335657-2920.jpg?w=740&t=st=1708147545~exp=1708148145~hmac=2361d7938507cfa1be0e032a0e6cb874261043021c56ca275c6160617d46eab8";
  const imgUrl1 =
    "https://img.freepik.com/vecteurs-libre/support-client-illustration-design-plat_23-2148887720.jpg?w=740&t=st=1708147677~exp=1708148277~hmac=fc5e69b75efa5d2dd2a2d05b52d7856676a8866d5b60f140f4ec4c327bb14fd3";

  // const creatUser = () => {};
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
              <Text mr={4} mt={3} as="b" fontSize="small">
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

        {/* <Box p={20}>
          
        </Box> */}
      </SignedOut>
      <SignedIn>
        <Flex>
          {isSignedIn && (
            <Text ml={4} as="b" fontSize="x-large">
              Hello {user.fullName}
            </Text>
          )}
          <Spacer />
          <Flex>
            <Box>
              <Button mt={1} size={"sm"} colorScheme="red" variant="ghost">
                <SignOutButton signOutCallback={() => redirect("/contact")} />
              </Button>
            </Box>

            <Flex>
              <Box
                ml={6}
                m={1}
                border="2px solid"
                borderRadius={50}
                borderColor={"purple"}
              >
                <UserButton />
              </Box>
              {isSignedIn && (
                <Text mt={3} as="b" fontSize="small">
                  {user.fullName}
                </Text>
              )}
            </Flex>
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
                  src={imgUrl}
                  alt="Image"
                  w={{ base: "50% ", md: "90%" }}
                  h={{ base: "50% ", md: "90%" }}
                  p={10}
                  m={5}
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
    </div>
  );
};

export default ContactUs;
