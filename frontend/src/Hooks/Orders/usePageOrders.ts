import { useQuery } from "@tanstack/react-query";
import { Order, PaginationStructure } from "../../Generics/interfaces";
import pageOrderService from "../../services/Order/page-order-service";

const usePageOrders = () => {
  return useQuery<PaginationStructure<Order>, Error>({
    queryKey: ["pageOrders"],
    queryFn: () => pageOrderService.getAll(),
  });
};

export default usePageOrders;
