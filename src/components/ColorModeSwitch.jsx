import {
  Box,
  Flex,
  HStack,
  Icon,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import "./Css/SwitchColorMode.css";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack>
        {/* <div class="love">
          <input id="switch" type="checkbox"  />
          <label class="love-heart" for="switch">
            <i class="left"></i>
            <i class="right"></i>
            <i class="bottom"></i>
            <div class="round"></div>
          </label> */}
        {/* </div> */}
        {/* <label class="switch">
          <input type="checkbox" onChange={toggleColorMode} />
          <span class="slider"></span>
        </label> */}
        <Switch
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorScheme="green"
        />
        <Text fontSize={"small"}>Dark mode</Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
