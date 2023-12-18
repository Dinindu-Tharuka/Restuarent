import { useParams } from "react-router-dom";
import { useProduct } from "../../../../Hooks/Product/Product/useProducts";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import ProductItem from "./ProductItem";
import ProductAddModel from "./Product Add/ProductAddModel";

const Products = () => {
  const { id } = useParams();

  const { data: products } = useProduct({
    category_id: id !== undefined ? parseInt(id) : 0,
  });

  return (
    <>
      <Flex position='absolute'  zIndex={2} left='60vw' top='5vh'>
        <ProductAddModel category_id={id ? parseInt(id) : 0} />
      </Flex>
      <SimpleGrid columns={{ base: 3, lg: 5 }}>
        {products?.map((product) => (
          <ProductItem product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Products;
