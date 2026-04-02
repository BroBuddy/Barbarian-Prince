import type { TagItem } from "@/pages/Helper";

export const useHistory = () => {
  const storage: string = "barbarian-prince";

  const addToHistory = (tag: string, title: string) => {
    const history = JSON.parse(localStorage.getItem(storage) || "[]");
    const filtered = history.filter((item: TagItem) => item.tag !== tag);
    const updated = [{ tag, title }, ...filtered].slice(0, 15);
    localStorage.setItem(storage, JSON.stringify(updated));
  };

  const getHistory = () => {
    return JSON.parse(localStorage.getItem(storage) || "[]");
  };

  return { addToHistory, getHistory };
};
