import { Link } from "react-router-dom";
import Card from "../components/Card";

function History() {
  const history = JSON.parse(localStorage.getItem("barbarian-prince") || "[]");

  return (
    <section className="flex flex-col py-2">
      <Card title="History">
        {history.length === 0 && <p>No history yet.</p>}

        {history.map((item: { id: string; title: string }, index: number) => (
          <Link to={`/event/${item.id}`} key={index} className="flex flex-row">
            <span className="m-2">{item.id}</span>
            <span className="my-2 text-black">{item.title}</span>
          </Link>
        ))}
      </Card>
    </section>
  );
}

export default History;
