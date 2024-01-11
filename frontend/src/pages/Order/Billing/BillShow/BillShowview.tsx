import { Flex, Button, VStack, Text, HStack, Image } from "@chakra-ui/react";
import { Order } from "../../../../Generics/interfaces";
import { useRef } from "react";
import { COLOURS } from "../../../../Generics/constants";
import useAllProducts from "../../../../Hooks/Product/Product/useAllProducts";
import "./BillShowView.css";
import BillCloseConfirmation from "./BillCloseConfirmation";
import logo from "../../../../assets/images/hikka.png";
import {
  formatNumberWithTwoDecimals,
  getConvertedDateTime,
} from "../../../../Generics/functions";
import ReactPrint from "react-to-print";

interface Props {
  order?: Order;
}

const BillShowview = ({ order }: Props) => {
  const comonantRef = useRef(null);

  // for get product
  const { data: products } = useAllProducts();

  return (
    <Flex flexDir="column">
      <div ref={comonantRef}>
        <VStack padding={2}>
          <Image src={logo} margin={0} />
          <Text margin={0} fontWeight="bold" textAlign="center">
            Galle Road, Seenigama, <br />
            Hikkaduwa, <br /> Sri Lanka <br />
            {getConvertedDateTime(order?.date)}
          </Text>
          <Text>
            0912273766 | 0779463893 <br />
            WWW.HIKKALAZZO.COM
          </Text>

          <text className="w-100 line padding font-weight textbold">
            {order?.customer_name} - Table {order?.table}
          </text>

          <table>
            <tbody>
              {order?.orderitems?.map((orderitem) => (
                <tr className="marginBottom">
                  <td className="textbold">{orderitem.quantity}</td>
                  <td className="textbold">
                    {
                      products?.find(
                        (product) => product.id === orderitem.product_id
                      )?.title
                    }
                  </td>
                  <td className="textbold">
                    {formatNumberWithTwoDecimals(orderitem.item_total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <text className="w-100 line"></text>
          <table>
            <tfoot>
              <tr>
                <td className="textalignReight textbold">Total Price</td>
                <td></td>
                <td className="textbold">
                  {formatNumberWithTwoDecimals(
                    order?.total_product_price ? order?.total_product_price : 0
                  )}
                </td>
              </tr>
              <tr>
                <td className="textalignReight textbold">Discount</td>
                <td></td>
                <td className="textbold">
                  {formatNumberWithTwoDecimals(
                    order?.discount ? order?.discount : 0
                  )}
                </td>
              </tr>
              <tr>
                <td className="textalignReight textbold">Service Charge</td>
                <td></td>
                <td className="textbold">
                  {formatNumberWithTwoDecimals(
                    order?.service_charge_price
                      ? order?.service_charge_price
                      : 0
                  )}
                </td>
              </tr>
              <tr>
                <td className="textalignReight textbold">Sub Total</td>
                <td></td>
                <td className="textbold">
                  {formatNumberWithTwoDecimals(order?.total ? order?.total : 0)}
                </td>
              </tr>
            </tfoot>
          </table>
          <Text textAlign="center" fontWeight="bold">
            Your satisfaction is our joy. <br />
            Thank you ! See you soon!! <br />
            Soft by Innoverse Dynamics <br/>
            www.innoversedynamics.com
          </Text>
        </VStack>
      </div>

      <HStack width="100%">
        <ReactPrint
          trigger={() => (
            <Button bg={COLOURS.OK_COLOUR} width="50%">
              Print
            </Button>
          )}
          content={() => comonantRef.current}
        />

        <BillCloseConfirmation order={order} />
      </HStack>
    </Flex>
  );
};

export default BillShowview;
