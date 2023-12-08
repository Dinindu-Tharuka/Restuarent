import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

import { RiAdminFill } from "react-icons/ri";
import AdminMainPage from "./AdminMainPage";

const AdminPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <IconButton
      icon={<RiAdminFill/>}
      aria-label="admin"
      onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign='center'>Admin Panel</DrawerHeader>
          <AdminMainPage/>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AdminPanel;
