import { useQuery } from '@tanstack/react-query';
import { Product } from '../../../Generics/interfaces';
import allProductService from '../../../services/store/all-product-service';


interface Query{
  startDate?:string;
  endDate?:string;
}

const useAllProducts = (query?:Query) => {
  return useQuery<Product[], Error>({
    queryKey: ["all-products", query],
    queryFn: () => allProductService.getAll({
      params:{startDate:query?.startDate, endDate:query?.endDate}
    }),
  });
}

export default useAllProducts