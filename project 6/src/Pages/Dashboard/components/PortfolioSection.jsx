import { HStack, Stack , Icon, Text, Tag, Button} from '@chakra-ui/react'
import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const PortfolioSection = () => {
  return ( 
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6"
    align={{
      base:"flex-start",
      xl:"center",
    }}
    flexDir={{
      base:"column",
      xl:"row"
    }}
   spacing={{
    base:4,
    xl:"0",
   }} 
    
    
    >
       <HStack spacing={{
        base:0,
        xl:16,
       }}
        align={{
      base:"flex-start",
      xl:"center",
    }}
    flexDir={{
      base:"column",
      xl:"row"
    }}
       
       >
        <Stack>
        <HStack color="black.80">
           <Text fontSize="sm" >
             Total Portfolio Value
           </Text>
            <Icon as= {FaCircleInfo}></Icon>
        </HStack>
       <Text textStyle="h2" fontWeight="medium">RS. 112,312.24</Text>
        </Stack> 
        <Stack>
        <HStack color="black.80">
           <Text fontSize="sm" >
            Wallet balance
           </Text>
        </HStack >
       <HStack spacing={2}
        align={{
      base:"flex-start",
      sm:"center",
    }}
    flexDir={{
      base:"column",
      sm:"row"
    }}
       >
         <HStack>
            <Text textStyle="h2" fontWeight="medium">22.39401000</Text><Tag.Root>
  <Tag.Label>BTC</Tag.Label>
</Tag.Root>
        </HStack>
          <HStack>
            <Text textStyle="h2" fontWeight="medium">RS.1,200,00</Text><Tag.Root>
  <Tag.Label>PKR</Tag.Label>
</Tag.Root>
        </HStack>
       </HStack>
       
        </Stack>
         </HStack>
        
         <HStack>
         <Button>
  <HStack gap="2">
    <Icon as={AiOutlineArrowDown} />
    <Text>Deposit</Text>
  </HStack>
</Button>
          <Button>
  <HStack gap="2">
    <Icon as={AiOutlineArrowUp} />
    <Text>Deposit</Text>
  </HStack>
</Button> 
        </HStack>
         </HStack>
  )
}

export default PortfolioSection