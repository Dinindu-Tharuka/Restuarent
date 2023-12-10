import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { SIZES } from "../../../../Generics/constants";
import { Category } from "../../../../Generics/interfaces";
import { useNavigate } from "react-router-dom";

interface Props {
  categories: Category[] | undefined;
  table?:string
}

const Beverages = ({ categories, table }: Props) => {
  const isAvailble = categories?.filter((category) => !category.is_food).length;
  const navigate = useNavigate()

  const onClick = (category_id: number) => {
    navigate(`/dining/order/${table}/products/${category_id}`)
  };
  return (
    <>
      {isAvailble !== undefined && isAvailble > 0 ? (
        <SimpleGrid columns={5} spacing={2}>
          {categories
            ?.filter((category) => !category.is_food)
            .map((category) => (
              <Button
                height={SIZES.CATEGORY_ITEM_HEIGHT}
                onClick={() => onClick(category.id)}
              >
                {category.title}
              </Button>
            ))}
        </SimpleGrid>
      ) : (
        <Text>No Beverages</Text>
      )}
    </>
  );
};

export default Beverages;
