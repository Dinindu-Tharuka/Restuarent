import { useEffect, useRef, useState } from "react";
import {
  formatNumberWithTwoDecimals,
  getConvertedDate,
  getDiscountTotal,
  getProductTotal,
  getServiceTotal,
  getSubTotal,
} from "../../../../../Generics/functions";
import { Order, Product } from "../../../../../Generics/interfaces";
import "./RevenueReportShow.css";
import { Button, Text } from "@chakra-ui/react";
import { COLOURS } from "../../../../../Generics/constants";
import generatedPDf from "../../../../../PDF/generatedPDf";
interface Props {
  orders: Order[];
  products:Product[]
}


const RevenueReportShow = ({ orders, products }: Props) => {
  // For downloading pdf
  const [loader, setLoader] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);
  const [capture, setCapture] = useState<HTMLDivElement | null>(null);

  

  useEffect(() => {
    setCapture(pdfRef.current);
  }, []);

  return (
    <>
      <div ref={pdfRef}>
        <Text fontSize="lg" fontWeight="bold" width="100%" textAlign="center">
          Revenue Report
        </Text>
        <table className="margin">
          <thead>
            <th className="center">Date</th>
            <th className="center">Product</th>
            <th className="center">Type</th>
            <th className="right">Discount</th>
            <th>Service charge</th>
            <th className="right padding-right">Sub Total</th>
          </thead>
          <tbody>
            {orders.map((order) =>
              order.orderitems.map((orderitem) => (
                <tr>
                  <td>{getConvertedDate(order.date)}</td>
                  <td>{products.find(product=> product.id === orderitem.product_id).title}</td>
                  <td className="center">
                    {order.is_takeway ? "Take Away" : "Dining"}
                  </td>
                  <td className="center">{order.discount}</td>
                  <td className="center">{order.service_charge}%</td>
                  <td>{formatNumberWithTwoDecimals(order.total)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <table className="margin">
          <thead>
            <tr>
              <th className="right">Sub Total</th>
              <th className="right padding-right">
                {formatNumberWithTwoDecimals(getSubTotal(orders))}
              </th>
            </tr>
            <tr>
              <th className="right">Product Total</th>
              <th className="right padding-right">
                {formatNumberWithTwoDecimals(getProductTotal(orders))}
              </th>
            </tr>
            <tr>
              <th className="right">Service Total</th>
              <th className="right padding-right">
                {formatNumberWithTwoDecimals(getServiceTotal(orders))}
              </th>
            </tr>
            <tr>
              <th className="right">Discount Total</th>
              <th className="right  padding-right">
                {formatNumberWithTwoDecimals(getDiscountTotal(orders))}
              </th>
            </tr>
            <tr>
              <th className="padding-bottom"></th>
            </tr>
          </thead>
        </table>
      </div>
      <Button
        bg={COLOURS.OK_COLOUR}
        mr={3}
        onClick={() => generatedPDf(capture, setLoader)}
        width="50%"
      >
        {loader ? "Printing..." : "Print"}
      </Button>
    </>
  );
};

export default RevenueReportShow;
