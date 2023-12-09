import { Button, List, ListItem, VStack } from "@chakra-ui/react";

const SidePanel = () => {
  const panelItems = ["Dashboard", "Reports"];
  return (
    <List height="100%" spacing={5}>
      {panelItems.map((item) => (
        <ListItem width="100%">
          <Button width='100%' height='10vh' borderRadius={50} _hover={{
            background:'#fc839f'
          }}>{item}</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SidePanel;
