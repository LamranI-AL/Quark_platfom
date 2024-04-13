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
  Box,
  Tooltip,
} from "@chakra-ui/react";
import Axios from "axios";
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
      creatUser();
      resetForm();
    }
  };
  const creatUser = () => {
    Axios.post("http://localhost:3001/CreatMessage", {
      name: nameRef.current.value,
      email: emailRef.current.value,
      age: ageRef.current.value,
      message: messageRef.current.value,
    }).then((res) => {
      console.log(res.data);
    });
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
                <Alert key={index} status="error">
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
            Thanks for submitting your Message. checke comment section to see
            it.
          </AlertDescription>
        </Alert>
      ) : (
        ""
      )}
      <FormControl m={5}>
        <Box p={4} boxShadow={"xl"} borderRadius={20} textAlign="center" mt="8">
          <Heading as={"h4"} mb={4}>
            Ajouter un commentaire
          </Heading>

          <FormLabel ml={3}>Name</FormLabel>
          <Input type="name" id="name" ref={nameRef} />
          {displayError("name")}
          <FormLabel ml={3}>Email address</FormLabel>
          <Input type="email" id="email" ref={emailRef} />
          {displayError("email")}
          <FormLabel ml={3}>Age</FormLabel>
          <Input type="text" id="age" ref={ageRef} />
          {displayError("age")}
          <FormLabel ml={3}>Message to Quark</FormLabel>
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
              // colorScheme="#5F374B"
              bgColor="#5F374B"
              color="white"
              onClick={handelSubmit}
              type="submit"
            >
              Ajouter
            </Button>
          </Tooltip>
        </Box>
      </FormControl>
    </>
  );
};

export default FormValidation;
