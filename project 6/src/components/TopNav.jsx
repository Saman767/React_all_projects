import {  Heading,Button, Menu, HStack, Box, Icon,Portal } from '@chakra-ui/react'
import { FaRegUserCircle } from "react-icons/fa";
import React from 'react'
import { IoIosMenu } from "react-icons/io";

const TopNav = ({title,onOpen}) => {
  return (
   <Box px="4" bg="white">
     <HStack maxW="70rem" boxShadow="xl" h="16" justify="space-between" mx="auto" >
    <Icon as={IoIosMenu} onClick={() => {
  console.log("Hamburger clicked!");
  onOpen();
}} display={{
  base: "block",
  lg: "none"
}} />
      
            <Heading fontWeight="medium">{title} </Heading>
            <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          <Icon as={FaRegUserCircle} fontSize="24px"/>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">logout</Menu.Item>
            <Menu.Item value="new-file">support</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
            
        
    </HStack>
   </Box>
  )
}

export default TopNav