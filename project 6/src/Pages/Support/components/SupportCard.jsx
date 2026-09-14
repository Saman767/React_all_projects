import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap="6"
      justify="space-between"
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem" gap="3">
        <Icon as={icon} boxSize={6} color="purple.600" />
        <Text fontSize="3xl" fontWeight="bold" lineHeight="tight">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
