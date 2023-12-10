import { Button, List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SidePanel = () => {
  const panelItems = ["Dashboard", "Reports"];
  const routes = ['/admin', '/admin/reports']

  
  return (
    <List height="100%" spacing={5}>
      {panelItems.map((item, index) => (
        <ListItem width="100%">
          <Button
            width="100%"
            height="10vh"
            borderRadius={50}
            _hover={{
              background: "#fc839f",
            }}
          >
            <Link to={routes[index]}>{item}</Link>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SidePanel;
