import { Headline } from "@/components/Headline";
import type { RollTableType } from "../types/EventType";

function RollTable({ table }: { table: RollTableType }) {
  return (
    <div className="mb-6">
      <Headline>{table.label}</Headline>

      <table>
        <thead>
          <tr className="text-black">
            {table.cols.map((col, i) => (
              <th key={i} className="p-3">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-t hover:bg-gray-100">
              {row.map((cell, j) => (
                <td key={j} className="p-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default RollTable;
