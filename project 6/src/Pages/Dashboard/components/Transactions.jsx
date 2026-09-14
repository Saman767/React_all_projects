import {
  Box,
  Button,
  Separator,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCard"; // Casing matched with 'Chakra' folder
import { FaRupeeSign } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";
import { Fragment } from "react";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "PKR Deposit",
      amount: "+ Rs.81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      text: "PKR Deposit",
      amount: "+ RS.81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="gray.600" fontWeight="medium">
        Recent Transactions
      </Text>
      <Stack gap={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Separator />}
            <Flex gap="4" align="center">
              <Grid
                placeItems="center"
                bg="gray.100"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon} boxSize={5} />
              </Grid>
              <Flex justify="space-between" w="full" align="center">
                <Stack gap={0}>
                  <Text fontSize="md" fontWeight="bold">
                    {transaction.text}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text fontSize="md" fontWeight="bold">
                  {transaction.amount}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" mt="6" colorPalette="gray" variant="subtle">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;