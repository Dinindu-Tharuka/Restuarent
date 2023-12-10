import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { Category } from "../../../../Generics/interfaces";
import { SIZES } from "../../../../Generics/constants";
import { useNavigate } from "react-router-dom";

interface Props {
  categories: Category[] | undefined;
  table?: string;
}

const Foods = ({ categories, table }: Props) => {
  const isAvailble = categories?.filter((category) => category.is_food).length;

  const navigate = useNavigate();

  const onClick = (category_id: number) => {
    navigate(`/dining/order/${table}/products/${category_id}`);
  };

  return (
    <>
      {isAvailble !== undefined && isAvailble > 0 ? (
        <SimpleGrid columns={{lg:5, base:3}} spacing={2}>
          {categories
            ?.filter((category) => category.is_food)
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
        <Text>No Foods</Text>
      )}
    </>
  );
};

export default Foods;
