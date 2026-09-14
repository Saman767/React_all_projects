import React from 'react'
import {Box, Container, Flex} from '@chakra-ui/react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import { useDisclosure } from '@chakra-ui/react'
import SideDrawer from './SideDrawer'
const DashboardLayout = ({title,children}) => {
  const { open, onClose, onOpen } = useDisclosure();

  return (
   <Flex>

<Box
display={{
    base: "none",   // permanent sidebar mobile pe hidden
    lg: "block"
  }}
boxShadow={{
  base:"none",
  lg:"lg"
}}


>
  <SideNav /> 

</Box>

             <SideDrawer  isOpen={open} onClose={onClose} />
           <Box flexGrow={1}>
               <TopNav title={title}  onOpen={onOpen}/>
               <Container mt="6" maxW="70rem" >{children}</Container>
           </Box>
         
        </Flex>
  )
}

export default DashboardLayout