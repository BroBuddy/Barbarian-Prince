import type { SimpleListTableType } from "../types/EventType";

function SimpleListTable({ table }: { table: SimpleListTableType }) {
  return (
    <div className="mb-6">
      <h3 className="font-bold mb-2">{table.label}</h3>

      <div className="border rounded-xl overflow-hidden">
        {table.rows.map((row, i) => (
          <div
            key={i}
            className="flex justify-between border-b last:border-0 p-3"
          >
            <span className="font-semibold">{row[0]}</span>
            <span>{row[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimpleListTable;
