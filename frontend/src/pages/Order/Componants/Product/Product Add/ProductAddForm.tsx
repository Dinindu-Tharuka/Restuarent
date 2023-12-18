import { FormLabel, Input } from "@chakra-ui/react"
import { FieldValues, useForm } from "react-hook-form"
import { Product } from "../../../../../Generics/interfaces"

interface Props{
  category_id:number
}

const ProductAddForm = ({ category_id }:Props) => {
    const {register, handleSubmit} = useForm<Product>()

    const onSubmit = (data:FieldValues)=>{
      const newProdcut = {
        ...data,
        category_id:category_id
      }

    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Title</FormLabel>
        <Input {...register('title')}/>

        <FormLabel>Title</FormLabel>
        <Input {...register('price')}/>
    </form>
  )
}

export default ProductAddForm