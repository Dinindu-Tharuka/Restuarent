import {
  Flex,
  Button,
  VStack,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Order } from "../../../../Generics/interfaces";
import { useEffect, useRef, useState } from "react";
import { COLOURS } from "../../../../Generics/constants";
import generatePdf from "../../../../PDF/generatePdf";
import useAllProducts from "../../../../Hooks/Product/Product/useAllProducts";
import "./BillShowView.css";
import BillCloseConfirmation from "./BillCloseConfirmation";
import logo from '../../../../assets/images/logo.png'
import { formatNumberWithTwoDecimals, getConvertedDateTime } from "../../../../Generics/functions";

interface Props {
  order?: Order;
}

const BillShowview = ({ order }: Props) => {
  // For downloading pdf
  const [loader, setLoader] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);
  const [capture, setCapture] = useState<HTMLDivElement | null>(null);
  
    useEffect(() => {
      setCapture(pdfRef.current);
    }, []);

  // for get product
  const { data: products } = useAllProducts();

  

  return (
    <Flex flexDir="column">
      <div ref={pdfRef} className="">
        <VStack padding={2}>
          <Image src={logo}/>
          <Text margin={0} fontWeight="bold" textAlign='center'>
          Galle Road, Seenigama, <br/> 
            Hikkaduwa, <br/> Sri Lanka <br/>
            {getConvertedDateTime(order?.date)}
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
                  <td className="textbold">{formatNumberWithTwoDecimals(orderitem.item_total)}</td>
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
          <Text textAlign='center' fontWeight='bold'>Your satisfaction is our joy. Thank you !!! <br/>See you soon!</Text>
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
