import type {
  TableType,
  SimpleListTableType,
  RollTableType,
} from "../types/EventType";
import RollTable from "./RollTable";
import SimpleListTable from "./SimpleListTable";

function TableRenderer({ table }: { table: TableType }) {
  switch (table.type) {
    case "simple-list":
      return <SimpleListTable table={table as SimpleListTableType} />;

    case "roll-table":
      return <RollTable table={table as RollTableType} />;

    default:
      return <p>Unknown table type</p>;
  }
}

export default TableRenderer;
