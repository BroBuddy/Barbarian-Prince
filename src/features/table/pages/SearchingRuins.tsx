import Card from "@/components/Card";
import { ruinsData } from "../data/ruinsData";
import { parseLinks } from "@/lib/Helper";

function SearchingRuins() {
  const ruinsTable = ruinsData;

  if (!ruinsTable) return null;

  return (
    <Card title="Searching Ruins">
      <p>
        As a daily action, you spend the day searching ruins with your party.
        Roll two dice to determine the result.
      </p>

      <table>
        <thead>
          <tr>
            <th className="p-2 w-3">#</th>
            <th className="p-2">Description</th>
          </tr>
        </thead>

        <tbody>
          {ruinsTable.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <span>{parseLinks(cell)}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default SearchingRuins;
