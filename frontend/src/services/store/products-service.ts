import { Product } from "../../Generics/interfaces";
import { HttpQueryService } from "../http-service";

const productsService = (category_id:number) => {
  return new HttpQueryService<Product>(`/store/product-categories/${category_id}/sub-category/`);
};

export default productsService
