import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  const tabs = ["1H", "1D", "1W", "1M"];

  return (
    <Box bg="white" borderRadius="xl" p="6" mt="6">
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            gap={2}
            align={{ base: "flex-start", sm: "center" }}
            flexDir={{ base: "column", sm: "row" }}
          >
            <HStack>
              <Text fontSize="2xl" fontWeight="medium">
                22.39401000
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button>
            <HStack gap="1">
              <Icon as={AiFillPlusCircle} />
              <Text>Buy</Text>
            </HStack>
          </Button>
          <Button>
            <HStack gap="1">
              <Icon as={AiOutlineMinusCircle} />
              <Text>Sell</Text>
            </HStack>
          </Button>
        </HStack>
      </Flex>

      <Tabs.Root defaultValue="1H" variant="plain" mt="4">
        <Flex justify="end">
          <Tabs.List bg="black.5" p="3px" borderRadius="6">
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab}
                value={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
                _selected={{ bg: "white" }}
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Flex>

        {tabs.map((tab) => (
          <Tabs.Content key={tab} value={tab}>
           
<Image w="100%" h="180px" objectFit="contain" src="/images/Graph.png" mt="1rem" alt="graph" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Box>
  );
};

export default PriceSection;