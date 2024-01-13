import { useMutation, useQueryClient } from "@tanstack/react-query";
import { REQUEST } from "../../../Generics/constants";
import subCategoryService from "../../../services/store/sub-category-service";
import { SubCategories } from "../../../Generics/interfaces";

const useSubcategoryMutate = (
  onSuccessfull: (subCategory: SubCategories) => void,
  requestType: string,
  category_id: number
) => {
  const queryClient = useQueryClient();

  const subCategory = useMutation<SubCategories, Error, SubCategories>({
    mutationFn: (subCategory: SubCategories) => {
      if (requestType === REQUEST.POST) {
        return subCategoryService(category_id)
          .create(subCategory)
          .then((res) => res.data);
      } else if (requestType === REQUEST.DELETE) {
        return subCategoryService(category_id)
          .delete(subCategory.id)
          .then((res) => res.data);
      }

      return subCategoryService(category_id)
        .update(subCategory, subCategory.id)
        .then((res) => res.data);
    },
    onSuccess: (savedProduct, newProduct) => {
      queryClient.invalidateQueries({
        queryKey: ["sub-category"],
      });

      

      onSuccessfull(savedProduct);
    },
  });

  return subCategory;
};

export default useSubcategoryMutate;
