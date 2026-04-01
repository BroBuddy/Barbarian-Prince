import Card from "@/components/Card";
import { getTravelData } from "../services/TravelService";
import type { Travel } from "../types/TravelType";

function TravelOverview() {
  const travels = getTravelData();

  if (!travels) return null;

  return (
    <>
      {travels.map((item: Travel) => (
        <div key={item.id} className="mb-6">
          <Card title={item.terrain} color={item.color}>
            <table>
              <thead>
                <tr>
                  {item.matrix[0].map((_, colIndex) => (
                    <th key={colIndex} className="p-2 text-black text-center">
                      {colIndex + 1}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {item.matrix.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="p-2 text-center">
                        <a href={`/event/${cell.toLowerCase()}`} className="">
                          {cell}
                        </a>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      ))}
    </>
  );
}

export default TravelOverview;
