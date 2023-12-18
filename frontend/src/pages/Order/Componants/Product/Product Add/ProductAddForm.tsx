import { Button, FormLabel, Input, useToast } from "@chakra-ui/react"
import { FieldValues, useForm } from "react-hook-form"
import { Product } from "../../../../../Generics/interfaces"
import useProductsMutate from "../../../../../Hooks/Product/Product/useProductsMutate"
import { REQUEST } from "../../../../../Generics/constants"

interface Props{
  category_id:number;
  onClose:()=>void;
}

const ProductAddForm = ({ category_id, onClose }:Props) => {
    const {register, handleSubmit} = useForm<Product>()
    const toast = useToast()

    const productMutate = useProductsMutate(()=>{
      toast({
        title: 'Product',
        description: "Product created successfull.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })

      onClose()
    }, REQUEST.POST, category_id)

    const onSubmit = (data:FieldValues)=>{
      const newProdcut = {
        ...data,
        category_id:category_id
      } as Product

      productMutate.mutate(newProdcut)

    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Title</FormLabel>
        <Input {...register('title')} type="text" marginBottom={5}/>

        <FormLabel>Price</FormLabel>
        <Input {...register('price')} type="number" marginBottom={5}/>

        <Button type="submit">Create</Button>
    </form>
  )
}

export default ProductAddForm