import Card from "@/components/Card";
import Badge from "@/components/Badge";
import { useParams } from "react-router-dom";
import { getTravelDataById } from "../services/TableService";
import type { Table } from "../types/TableType";

function TableDetail() {
  const { id } = useParams();
  const travel: Table | undefined = getTravelDataById(Number(id));

  if (!travel) return null;

  return (
    <Card title={travel.terrain} color={travel.color}>
      <div className="flex flex-wrap">
        <Badge icon="🧭" text={travel.lost} />
        <Badge icon="📜" text={travel.event} />
        <Badge icon={travel.hunt ? "✅" : "❌"} text="Hunt" />
        <Badge icon={travel.fodder ? "✅" : "❌"} text="Fodder" />
      </div>

      <table>
        <thead>
          <tr>
            {travel.matrix[0].map((_, colIndex) => (
              <th key={colIndex} className="p-2 text-center text-black">
                {colIndex + 1}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {travel.matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-2 text-center">
                  <a
                    href={`/event/${cell.toLowerCase()}`}
                    className="underline"
                  >
                    {cell}
                  </a>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default TableDetail;
