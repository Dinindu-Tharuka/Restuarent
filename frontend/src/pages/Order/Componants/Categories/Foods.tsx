import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { Category } from "../../../../Generics/interfaces";
import { SIZES } from "../../../../Generics/constants";

interface Props{
    categories:Category[]| undefined
}

const Foods = ({ categories }:Props) => {
    console.log('catgories', categories)

    const isAvailble = categories?.filter(category => category.is_food).length

  return (
    <>
    {isAvailble !== undefined && isAvailble > 0  ? <SimpleGrid columns={5} spacing={2}>
      {categories
        ?.filter((category) => category.is_food)
        .map((category) => (
          <Button height={SIZES.CATEGORY_ITEM_HEIGHT}>{category.title}</Button>
        ))}
    </SimpleGrid> : <Text>No Foods</Text>}
    </>
  );
};

export default Foods;
