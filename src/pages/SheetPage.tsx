import History from "@/components/History";
import FrequentlyUsed from "../components/FrequentlyUsed";
import Card from "@/components/Card";
import { Link } from "react-router-dom";

export type TagItem = {
  tag: string;
  title: string;
};

function SheetPage() {
  return (
    <>
      <Card title="Booklets">
        <div className="flex flex-col mb-1 pt-1 gap-8">
          <Link to="/rule">
            <span className="m-2 text-red w-4">Rxxx</span>
            <span className="my-2 text-black">Rules</span>
          </Link>

          <Link to="/event">
            <span className="m-2 text-purple w-4">Exxx</span>
            <span className="my-2 text-black">Events</span>
          </Link>
        </div>
      </Card>

      <FrequentlyUsed />

      <History />
    </>
  );
}

export default SheetPage;
