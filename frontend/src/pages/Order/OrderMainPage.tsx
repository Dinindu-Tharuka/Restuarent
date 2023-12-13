import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Componants/NavBar";
import { Outlet, useParams } from "react-router-dom";
import Billing from "./Billing/Billing";

const OrderMainPage = () => {
  const {table} = useParams()
  
  
  return (
    <Grid templateAreas={`"nav nav" "main aside"`}>
      <GridItem area="nav" height="10vh">
        <NavBar />
      </GridItem>
      <GridItem area="main" height="90vh" width={{ lg: "65vw", base: "50vw" }}>
        <Outlet />
      </GridItem>

      <GridItem
        area="aside"
        height="90vh"
        width={{ lg: "35vw", base: "50vw" }}
      >
        <Billing/>
      </GridItem>
    </Grid>
  );
};

export default OrderMainPage;
