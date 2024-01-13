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
  } from "@chakra-ui/react";
  import { FieldValues, useForm } from "react-hook-form";
  import { MdModeEdit } from "react-icons/md";
  import { SubCategories } from "../../../../Generics/interfaces";
  import { REQUEST } from "../../../../Generics/constants";
import useSubcategoryMutate from "../../../../Hooks/Product/SubCategory/useSubcategoryMutate";
  
  interface currentCtegory {
    subCategory: SubCategories;
    categoryId:number;
  }
  

const SubCategoryModel = ({ subCategory, categoryId }: currentCtegory) => {
  const { isOpen, onOpen, onClose } = useDisclosure();  

  const { register, handleSubmit } = useForm();
  const mutateSubCategory = useSubcategoryMutate(()=>{}, REQUEST.UPDATE, categoryId)

  const onSubmit = (data: FieldValues) => {
    const newValue = {
      id: subCategory.id,      
      ...data,
    } as SubCategories;
    mutateSubCategory.mutate(newValue);
  };
  return (
    <>
      <IconButton icon={<MdModeEdit />} aria-label="edit" onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Category Set</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                {...register("title")}
                marginBottom={5}
                defaultValue={subCategory.title}
              />

              <Button type="submit">Saved</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubCategoryModel;
