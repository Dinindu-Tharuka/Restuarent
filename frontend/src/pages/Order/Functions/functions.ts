import { Order } from "../../../Generics/interfaces";

export const isOrderOpen = (orders: Order[], table: string) => {
  return orders.some((order) => order.is_order_open && table === order.table);
};
