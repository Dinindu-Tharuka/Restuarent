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
  import logo from '../../../../assets/images/logo.png'
import { getConvertedDateTime } from "../../../../Generics/functions";

  
  interface Props {
    order?: Order;
  }
  

const KitchenBillShowView = ({ order}: Props) => {

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
        {/* <Text margin={0} fontSize="x-large" fontWeight="bold">
          HIKKA LASSO
        </Text> */}
        <Image src={logo}/>
        <Text margin={0} fontWeight="bold" textAlign='center'>
        Galle Road, Seenigama, <br/> 
          Hikkaduwa, <br/> Sri Lanka <br/>
          {getConvertedDateTime(order?.date)}
        </Text>
        <text className="w-100 line padding textbold" >
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
    <HStack width='100%'>
      <Button
        bg={COLOURS.OK_COLOUR}
        mr={3}
        onClick={() => generatePdf(capture, setLoader, order.orderitems.length)}
        width='50%'
      >
        {loader ? "Printing..." : "Print"}
      </Button>
    </HStack>
  </Flex>
  )
}

export default KitchenBillShowView