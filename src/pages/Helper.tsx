import History from "@/components/History";
import FrequentlyUsed from "../components/FrequentlyUsed";

export type TagItem = {
  tag: string;
  title: string;
};

function Helper() {
  return (
    <section className="flex flex-col">
      <FrequentlyUsed />
      <History />
    </section>
  );
}

export default Helper;
