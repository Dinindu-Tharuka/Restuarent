import { Product } from "../../Generics/interfaces";
import { HttpQueryService } from "../http-service";

const productsService = (sub_category_id:number) => {
  return new HttpQueryService<Product>(`/store/product-sub-categorie/${sub_category_id}/products/`);
};

export default productsService
