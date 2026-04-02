import Card from "@/components/Card";
import { ruinsData } from "../data/ruinsData";
import { parseEventLinks } from "@/lib/Helper";

function SearchingRuinsTable() {
  const ruinsTable = ruinsData;

  if (!ruinsTable) return null;

  return (
    <Card title="Searching Ruins Table">
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
                  <span>{parseEventLinks(cell)}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default SearchingRuinsTable;
