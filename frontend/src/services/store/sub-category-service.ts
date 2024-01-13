import { Product, SubCategories } from "../../Generics/interfaces";
import { HttpQueryService } from "../http-service";

const subCategoryService = (category_id:number) => {
  return new HttpQueryService<SubCategories>(`/store/product-categories/${category_id}/sub-category/`);
};

export default subCategoryService