import { Button } from "@chakra-ui/react";
import { ROOM_BUTTON } from "../../Generics/interfaces";
import { COLOURS, SIZES } from "../../Generics/constants";
import { useNavigate } from "react-router-dom";

interface props {
  tableButton: ROOM_BUTTON;
}

const TableButton = ({ tableButton }: props) => {
  const navigate = useNavigate()
  const onClick =()=>{
    navigate(`/dining/order/${tableButton.table_no}`)

  }
  return (
    <Button
      width={SIZES.TABLE_BUTTON_WIDTH}
      height={SIZES.TABLE_BUTTON_HEIGHT}
      borderRadius={50}
      boxShadow='lg'
      onClick={onClick}
      bg={tableButton.is_placed_order ? COLOURS.ORDER_PLACE_COLOR : ''}
    >
      {tableButton.table_no}
    </Button>
  );
};

export default TableButton;
