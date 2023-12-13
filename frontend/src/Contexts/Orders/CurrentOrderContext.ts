import React from "react";
import { Order } from "../../Generics/interfaces";

interface CurrentOrderContextType {
    currentOrder:Order;
}

const CurrentOrderContext = React.createContext<CurrentOrderContextType>(
  {} as CurrentOrderContextType
);

export default CurrentOrderContext;