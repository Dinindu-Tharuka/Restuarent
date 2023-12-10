import { useParams } from "react-router-dom"


const Products = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>Products</div>
  )
}

export default Products