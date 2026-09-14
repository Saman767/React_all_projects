// CustomCard.jsx (Aap ke custom wrapper component ka setup)
import { Box } from "@chakra-ui/react";

export const CustomCard = ({ children, ...rest }) => {
  return (
    <Box bg="white" borderRadius="xl" p="6" {...rest}>
      {children}
    </Box>
  );
};