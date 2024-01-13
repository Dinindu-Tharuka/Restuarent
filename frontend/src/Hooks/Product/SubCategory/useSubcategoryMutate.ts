import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubCategory } from "../../../Generics/interfaces";
import { REQUEST } from "../../../Generics/constants";
import subCategoryService from "../../../services/store/sub-category-service";

const useSubcategoryMutate = (
  onSuccessfull: (subCategory: SubCategory) => void,
  requestType: string,
  category_id: number
) => {
  const queryClient = useQueryClient();

  const subCategory = useMutation<SubCategory, Error, SubCategory>({
    mutationFn: (subCategory: SubCategory) => {
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
        queryKey: ["products"],
      });

      

      onSuccessfull(savedProduct);
    },
  });

  return subCategory;
};

export default useSubcategoryMutate;
