import allTableService from "../../services/Floor/all-table-service";
import { Table } from "../../Generics/interfaces";
import { useQuery } from "@tanstack/react-query";

const useAllTables = () => {
  return useQuery<Table[], Error>({
    queryKey: ["all-tables"],
    queryFn: () => allTableService.getAll(),
  });
};

export default useAllTables;
