import { Headline } from "@/components/Headline";
import type { RollTableType } from "../types/EventType";
import { parseLinks } from "@/lib/Helper";

function RollTable({ table }: { table: RollTableType }) {
  return (
    <div className="mb-6">
      <Headline>{table.label}</Headline>

      <table>
        <thead>
          <tr className="text-black">
            {table.cols.map((col, i) => (
              <th key={i} className="text-black p-2">
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
    </div>
  );
}
export default RollTable;
