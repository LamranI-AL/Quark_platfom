import { Card } from "antd";
import ModelTasck from "./ModelTasck";
import { Box, Image } from "@chakra-ui/react";

const EventGride = ({ imageUrl, name, description }) => {
  const { Meta } = Card;
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <a
            href="https://www.linkedin.com/company/quark-ensabm"
            target="_blank"
          >
            <Image height={270} w={300} alt={name} src={imageUrl} />
          </a>
        }
      >
        <Box mb={5}>
          <a href="https://www.instagram.com/quark.ensabm/" target="_blank">
            <Meta title={name} description="www.instagram.com/quark.ensabm" />
          </a>
        </Box>

        <ModelTasck
          title={name}
          buttonName={"détaille"}
          description={description}
        />
      </Card>
    </>
  );
};

export default EventGride;
