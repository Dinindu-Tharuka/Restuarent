import { Button } from "@chakra-ui/react";
import { ROOM_BUTTON } from "../../Generics/interfaces";
import { SIZES } from "../../Generics/constants";

interface props {
  tableButton: ROOM_BUTTON;
}

const TableButton = ({ tableButton }: props) => {
  return (
    <Button
      width={SIZES.TABLE_BUTTON_WIDTH}
      height={SIZES.TABLE_BUTTON_HEIGHT}
      borderRadius={50}
      boxShadow='lg'
    >
      {tableButton.table_no}
    </Button>
  );
};

export default TableButton;
