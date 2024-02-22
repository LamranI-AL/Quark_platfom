import React, { useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Alert,
  AlertIcon,
  Checkbox,
  Button,
  Heading,
  Textarea,
  AlertTitle,
  AlertDescription,
  List,
  ListItem,
  Center,
  Box,
  Tooltip,
} from "@chakra-ui/react";
const FormValidation = () => {
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const [isValidFormFinal, setIsFormValideFinal] = useState(false);
  const [errors, setErrors] = useState({});
  const [isDesplyEroors, setIsDesplyEroors] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const messageRef = useRef();
  const acceptRef = useRef();
  useEffect(() => {
    getData();
  }, [errors]);

  const getData = () => {
    setErrors([]);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    const age = ageRef.current.value;
    const isAcceptCondition = acceptRef.current.checked;
    if (name.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, ...{ name: " name feild" } };
      });
    }
    if (age.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, ...{ age: " age feild" } };
      });
    }
    if (email.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, ...{ email: " email feild" } };
      });
    } else if (!email.match(/^\S+@\S+.\S$/)) {
      setErrors((prevStat) => {
        return { ...prevStat, ...{ email: " email not formated" } };
      });
    }
    if (message.trim() === "") {
      setErrors((prevStat) => {
        return { ...prevStat, ...{ message: " message feild" } };
      });
    }
    if (!isAcceptCondition) {
      setErrors((prevStat) => {
        return { ...prevStat, ...{ Condition: " Not checked" } };
      });
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setIsDesplyEroors(true);
    getData();
    if (Object.keys(errors).length === 0) {
      setIsFormValideFinal(true);
    }
    if (isValidFormFinal === true) {
      resetForm();
    }
  };

  const resetForm = () => {
    nameRef.current.value = "";
    ageRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    acceptRef.current.checked = false;
  };

  const getError = (feildName) => {
    return errors[feildName];
  };
  const hasError = (feildName) => {
    return getError(feildName) !== undefined;
  };
  const displayError = (feildName) => {
    const feild = document.querySelector(`#${feildName}`);
    // console.log(feild);
    if (hasError(feildName)) {
      return (
        <>
          {/* {(feild.style.border = "2px solide red")} */}
          <FormHelperText color={"red"}>{getError(feildName)}</FormHelperText>
        </>
      );
    } else {
      return (
        <FormHelperText color={"green"}>
          We'll never share your {feildName}
        </FormHelperText>
      );
    }
  };

  return (
    <>
      {Object.keys(errors).length > 0 && isDesplyEroors ? (
        <List>
          {Object.keys(errors).length > 0
            ? Object.entries(errors).map((eror, index) => (
                <Alert status="error">
                  <AlertIcon />
                  <ListItem key={index}>{eror}</ListItem>
                </Alert>
              ))
            : ""}
        </List>
      ) : (
        ""
      )}
      {isValidFormFinal && Object.keys(errors).length === 0 ? (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Message submitted!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for submitting your Message. Our team will get back to you
            soon.
          </AlertDescription>
        </Alert>
      ) : (
        ""
      )}
      <FormControl m={5}>
        <Box textAlign="center" mt="8">
          <Heading>Contactez-nous</Heading>

          <FormLabel>Name</FormLabel>
          <Input type="name" id="name" ref={nameRef} />
          {displayError("name")}
          <FormLabel>Email address</FormLabel>
          <Input type="email" id="email" ref={emailRef} />
          {displayError("email")}
          <FormLabel>Age</FormLabel>
          <Input type="text" id="age" ref={ageRef} />
          {displayError("age")}
          <FormLabel>Message to Quark</FormLabel>
          <Textarea type="text" id="message" ref={messageRef} />
          {displayError("message")}
          <div>
            <Checkbox id="Condition" ref={acceptRef}>
              {" "}
              Accept all condition{" "}
            </Checkbox>
            {displayError("Condition")}
          </div>
          <Tooltip hasArrow label="send me" bg="teal">
            <Button
              m={10}
              disabled={!isValidFormFinal}
              colorScheme="teal"
              onClick={handelSubmit}
              type="submit"
            >
              envoyer
            </Button>
          </Tooltip>
        </Box>
      </FormControl>
    </>
  );
};

export default FormValidation;
