import {
    Button,
    IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
  import { MdOutlineAddBox } from "react-icons/md";
import useCategoryMutate from "../../../../../Hooks/Product/Category/useCategoryMutate";
import useSubcategoryMutate from "../../../../../Hooks/Product/SubCategory/useSubcategoryMutate";
import { REQUEST } from "../../../../../Generics/constants";
import { SubCategories } from "../../../../../Generics/interfaces";

interface Props{
    category_id:number
}

const AddSubCategory = ({ category_id }:Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {register, handleSubmit} = useForm()
    const toast = useToast()

    // Make field values
    const subCategoryMutate = useSubcategoryMutate(()=>{

      toast({
        title: 'Sub Category',
        description: "Sub Category created successfull.",
        status: 'success',
        duration: 3000,
        isClosable: true,        
      })

      onClose()
    }, REQUEST.POST, category_id)

    const onSubmitSubCatgery = (data: FieldValues)=>{
        const newSubCategory = {
            category_id:category_id,
            ...data
        } as SubCategories

        subCategoryMutate.mutate(newSubCategory)

    }
  return (
    <>
      <IconButton
        icon={<MdOutlineAddBox />}
        aria-label="category add"
        colorScheme="green"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Sub Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmitSubCatgery)}>
                <Input placeholder='Sub Category' {...register('title')} marginBottom={5}/>

                <Button type="submit">Save</Button>

            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddSubCategory