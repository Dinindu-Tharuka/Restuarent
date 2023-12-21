import { useQuery } from "@tanstack/react-query";
import { Order } from "../../Generics/interfaces";
import orderService from "../../services/Order/order-service";



const useOrders = () => {
  return useQuery<Order[], Error>({
    queryKey: ["orders"],
    queryFn: () => orderService.getAll(),
    refetchInterval:500
  });
}

export default useOrders