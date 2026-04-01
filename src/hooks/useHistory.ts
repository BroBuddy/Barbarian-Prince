import type { HistoryItem } from "@/pages/History";

export const useHistory = () => {
  const storage: string = "barbarian-prince";

  const addToHistory = (tag: string, title: string) => {
    const history = JSON.parse(localStorage.getItem(storage) || "[]");
    const filtered = history.filter((item: HistoryItem) => item.tag !== tag);
    const updated = [{ tag, title }, ...filtered].slice(0, 10);
    localStorage.setItem(storage, JSON.stringify(updated));
  };

  const getHistory = () => {
    return JSON.parse(localStorage.getItem(storage) || "[]");
  };

  return { addToHistory, getHistory };
};
