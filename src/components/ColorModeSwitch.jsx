import {
  Box,
  Flex,
  HStack,
  Icon,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorScheme="green"
        />
        <Text as="b" fontSize={"small"}>
          Dark mode
        </Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
