import { useParams } from "react-router-dom";
import { useProduct } from "../../../../Hooks/Product/Product/useProducts";
import { SimpleGrid } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

const Products = () => {
  const { table, id } = useParams();

  const { data: products } = useProduct({
    category_id: id !== undefined ? parseInt(id) : 0,
  });

  return (
    <>
      <SimpleGrid columns={{ base: 3, lg: 5 }}>
        {products?.map((product) => (
          <ProductItem product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Products;
