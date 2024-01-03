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
import { Category } from "../../../../Generics/interfaces";
import useCategoryMutate from "../../../../Hooks/Product/Category/useCategoryMutate";
import { REQUEST } from "../../../../Generics/constants";

interface currentCtegory {
  category: Category;
}

const ItemEdit = ({ category }: currentCtegory) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm();
  const mutateCategory = useCategoryMutate(() => {
    console.log('ok')
  }, REQUEST.UPDATE);

  const onSubmit = (data: FieldValues) => {

    const newValue = {
        id:category.id,
        ...data
    } as Category
    mutateCategory.mutate(newValue);
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
                defaultValue={category.title}
              />

              <Button type="submit">Saved</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ItemEdit;
