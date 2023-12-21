import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { TbToolsKitchen } from "react-icons/tb";
import KitchenOrderShow from "./KitchenOrderShow";
const KitchenShowModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <>
      <IconButton icon={<TbToolsKitchen/>} ref={btnRef} onClick={onOpen} aria-label="open kitchen"/>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Kitchen</DrawerHeader>

          <DrawerBody>
            <KitchenOrderShow/>
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default KitchenShowModel;
