import Card from "@/components/Card";
import type { TagItem } from "../pages/Helper";
import { Link } from "react-router-dom";
import { getLinkClass } from "@/lib/formatters";

const frequentlyUsed: TagItem[] = [
  {
    tag: "r207",
    title: "Travel Tables",
  },
  {
    tag: "r226",
    title: "Treasure Table",
  },
  {
    tag: "r208",
    title: "Searching Ruins",
  },
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
    tag: "r205",
    title: "Lost",
  },
];

function FrequentlyUsed() {
  return (
    <Card title="Frequently Used">
      {frequentlyUsed.map((item: TagItem, index: number) => (
        <Link
          to={`/rule/${item.tag}`}
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

export default FrequentlyUsed;
