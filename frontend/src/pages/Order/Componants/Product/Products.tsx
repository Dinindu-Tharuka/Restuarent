import { useParams } from "react-router-dom";
import { useProduct } from "../../../../Hooks/Product/Product/useProducts";
import { Container, Flex, SimpleGrid } from "@chakra-ui/react";
import ProductItem from "./ProductItem";
import ProductAddModel from "./Product Add/ProductAddModel";
import useUserMe from "../../../../Hooks/User/useUserMe";
import UserMeContext from "../../../../Contexts/UserMe";

const Products = () => {
  const { id } = useParams();

  const { data: products } = useProduct({
    category_id: id !== undefined ? parseInt(id) : 0,
  });

  const { userMe } = useUserMe();

  return (
    <UserMeContext.Provider value={userMe}>
      <>
        <Flex position="absolute" zIndex={2} left="60vw" top="5vh">
          <ProductAddModel category_id={id ? parseInt(id) : 0} />
        </Flex>
        <Container
          maxHeight="78vh"
          minHeight="78vh"
          minWidth="100%"
          overflow="auto"
        >
          <SimpleGrid columns={{ base: 3, lg: 5 }}>
            {products?.map((product, index) => (
              <ProductItem product={product} key={index} />
            ))}
          </SimpleGrid>
        </Container>
      </>
    </UserMeContext.Provider>
  );
};

export default Products;
