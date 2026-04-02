import Card from "@/components/Card";
import { getTravelData } from "../services/TravelService";
import type { Travel } from "../types/TravelType";
import { Link } from "react-router-dom";

function TravelOverview() {
  const travels = getTravelData();

  if (!travels) return null;

  return (
    <Card title="Travel Tables">
      {travels.map((item: Travel) => (
        <Link to={`/travel/${item.id}`} key={item.id} className="flex flex-row">
          <span className="m-2">#{item.id}</span>
          <span className="my-2 text-black">{item.terrain}</span>
        </Link>
      ))}
    </Card>
  );
}

export default TravelOverview;
