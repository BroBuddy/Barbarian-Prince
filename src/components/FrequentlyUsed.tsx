import Card from "@/components/Card";
import type { TagItem } from "../pages/Helper";
import { Link } from "react-router-dom";

function FrequentlyUsed() {
  const frequentlyUsed: TagItem[] = [
    {
      tag: "r220",
      title: "Combat",
    },
    {
      tag: "r215",
      title: "Food",
    },
    {
      tag: "r218",
      title: "Escape and Hiding",
    },
    {
      tag: "r207",
      title: "Travel Tables",
    },
    {
      tag: "r330",
      title: "Battle Reference",
    },
    {
      tag: "r205",
      title: "Lost",
    },
    {
      tag: "r203",
      title: "Daily Actions",
    },
    {
      tag: "r206",
      title: "Transport",
    },
    {
      tag: "r221",
      title: "Wounds and Endurance",
    },
  ];

  return (
    <Card title="🔥 Frequently Used">
      {frequentlyUsed.map((item: TagItem, index: number) => (
        <Link to={`/rule/${item.tag}`} key={index} className="flex flex-row">
          <span className="m-2">{item.tag}</span>
          <span className="my-2 text-black">{item.title}</span>
        </Link>
      ))}
    </Card>
  );
}

export default FrequentlyUsed;
