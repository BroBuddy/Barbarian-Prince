import { travelData } from "../data/travelData";
import type { Travel } from "../types/TravelType";

const getTravelData = () => travelData;

const getTravelDataById = (id: number): Travel => {
  return travelData.find((item: Travel) => item.id === id) as Travel;
};

export { getTravelData, getTravelDataById };
