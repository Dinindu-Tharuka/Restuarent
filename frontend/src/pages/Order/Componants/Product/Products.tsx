import { useParams } from "react-router-dom";
import { useProduct } from "../../../../Hooks/Product/Product/useProducts";
import {
  Container,
  Flex,
  FormLabel,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ProductItem from "./ProductItem";
import useUserMe from "../../../../Hooks/User/useUserMe";
import UserMeContext from "../../../../Contexts/UserMe";
import ProductAddModel from "./Product Add/ProductAddModel";

const Products = () => {
  const { subId } = useParams();

  const { data: products } = useProduct({
    sub_category_id: subId !== undefined ? parseInt(subId) : 0,
  });


  const isAvailble = products?.length;

  const { userMe } = useUserMe();

  return (
    <UserMeContext.Provider value={userMe}>
      <Flex
        position="absolute"
        zIndex={2}
        left={{ lg: "55vw", base: "35vw" }}
        top="5vh"
      >
        <HStack>
          {userMe.is_superuser && <FormLabel>Add Product</FormLabel>}
          {userMe.is_superuser && (
            <ProductAddModel category_id={subId ? parseInt(subId) : 0} />
          )}
        </HStack>
      </Flex>
      {isAvailble > 0 ? (
        <>
          <Container
            maxHeight="73vh"
            minHeight="73vh"
            minWidth="100%"
            overflow="auto"
            marginTop="5vh"
          >
            <SimpleGrid columns={{ base: 3, lg: 5 }}>
              {products?.map((product, index) => (
                <ProductItem product={product} key={index} />
              ))}
            </SimpleGrid>
          </Container>
        </>
      ) : (
        <Text>No Products</Text>
      )}
    </UserMeContext.Provider>
  );
};

export default Products;
