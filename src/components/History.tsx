import { Link } from "react-router-dom";
import Card from "./Card";
import type { TagItem } from "@/pages/Helper";
import { getLinkClass, tagToPath } from "@/lib/Helper";

function History() {
  const history = JSON.parse(localStorage.getItem("barbarian-prince") || "[]");

  return (
    <Card title="History">
      {history.length === 0 && <p>No history yet.</p>}

      {history.map((item: TagItem, index: number) => (
        <Link
          to={tagToPath(item.tag)}
          key={index}
          className={getLinkClass(item.tag)}
        >
          <span className="m-2 w-4">{item.tag}</span>
          <span className="my-2 text-black">{item.title}</span>
        </Link>
      ))}
    </Card>
  );
}

export default History;
