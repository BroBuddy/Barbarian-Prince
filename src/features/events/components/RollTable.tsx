import type { RollTableType } from "../types/EventType";
import { parseLinks } from "@/lib/parseLinks";
import Card from "@/components/Card";

function RollTable({ table }: { table: RollTableType }) {
  return (
    <Card title={table.label}>
      <table>
        <thead>
          <tr>
            {table.cols.map((col, i) => (
              <th key={i} className="text-white p-2">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="p-2">
                  {parseLinks(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
export default RollTable;
