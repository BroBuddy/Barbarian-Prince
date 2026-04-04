import History from "@/components/History";
import FrequentlyUsed from "../components/FrequentlyUsed";

export type TagItem = {
  tag: string;
  title: string;
};

function Helper() {
  return (
    <>
      <FrequentlyUsed />
      <History />
    </>
  );
}

export default Helper;
