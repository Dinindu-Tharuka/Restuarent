import { useQuery } from "@tanstack/react-query";
import { SubCategory } from "../../../Generics/interfaces";
import subCategoryService from "../../../services/store/sub-category-service";

interface Query {
  category_id: number;
}

const useSubCategory = (query:Query) => {
  return useQuery<SubCategory[], Error>({
    queryKey: ["sub-category", query],
    queryFn: () => subCategoryService(query.category_id).getAll(),
  });
};

export default useSubCategory;
