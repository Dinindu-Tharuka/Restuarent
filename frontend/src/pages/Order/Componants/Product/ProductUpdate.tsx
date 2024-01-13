import {
  Button,
  FormLabel,
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
import { Product } from "../../../../Generics/interfaces";
import { MdModeEdit } from "react-icons/md";
import { FieldValues, useForm } from "react-hook-form";
import useProductsMutate from "../../../../Hooks/Product/Product/useProductsMutate";
import { REQUEST } from "../../../../Generics/constants";

interface Props {
  product: Product;
}

const ProductUpdate = ({ product }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const productMutate = useProductsMutate(
    () => {
        onClose()
    },
    REQUEST.UPDATE,
    product.sub_category_id
  );

  const onSumbmit = (data: FieldValues) => {
    const value = {
      id: product.id,
      ...data,
    } as Product;

    productMutate.mutate(value);
  };

  return (
    <>
      <IconButton icon={<MdModeEdit />} aria-label="edit" onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSumbmit)}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                {...register("title")}
                defaultValue={product.title}
              />
              <FormLabel>Price</FormLabel>
              <Input
                type="text"
                {...register("price")}
                marginBottom={5}
                defaultValue={product.price}
              />
              <Button type="submit">Save</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductUpdate;
