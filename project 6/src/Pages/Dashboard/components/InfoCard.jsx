import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bgColor={inverted ? "purple.600" : "white"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      {/* Chakra v3 Tag Structure */}
      <Tag.Root
        color={inverted ? "purple.600" : "white"}
        bg={inverted ? "white" : "purple.600"}
        borderRadius="full"
        size="md"
        width="fit-content"
      >
        <Tag.Label>{tagText}</Tag.Label>
      </Tag.Root>

      <Text
        mt="4"
        fontWeight="medium"
        fontSize="lg"
        color={inverted ? "white" : "gray.800"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;