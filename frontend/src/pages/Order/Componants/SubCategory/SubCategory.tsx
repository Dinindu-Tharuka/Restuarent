import {
  Button,
  CloseButton,
  HStack,
  Input,
  SimpleGrid,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { COLOURS, REQUEST, SIZES } from "../../../../Generics/constants";
import { useNavigate, useParams } from "react-router-dom";
import useSubCategory from "../../../../Hooks/Product/SubCategory/useSubCategory";
import { useState } from "react";
import useUserMe from "../../../../Hooks/User/useUserMe";
import useSubcategoryMutate from "../../../../Hooks/Product/SubCategory/useSubcategoryMutate";
import { SubCategories } from "../../../../Generics/interfaces";
import SubCategoryModel from "./SubCategoryModel";
import AddSubCategory from "./AddSubCategory/AddSubCategory";

const SubCategory = () => {
  const navigate = useNavigate();
  // filter categories
  const [categoryFilter, setCategoryFilter] = useState("");

  // fetch user
  const { userMe } = useUserMe();

  // fetch SubCategories
  const {table , id } = useParams();
  const { data: subCategories } = useSubCategory({ category_id: parseInt(id) });

  // for muatting objects
  const mutateSubCategories = useSubcategoryMutate(
    () => {},
    REQUEST.DELETE,
    parseInt(id)
  );

  const isAvailble = subCategories?.length;

  const onClickDelete = (subCategory: SubCategories) => {
    mutateSubCategories.mutate(subCategory);
  };

  // onclick product id
  const onClick = (subCategoryId:number)=>{    
      navigate(`/dining/order/${table}/product/${subCategoryId}`);

    
  }
  return (
    <>
      <HStack justifyContent="right" marginBottom={5}>
        <AddSubCategory category_id={parseInt(id)} />
      </HStack>
      {isAvailble !== undefined && isAvailble > 0 ? (
        <>
          <Input
            placeholder="Search"
            onChange={(e) => setCategoryFilter(e.currentTarget.value)}
            marginBottom={5}
          />

          <SimpleGrid columns={{ lg: 5, base: 3 }} spacing={2}>
            {subCategories
              .filter((subCategory) =>
                subCategory.title.startsWith(categoryFilter)
              )
              .map((subCategory, index) => (
                <HStack>
                  <Button
                    height={SIZES.CATEGORY_ITEM_HEIGHT}
                    onClick={() => onClick(subCategory.id)}
                    width="100%"
                    key={index}
                    _hover={{
                      bg: COLOURS.TABLE_BUTTON_HOVER_COLOR,
                      color: COLOURS.MAIN_PAGE_WHITE,
                    }}
                    whiteSpace="pre-line"
                  >
                    {subCategory.title}
                  </Button>
                  <VStack>
                    {userMe.is_superuser && (
                      <CloseButton onClick={() => onClickDelete(subCategory)} />
                    )}
                    {userMe.is_superuser && (
                      <SubCategoryModel
                        subCategory={subCategory}
                        categoryId={parseInt(id)}
                      />
                    )}
                  </VStack>
                </HStack>
              ))}
          </SimpleGrid>
        </>
      ) : (
        <Text>No Sub Categories</Text>
      )}
    </>
  );
};

export default SubCategory;
