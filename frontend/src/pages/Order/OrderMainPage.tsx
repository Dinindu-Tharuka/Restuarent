import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Componants/NavBar";
import { Outlet, useParams } from "react-router-dom";
import Billing from "./Billing/Billing";
import useOrderMutate from "../../Hooks/Orders/useOrderMutate";
import { REQUEST } from "../../Generics/constants";
import { useEffect } from "react";

const OrderMainPage = () => {
  const { table } = useParams();
  const orderMutate = useOrderMutate(() => {
    console.log("craeted order");
  }, REQUEST.POST);

  useEffect(() => {
    const order = {
      table: table,
      customer_name: "customer_name",
      discount: 0,
      is_takeway: false,
      is_order_canceld: false,
      is_order_open: false,
    } ;
    orderMutate.mutate(order);
  }, []);

  return (
    <Grid templateAreas={`"nav nav" "main aside"`}>
      <GridItem area="nav" height="10vh">
        <NavBar />
      </GridItem>
      <GridItem area="main" height="90vh" width={{ lg: "65vw", base: "50vw" }}>
        <Outlet />
      </GridItem>

      <GridItem area="aside" height="90vh" width={{ lg: "35vw", base: "50vw" }}>
        <Billing />
      </GridItem>
    </Grid>
  );
};

export default OrderMainPage;
