import { parseLinks } from "@/lib/Helper";
import type { SimpleListTableType } from "../types/EventType";

function SimpleListTable({ table }: { table: SimpleListTableType }) {
  const hasDescription = table.rows.some((row) => row[1]);

  return (
    <div className="mb-6">
      <h3 className="text-bold mb-2">{table.label}</h3>

      <table>
        <thead>
          <tr>
            <th className="p-2 w-4">#</th>
            {hasDescription && <th className="p-2">Description</th>}
          </tr>
        </thead>

        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i}>
              <td className="p-2">{parseLinks(row[0])}</td>
              {hasDescription && <td className="p-2">{parseLinks(row[1])}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SimpleListTable;
