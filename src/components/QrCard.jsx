import { Box, Center, Image } from "@chakra-ui/react";
import { QRCode, Button } from "antd";
import React from "react";

const QrCard = () => {
  const downloadQRCode = () => {
    const canvas = document.getElementById("myqrcode").querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "QRCode.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  return (
    <Center height="50vh">
      <Box
        maxW={{ base: "80%", md: "400px" }}
        // bg="white"
        boxShadow="lg"
        rounded="lg"
        p={8}
      >
        <Box textAlign="center" mb={4}>
          <Box m={3} _hover={{ transform: "scale(1.1)" }}>
            <QRCode
              // size={70}
              className="myqrcode"
              value="https://www.instagram.com/quark.ensabm/"
              bgColor={"white"}
            />
          </Box>
          <Button size="sm" color="teal" onClick={downloadQRCode}>
            Download
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default QrCard;
