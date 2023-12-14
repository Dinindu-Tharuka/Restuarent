import { useQuery } from '@tanstack/react-query';
import { Product } from '../../../Generics/interfaces';
import allProductService from '../../../services/store/all-product-service';

const useAllProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["all-products"],
    queryFn: () => allProductService.getAll(),
  });
}

export default useAllProducts