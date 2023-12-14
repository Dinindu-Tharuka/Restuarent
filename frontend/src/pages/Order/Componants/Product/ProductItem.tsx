import { Card, CardBody, Text } from "@chakra-ui/react";
import { Product } from "../../../../Generics/interfaces";
import { COLOURS } from "../../../../Generics/constants";
interface Props{
    product:Product
}

const ProductItem = ({ product }:Props) => {

  return (
    <Card _hover={{
        bg:COLOURS.TABLE_BUTTON_HOVER_COLOR
    }} onClick={()=> console.log(product.title)} margin={2}>
      <CardBody>
        <Text>{product.title}</Text>
        <Text>Rs: {product.price}.00</Text>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
