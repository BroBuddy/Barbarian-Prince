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

      <div className="text-center mt-2">
        <img src="/images/image_002.png" alt="Barbarian Prince" className="" />
      </div>

      <History />

      <div className="text-center mt-2">
        <img src="/images/image_003.png" alt="Barbarian Prince" className="" />
      </div>
    </section>
  );
}

export default Helper;
