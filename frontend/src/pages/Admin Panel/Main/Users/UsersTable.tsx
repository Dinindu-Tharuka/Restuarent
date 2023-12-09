import {
    IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import useUsers from "../../../../Hooks/User/User/useUsers";
import { useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";

const UsersTable = () => {
  const [page, setPage] = useState(1);
  const { data: users } = useUsers({ page: page, username: "" });

  console.log(users);
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>User Name</Th>
            <Th>Email</Th>
            <Th>Designation</Th>
            <Th></Th>
            <Th></Th>
            <Th>
              <IconButton
                colorScheme="red"
                aria-label="Add User"
                icon={<IoIosPersonAdd />}
              />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.results.map((user) => (
            <Tr>
              <Td>{user.user_name}</Td>
              <Td>{user.email}</Td>
              <Td>
                {user.is_superuser
                  ? "Admin"
                  : user.is_cashier
                  ? "Chasier"
                  : "Chef"}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
