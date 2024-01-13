import { useQuery } from "@tanstack/react-query";
import subCategoryService from "../../../services/store/sub-category-service";
import { SubCategories } from "../../../Generics/interfaces";

interface Query {
  category_id: number;
}

const useSubCategory = (query:Query) => {
  return useQuery<SubCategories[], Error>({
    queryKey: ["sub-category", query],
    queryFn: () => subCategoryService(query.category_id).getAll(),
  });
};

export default useSubCategory;
