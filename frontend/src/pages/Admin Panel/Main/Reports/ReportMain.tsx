import useOrders from "../../../../Hooks/Orders/useOrders"


const ReportMain = () => {
  const {data:orders} = useOrders()
  return (
    <div>ReportMain</div>
  )
}

export default ReportMain