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
            <span className="my-2">{item.terrain}</span>
          </Link>
        ))}
      </Card>
    </>
  );
}

export default TableOverview;
