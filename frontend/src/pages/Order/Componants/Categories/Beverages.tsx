import {
  Button,
  CloseButton,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { COLOURS, REQUEST, SIZES } from "../../../../Generics/constants";
import { Category } from "../../../../Generics/interfaces";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useCategoryMutate from "../../../../Hooks/Product/Category/useCategoryMutate";
import ItemEdit from "./ItemEdit";
import useUserMe from "../../../../Hooks/User/useUserMe";

interface Props {
  categories: Category[] | undefined;
  table?: string;
}

const Beverages = ({ categories, table }: Props) => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const isAvailble = categories?.filter((category) => !category.is_food).length;
  const navigate = useNavigate();

  const {userMe} = useUserMe()

  const onClick = (category_id: number) => {
    navigate(`/dining/order/${table}/subCategory/${category_id}`);
  };

  // Delete
  const mutateCategory = useCategoryMutate(()=>{}, REQUEST.DELETE)
  const onClickDelete = (date:Category) => {
    mutateCategory.mutate(date)

  };
  return (
    <>
      {isAvailble !== undefined && isAvailble > 0 ? (
        <>
          <Input
            placeholder="Search"
            onChange={(e) => setCategoryFilter(e.currentTarget.value)}
            marginBottom={5}
          />
          <SimpleGrid columns={5} spacing={2}>
            {categories
              ?.filter((category) => !category.is_food)
              .filter((category) => category.title.startsWith(categoryFilter))
              .map((category, index) => (
                <HStack>
                  <Button
                    height={SIZES.CATEGORY_ITEM_HEIGHT}
                    onClick={() => onClick(category.id)}
                    key={index}
                    _hover={{
                      bg: COLOURS.TABLE_BUTTON_HOVER_COLOR,
                      color: COLOURS.MAIN_PAGE_WHITE,
                    }}
                    whiteSpace="pre-line"
                    width='100%'
                  >
                    {category.title}
                  </Button>

                  <VStack>
                    {userMe.is_superuser && <CloseButton onClick={()=>onClickDelete(category)}/>}

                    {userMe.is_superuser && <ItemEdit category={category}/>}
                    
                  </VStack>
                </HStack>
              ))}
          </SimpleGrid>
        </>
      ) : (
        <Text>No Beverages</Text>
      )}
    </>
  );
};

export default Beverages;
