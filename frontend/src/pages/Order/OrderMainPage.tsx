import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Componants/NavBar";
import { Outlet, useParams } from "react-router-dom";
import Billing from "./Billing/Billing";
import useOrderMutate from "../../Hooks/Orders/useOrderMutate";
import { REQUEST } from "../../Generics/constants";
import { useEffect, useState } from "react";
import useOrders from "../../Hooks/Orders/useOrders";
import { findCurrentOrder, isOrderOpen } from "./Functions/functions";
import { Order } from "../../Generics/interfaces";
import CurrentOrderContext from "../../Contexts/Orders/CurrentOrderContext";

const OrderMainPage = () => {
  // for context
  const [currentOrder, setCurrentOrder] = useState<Order>({} as Order);

  const { table } = useParams();
  const orderMutate = useOrderMutate(( order) => {
    setCurrentOrder(order)
    console.log("craeted order");
  }, REQUEST.POST);

  const { data: orders } = useOrders();
  

  useEffect(() => {
    if (
      orders !== undefined &&
      table !== undefined &&
      !isOrderOpen(orders, table) 
    ) {
      
      let order = {
        table: table,
        customer_name: "customer_name",
        discount: 0,
        is_takeway: false,
        is_order_canceld: false,
        is_order_open: true,
      };
      if (table === 'T000'){

        order = {...order, is_takeway: true,}
      }
      orderMutate.mutate(order);
    } else {
      if (orders && table) {
        setCurrentOrder(findCurrentOrder(orders, table));
      }
    }
  }, []);

  return (
    <CurrentOrderContext.Provider value={{ currentOrder, setCurrentOrder }}>
      <Grid templateAreas={`"nav nav" "main aside"`}>
        <GridItem area="nav" height="10vh">
          <NavBar />
        </GridItem>
        <GridItem
          area="main"
          height="90vh"
          width={{ lg: "65vw", base: "50vw" }}
        >
          <Outlet />
        </GridItem>

        <GridItem
          area="aside"
          height="90vh"
          width={{ lg: "35vw", base: "50vw" }}
        >
          <Billing />
        </GridItem>
      </Grid>
    </CurrentOrderContext.Provider>
  );
};

export default OrderMainPage;
