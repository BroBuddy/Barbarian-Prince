import History from "@/components/History";
import FrequentlyUsed from "../components/FrequentlyUsed";

export type TagItem = {
  tag: string;
  title: string;
};

function SheetPage() {
  return (
    <>
      <FrequentlyUsed />
      <History />
    </>
  );
}

export default SheetPage;
