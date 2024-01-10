import { Flex, Button, VStack, Text, HStack, Image } from "@chakra-ui/react";
import { Order } from "../../../../Generics/interfaces";
import {useRef} from "react";
import { COLOURS } from "../../../../Generics/constants";
import useAllProducts from "../../../../Hooks/Product/Product/useAllProducts";
import "./BillShowView.css";
import logo from "../../../../assets/images/logo1.png";
import { getConvertedDateTime } from "../../../../Generics/functions";
import ReactToPrint from "react-to-print";

interface Props {
  order?: Order;
}

const KitchenBillShowView = ({ order }: Props) => {
  const comaponantRef = useRef(null);

  // for get product
  const { data: products } = useAllProducts();

  return (
    <Flex flexDir="column">
      <div ref={comaponantRef} className="">
        <VStack padding={2}>
          {/* <Text margin={0} fontSize="x-large" fontWeight="bold">
          HIKKA LASSO
        </Text> */}
          <Image src={logo} />
          <Text margin={0} fontWeight="bold" textAlign="center">
            Galle Road, Seenigama, <br />
            Hikkaduwa, <br /> Sri Lanka <br />
            {getConvertedDateTime(order?.date)}
          </Text>
          <text className="w-100 line padding textbold">
            {order?.customer_name} - Table {order?.table}
          </text>

          <table>
            <tbody>
              {order?.orderitems?.map((orderitem) => (
                <tr className="marginBottom">
                  <td className="left textbold">
                    {
                      products?.find(
                        (product) => product.id === orderitem.product_id
                      )?.title
                    }
                  </td>
                  <td className="center textbold">{orderitem.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </VStack>
      </div>
      <HStack width="100%">
        <ReactToPrint
          trigger={() => (
            <Button bg={COLOURS.OK_COLOUR} width="50%">
              Print
            </Button>
          )}
          content={() => comaponantRef.current}
        />
      </HStack>
    </Flex>
  );
};

export default KitchenBillShowView;
