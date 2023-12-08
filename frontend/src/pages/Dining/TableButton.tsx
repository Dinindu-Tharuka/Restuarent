import { Button } from "@chakra-ui/react";
import { ROOM_BUTTON } from "../../Generics/interfaces";
import { SIZES } from "../../Generics/constants";
import { Link } from "react-router-dom";

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
      <Link to={`/order/${tableButton.table_no}`}>{tableButton.table_no}</Link>
    </Button>
  );
};

export default TableButton;
