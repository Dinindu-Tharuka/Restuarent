import {
  Flex,
  Button,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Order } from "../../../../Generics/interfaces";
import { useEffect, useRef, useState } from "react";
import { COLOURS } from "../../../../Generics/constants";
import generatePdf from "../../../../PDF/generatePdf";
import useAllProducts from "../../../../Hooks/Product/Product/useAllProducts";
import "./BillShowView.css";
import { formatNumberWithTwoDecimals } from "../Functions/functions";
import BillCloseConfirmation from "./BillCloseConfirmation";

interface Props {
  order?: Order;
}

const BillShowview = ({ order }: Props) => {
  // For downloading pdf
  const [loader, setLoader] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);
  const [capture, setCapture] = useState<HTMLDivElement | null>(null);

  // for get product
  const { data: products } = useAllProducts();

  

  useEffect(() => {
    setCapture(pdfRef.current);
  }, []);

  return (
    <Flex flexDir="column">
      <div ref={pdfRef} className="">
        <VStack padding={2}>
          <Text margin={0} fontSize="x-large" fontWeight="bold">
            Resturent
          </Text>
          <Text margin={0} fontWeight="semibold">
            Colombo, Sri Lanaka
          </Text>
          <text className="w-100 line padding">
            {order?.customer_name} - Table {order?.table}
          </text>

          <table>
            <tbody>
              {order?.orderitems?.map((orderitem) => (
                <tr className="marginBottom">
                  <td>{orderitem.quantity}</td>
                  <td>
                    {
                      products?.find(
                        (product) => product.id === orderitem.product_id
                      )?.title
                    }
                  </td>
                  <td>{formatNumberWithTwoDecimals(orderitem.item_total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <text className="w-100 line"></text>
          <table>
            <tfoot>
              <tr>
                <td className="textalignReight">Total Price</td>
                <td></td>
                <td>
                  {formatNumberWithTwoDecimals(
                    order?.total_product_price ? order?.total_product_price : 0
                  )}
                </td>
              </tr>
              <tr>
                <td className="textalignReight">Discount</td>
                <td></td>
                <td>
                  {formatNumberWithTwoDecimals(
                    order?.discount ? order?.discount : 0
                  )}
                </td>
              </tr>
              <tr>
                <td className="textalignReight">Service Charge</td>
                <td></td>
                <td>
                  {formatNumberWithTwoDecimals(
                    order?.service_charge_price
                      ? order?.service_charge_price
                      : 0
                  )}
                </td>
              </tr>
              <tr>
                <td className="textalignReight">Sub Total</td>
                <td></td>
                <td>
                  {formatNumberWithTwoDecimals(order?.total ? order?.total : 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </VStack>
      </div>
      <HStack width='100%'>
        <Button
          bg={COLOURS.OK_COLOUR}
          mr={3}
          onClick={() => generatePdf(capture, setLoader)}
          width='50%'
        >
          {loader ? "Printing..." : "Print"}
        </Button>

        <BillCloseConfirmation order={order}/>
      </HStack>
    </Flex>
  );
};

export default BillShowview;
