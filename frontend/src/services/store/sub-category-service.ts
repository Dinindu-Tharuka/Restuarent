import { Product, SubCategory } from "../../Generics/interfaces";
import { HttpQueryService } from "../http-service";

const subCategoryService = (category_id:number) => {
  return new HttpQueryService<SubCategory>(`/store/sub-category/${category_id}/products/`);
};

export default subCategoryService