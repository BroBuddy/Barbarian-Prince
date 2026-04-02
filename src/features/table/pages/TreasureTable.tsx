import Card from "@/components/Card";
import { Link } from "react-router-dom";
import { treasureData } from "../data/treasureData";

const isEventLink = (cell: string) => cell.startsWith("E");

function TreasureTable() {
  const treasureTable = treasureData;

  if (!treasureTable) return null;

  return (
    <Card title="Treasure Table">
      <p>
        <em>
          <span className="text-purple">Wealth Code 0:</span> Character has no
          gold or possessions.
        </em>
      </p>

      <table>
        <thead>
          <tr>
            <th className="text-black">Wealth Code</th>
            {treasureTable.dieRolls.map((die) => (
              <th key={die} className="text-black">
                {die}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {treasureTable.rows.map((row, i) => (
            <tr key={i}>
              <td>{row.wealthCode}</td>
              {row.cells.map((cell, j) => (
                <td key={j}>
                  {isEventLink(cell) ? (
                    <Link to={`/event/${cell.toLowerCase()}`}>{cell}</Link>
                  ) : (
                    <span>{cell}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default TreasureTable;
