import { ROOM_BUTTON } from "./interfaces";

export enum COLOURS {
  MAIN_PAGE_YELLOW = "#ffec4b",
  MAIN_PAGE_BLACK = "black",
  MAIN_PAGE_WHITE = "white",
  BACKGROUND_COLOR = '#f2f2f2',
  LOGIN_BACKGROUND = '#f6de56',
  ADMIN_PAGE_BUTTON_COLOR = '#ff1a4c',
  BUTTON_LETTER_COLOR = 'white',
  ORDER_PLACE_COLOR = '#d34412',
  TABLE_BUTTON_HOVER_COLOR = '#f67122',
  CANCEL_COLOR='red',
  OK_COLOUR = '#5cf852',
  HOVER_BUTTON_COLOR = '#d9d9d9',
  VIP_COLOR = '#dd0939'
}

export enum SIZES {
  MAIN_PAGE_BUTTON_BORDER_RADIOUS = 20,
  TABLE_BUTTON_WIDTH = '18vw',
  TABLE_BUTTON_HEIGHT = '15vh',
  LOGIN_FORM_INPUT_WIDTH = '20vw',
  FORM_FIELD_MARGIN = 5,
  ADMIN_PAGE_BUTTON_WIDTH = '180px',
  USER_PAGE_PAGINATION_SIZE = 7,
  CATEGORY_ITEM_HEIGHT = '100px',
  ORDER_PAGE_SIZE = 10,
}

export const FIRST_FLOOR : ROOM_BUTTON[] = [
  { table_no: "T100", is_placed_order: false },
  { table_no: "T101", is_placed_order: false },
  { table_no: "T102", is_placed_order: false },
  { table_no: "T103", is_placed_order: false },
  { table_no: "T104", is_placed_order: false },
  { table_no: "T105", is_placed_order: false },
  { table_no: "T106", is_placed_order: false },
  { table_no: "T107", is_placed_order: false },
  { table_no: "T108", is_placed_order: false },
  { table_no: "T109", is_placed_order: false },
  { table_no: "T110", is_placed_order: false },

  { table_no: "T200", is_placed_order: false },
  { table_no: "T201", is_placed_order: false },
  { table_no: "T202", is_placed_order: false },
  { table_no: "T203", is_placed_order: false },
  { table_no: "T204", is_placed_order: false },
  { table_no: "T205", is_placed_order: false },
  { table_no: "T206", is_placed_order: false },
  { table_no: "T207", is_placed_order: false },
  { table_no: "T208", is_placed_order: false },
  { table_no: "T209", is_placed_order: false },
  { table_no: "T210", is_placed_order: false },
];

export const SECOND_FLOOR_PART_1 : ROOM_BUTTON[] = [
  { table_no: "T300", is_placed_order: false },
  { table_no: "T301", is_placed_order: false },
  { table_no: "T302", is_placed_order: false },
  { table_no: "T303", is_placed_order: false },
  { table_no: "T304", is_placed_order: false },
  { table_no: "T305", is_placed_order: false },
  { table_no: "T306", is_placed_order: false },
  { table_no: "T307", is_placed_order: false },
  { table_no: "T308", is_placed_order: false },
  { table_no: "T309", is_placed_order: false },
  { table_no: "T310", is_placed_order: false },

  { table_no: "T400", is_placed_order: false },
  { table_no: "T401", is_placed_order: false },
  { table_no: "T402", is_placed_order: false },
  { table_no: "T403", is_placed_order: false },
  { table_no: "T404", is_placed_order: false },
  { table_no: "T405", is_placed_order: false },
  { table_no: "T406", is_placed_order: false },
  { table_no: "T407", is_placed_order: false },
  { table_no: "T408", is_placed_order: false },
  { table_no: "T409", is_placed_order: false },
  { table_no: "T410", is_placed_order: false },

  { table_no: "T500", is_placed_order: false },
  { table_no: "T501", is_placed_order: false },
  { table_no: "T502", is_placed_order: false },
];

export const SECOND_FLOOR_PART_2 : ROOM_BUTTON[] = [
  
  { table_no: "T503", is_placed_order: false },
  { table_no: "T504", is_placed_order: false },
  { table_no: "T505", is_placed_order: false },
  { table_no: "T506", is_placed_order: false },
  { table_no: "T507", is_placed_order: false },
  { table_no: "T508", is_placed_order: false },
  { table_no: "T509", is_placed_order: false },
  { table_no: "T510", is_placed_order: false },

  { table_no: "T600", is_placed_order: false },
  { table_no: "T601", is_placed_order: false },
  { table_no: "T602", is_placed_order: false },
  { table_no: "T603", is_placed_order: false },
  { table_no: "T604", is_placed_order: false },
  { table_no: "T605", is_placed_order: false },
  { table_no: "T606", is_placed_order: false },
  { table_no: "T607", is_placed_order: false },
  { table_no: "T608", is_placed_order: false },
  { table_no: "T609", is_placed_order: false },
  { table_no: "T610", is_placed_order: false },
];

export enum REQUEST {
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE'
}
