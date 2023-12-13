import { Order } from "../../../Generics/interfaces";

export const isOrderOpen = (orders: Order[], table: string) => {
  return orders.some((order) => order.is_order_open && table === order.table);
};

export const findCurrentOrder = (orders:Order[], table:string)=>{
  const currentOrder = orders.find(order => order.is_order_open && table === order.table)

  if (currentOrder !== undefined){
    return currentOrder
  }   
  return {} as Order
}
