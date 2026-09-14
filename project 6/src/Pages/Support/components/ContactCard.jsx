import React from "react";
import {
  Card,
  Checkbox,
  Field,
  HStack,
  Input,
  Box,
  Stack,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card.Root p="6" borderRadius="1rem">
      <Card.Body p="0">
        <Stack gap="6">
          <Text fontWeight="medium" fontSize="sm">
            You will receive response within 24 hours of time of submit.
          </Text>

          <HStack
            gap="4"
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input placeholder="Enter Your Name.." />
            </Field.Root>

            <Field.Root>
              <Field.Label>Surname</Field.Label>
              <Input placeholder="Enter Your Surname.." />
            </Field.Root>
          </HStack>

          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input type="email" placeholder="Enter Your Email.." />
          </Field.Root>

          <Field.Root>
            <Field.Label>Message</Field.Label>
            <Textarea placeholder="Enter Your Message.." />
          </Field.Root>

          <Checkbox.Root defaultChecked>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label fontSize="xs">
              I agree with{" "}
              <Box as="span" color="purple.500" fontWeight="medium">
                Terms & Conditions.
              </Box>
            </Checkbox.Label>
          </Checkbox.Root>

          <Stack gap="3">
            <Button fontSize="sm" colorPalette="purple">
              Send a Message
            </Button>
            <Button fontSize="sm" variant="subtle" colorPalette="gray">
              Book a Meeting
            </Button>
          </Stack>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default ContactCard;