import { Button, SimpleGrid, Text } from "@chakra-ui/react"
import { SIZES } from "../../../../Generics/constants"
import { Category } from "../../../../Generics/interfaces"

interface Props{
    categories:Category[]|undefined
}

const Beverages = ({ categories }:Props) => {

    const isAvailble = categories?.filter(category => !category.is_food).length
  return (
    <>
    { isAvailble !== undefined && isAvailble > 0 ? <SimpleGrid columns={5} spacing={2}>
      {categories
        ?.filter((category) => !category.is_food)
        .map((category) => (
          <Button height={SIZES.CATEGORY_ITEM_HEIGHT}>{category.title}</Button>
        ))}
    </SimpleGrid> : <Text>No Beverages</Text>}
    </>
  )
}

export default Beverages