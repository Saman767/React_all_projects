
import React from 'react'
import { Box, Icon, Stack,HStack ,Text, Heading} from '@chakra-ui/react' 
import { MdDashboardCustomize } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";
import{BiSupport} from "react-icons/bi"
import { Link } from 'react-router-dom';
const SideNav = () => {
 const navlinks =[
     {
       icon: MdDashboardCustomize ,
       text:"Dashboard",
       link:"/",
     } ,
     {
       icon: BsArrowDownUp ,
       text:"Transactions",
       link:"/Transaction",
     }  
      ]
    return (
<Stack bg="white "justify="space-between"  w={{
  base:"full",
  lg:"16rem"
}} h="100vh" boxShadow={{
  base:"none",
  lg:"lg"
}}

 
>
   <Box>
     <Heading textAlign="center" fontsize="20px "as="h1"  pt="56px">@DoSomeCoding</Heading>
  <Box mt="6" mx="3">
     {
    navlinks.map((nav)=>
        (
          <Link to={nav.link}   key={nav.text}>
          <HStack
          borderRadius="10px"
          py="3"
          px="4"
          mx="12px"
        
          _hover={{
            bg:"#F3F3F7",
            color:"#797E82",
          }}
         
          >
          <Icon as={nav.icon}/>
          <Text fontSize="14px" fontWeight="medium"
          color="#797E82"
          
          
          >{nav.text}</Text>
          </HStack>
          </Link>
        )) }
  </Box>
   </Box>
 <Box mt="6" mx="3" mb="6">
     <Link to="/support">
     <HStack
          borderRadius="10px"
          py="3"
          px="4"
          mx="12px"
          
          _hover={{
            bg:"#F3F3F7",
            color:"#797E82",
          }}
         
          >
          <Icon as={BiSupport}/>
          <Text fontSize="14px" fontWeight="medium"
          color="#797E82">Support</Text>
          </HStack>
     </Link>
 </Box>

</Stack>
    
  
  )
}

export default SideNav