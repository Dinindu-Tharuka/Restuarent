export interface ROOM_BUTTON {
  table_no: string;
  is_placed_order: boolean;
}

export interface UserProfile {
  id: number;
  user_account_id: number;
  first_name: string;
  last_name: string;
  telephone: string;
  address: string;
}

export interface User {
  id: number;
  user_name: string;
  email: string;
  is_chef: boolean;
  is_cashier: boolean;
  is_superuser: boolean;
  password?: string;
  re_password?: string;
  is_active: boolean;
  is_staff?: boolean;
}

export interface PaginationStructure<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
