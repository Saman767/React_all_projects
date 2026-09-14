import {
  Table,
  Stack,
  Text,
  Badge,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "PKR Deposit",
        tag: "E-Transfer",
      },
      amount: "+Rs. 81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "PKR Withdraw",
        tag: "Wire Transfer",
      },
      amount: "-Rs. 55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Withdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };

  return (
    <Table.ScrollArea>
      <Table.Root variant="line" interactive>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Date & Time</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Amount</Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableData.map((data) => (
            <Table.Row key={data.id}>
              <Table.Cell fontSize="sm" fontWeight="medium">
                {data.id}
              </Table.Cell>

              <Table.Cell>
                <Stack gap="0">
                  <Text fontSize="sm" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {data.time}
                  </Text>
                </Stack>
              </Table.Cell>

              <Table.Cell>
                <Stack gap="0">
                  <Text fontSize="sm" fontWeight="medium">
                    {data.type.name}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {data.type?.tag}
                  </Text>
                </Stack>
              </Table.Cell>

              <Table.Cell fontSize="sm" fontWeight="medium">
                {data.amount}
              </Table.Cell>

              <Table.Cell fontSize="sm" fontWeight="medium">
                <Badge
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                  px="3"
                  py="1"
                >
                  {data.status}
                </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};

export default TransactionTable;