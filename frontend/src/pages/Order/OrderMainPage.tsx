import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Componants/NavBar";

const OrderMainPage = () => {
  return (
    <Grid templateAreas={`"nav nav" "main aside"`}>
      <GridItem area="nav" height="10vh">
        <NavBar />
      </GridItem>
      <GridItem
        area="main"
        height="90vh"
        width={{ lg: "65vw", base: "50vw" }}
      ></GridItem>

      <GridItem
        area="aside"
        height="90vh"
        width={{ lg: "35vw", base: "50vw"}}
      ></GridItem>
    </Grid>
  );
};

export default OrderMainPage;