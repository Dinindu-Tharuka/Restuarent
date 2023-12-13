import { Card, CardBody, Text } from "@chakra-ui/react";
import { Product } from "../../../../Generics/interfaces";
interface Props{
    product:Product
}

const ProductItem = ({ product }:Props) => {

  return (
    <Card _hover={{
        bg:'red'
    }} onClick={()=> console.log(product.title)}>
      <CardBody>
        <Text>{product.title}</Text>
        <Text>{product.price}</Text>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
