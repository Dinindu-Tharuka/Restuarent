import {
  formatNumberWithTwoDecimals,
  getConvertedDate,
  getDiscountTotal,
  getProductTotal,
  getServiceTotal,
  getSubTotal,
} from "../../../../../Generics/functions";
import { Order } from "../../../../../Generics/interfaces";
import "./RevenueReportShow.css";

interface Props {
  orders: Order[];
}
const RevenueReportShow = ({ orders }: Props) => {
  return (
    <>
      <table>
        <thead>
          <th className="right">ID</th>
          <th className="right">Table</th>
          <th className="center">Date</th>
          <th className="right">Discount</th>
          <th>Service charge</th>
          <th className="right">Total</th>
          <th className="right">Sub Total</th>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order.id}</td>
              <td>{order.table}</td>
              <td>{getConvertedDate(order.date)}</td>
              <td>{order.discount}</td>
              <td className="center">{order.service_charge}%</td>
              <td>{order.total_product_price}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th className="right">Sub Total</th>
            <th className="right">
              {formatNumberWithTwoDecimals(getSubTotal(orders))}
            </th>
          </tr>
          <tr>
            <th className="right">Product Total</th>
            <th className="right">
              {formatNumberWithTwoDecimals(getProductTotal(orders))}
            </th>
          </tr>
          <tr>
            <th className="right">Service Total</th>
            <th className="right">
              {formatNumberWithTwoDecimals(getServiceTotal(orders))}
            </th>
          </tr>
          <tr>
            <th className="right">Discount Total</th>
            <th className="right">
              {formatNumberWithTwoDecimals(getDiscountTotal(orders))}
            </th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default RevenueReportShow;
