import { Link } from "react-router-dom";
import Card from "../components/Card";

export type HistoryItem = {
  tag: string;
  title: string;
};

function History() {
  const history = JSON.parse(localStorage.getItem("barbarian-prince") || "[]");

  return (
    <section className="flex flex-col">
      <Card title="History">
        {history.length === 0 && <p>No history yet.</p>}

        {history.map((item: HistoryItem, index: number) => (
          <Link to={`/event/${item.tag}`} key={index} className="flex flex-row">
            <span className="m-2">{item.tag}</span>
            <span className="my-2 text-black">{item.title}</span>
          </Link>
        ))}
      </Card>
    </section>
  );
}

export default History;
