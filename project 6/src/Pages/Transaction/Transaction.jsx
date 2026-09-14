import React from "react";
import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  Badge,
  Tabs,
  InputGroup,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import TransactionTable from "./component/TransactionTable";

const Transaction = () => {
  const tabs = [
    { name: "All", value: "all", count: 349 },
    { name: "Deposit", value: "deposit", count: 114 },
    { name: "Withdraw", value: "withdraw", count: 55 },
    { name: "Trade", value: "trade", count: 50 },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button>
          <Icon as={AiOutlineDownload} mr="2" /> Export CSV
        </Button>
      </Flex>

      <Card.Root borderRadius="1rem">
        <Card.Body p="4">
          <Tabs.Root defaultValue="all" variant="line">
            <Flex justify="space-between" align="center" mb="4" wrap="wrap" gap="4">
              <Tabs.List>
                <HStack gap="2">
                  {tabs.map((tab) => (
                    <Tabs.Trigger key={tab.value} value={tab.value} pb="3">
                      <HStack gap="2">
                        <span>{tab.name}</span>
                        <Badge variant="solid" colorPalette="gray" borderRadius="full">
                          {tab.count}
                        </Badge>
                      </HStack>
                    </Tabs.Trigger>
                  ))}
                </HStack>
              </Tabs.List>

              <InputGroup startElement={<Icon as={BsSearch} />} maxW="200px">
                <Input placeholder="Search..." />
              </InputGroup>
            </Flex>

            {tabs.map((tab) => (
              <Tabs.Content key={tab.value} value={tab.value}>
                <TransactionTable />
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </Card.Body>
      </Card.Root>
    </DashboardLayout>
  );
};

export default Transaction;