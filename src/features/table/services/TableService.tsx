import { tableData } from "../data/tableData";
import type { Table } from "../types/TableType";

const getTableData = () => tableData;

const getTableDataById = (id: number): Table => {
  return tableData.find((item: Table) => item.id === id) as Table;
};

export { getTableData as getTravelData, getTableDataById as getTravelDataById };
