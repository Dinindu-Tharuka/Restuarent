import {
  Container,
  Table,
  Tbody,
  Th,
  Tr,
} from "@chakra-ui/react";
import useCategories from "../../../../../Hooks/Product/Category/useCategories";
import ConfirmCategoryDelete from "./ConfirmCategoryDelete";

const ShowAllCategories = () => {
  const { data: categories } = useCategories();

  return (
    <Container maxHeight="50vh" minHeight="60vh" overflow="auto">
      <Table>
        <Tbody>
          {categories?.map((category, index) => (
            <Tr key={index}>
              <Th>{category.title}</Th>
              <Th><ConfirmCategoryDelete category={category}/></Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ShowAllCategories;
