import {  CloseButton, Drawer, Portal , } from "@chakra-ui/react"
import SideNav from "./SideNav";


const SideDrawer = ({ isOpen, onClose }) => {  
     // props se lo, useState hata do
 console.log("SideDrawer isOpen value:", isOpen); 
  return (
    <Drawer.Root open={isOpen} placement="left" onOpenChange={(e) => !e.open && onClose()}>
      {/* Drawer.Trigger wala button ab yahan zaroori nahi, 
          kyunki menu icon (TopNav mein) drawer kholega */}
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
           <SideNav/>
            <Drawer.Body>
              
 </Drawer.Body>
            
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" onClick={onClose} />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default SideDrawer