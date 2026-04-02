import Card from "@/components/Card";
import { getTravelData } from "../services/TableService";
import type { Table } from "../types/TableType";
import { Link } from "react-router-dom";

function TableOverview() {
  const travels = getTravelData();

  if (!travels) return null;

  return (
    <>
      <Card title="Travel Tables">
        {travels.map((item: Table) => (
          <Link
            to={`/table/${item.id}`}
            key={item.id}
            className="flex flex-row"
          >
            <span className="m-2">#{item.id}</span>
            <span className="my-2 text-black">{item.terrain}</span>
          </Link>
        ))}
      </Card>

      <Card title="Special Tables">
        <Link to="/table/treasure" className="flex flex-row">
          <span className="m-2">#11</span>
          <span className="my-2 text-black">Treasure Table</span>
        </Link>
        <Link to="/table/ruins" className="flex flex-row">
          <span className="m-2">#12</span>
          <span className="my-2 text-black">Searching Ruins Table</span>
        </Link>
      </Card>
    </>
  );
}

export default TableOverview;
