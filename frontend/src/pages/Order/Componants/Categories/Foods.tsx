import {
  Button,
  CloseButton,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Category } from "../../../../Generics/interfaces";
import { COLOURS, REQUEST, SIZES } from "../../../../Generics/constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useCategoryMutate from "../../../../Hooks/Product/Category/useCategoryMutate";
import ItemEdit from "./ItemEdit";
import useUserMe from "../../../../Hooks/User/useUserMe";

interface Props {
  categories: Category[] | undefined;
  table?: string;
}

const Foods = ({ categories, table }: Props) => {
  const isAvailble = categories?.filter((category) => category.is_food).length;
  const [categoryFilter, setCategoryFilter] = useState("");

  const {userMe} = useUserMe()

  /// mutate in the foods
  const mutateCategoris = useCategoryMutate(()=>{}, REQUEST.DELETE)

  const navigate = useNavigate();

  const onClick = (category_id: number) => {
    navigate(`/dining/order/${table}/subCategory/${category_id}`);
  };

  const onClickDelete = (date:Category)=>{
    mutateCategoris.mutate(date)
  }

  return (
    <>
      {isAvailble !== undefined && isAvailble > 0 ? (
        <>
          <Input
            placeholder="Search"
            onChange={(e) => setCategoryFilter(e.currentTarget.value)}
            marginBottom={5}
          />

          <SimpleGrid columns={{ lg: 5, base: 3 }} spacing={2}>
            {categories
              ?.filter((category) => category.is_food)
              .filter((category) => category.title.startsWith(categoryFilter))
              .map((category, index) => (
                <HStack>
                  <Button
                    height={SIZES.CATEGORY_ITEM_HEIGHT}
                    onClick={() => onClick(category.id)}
                    width='100%'
                    key={index}
                    _hover={{
                      bg: COLOURS.TABLE_BUTTON_HOVER_COLOR,
                      color: COLOURS.MAIN_PAGE_WHITE,
                    }}
                    whiteSpace="pre-line"
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
        <Text>No Foods</Text>
      )}
    </>
  );
};

export default Foods;
