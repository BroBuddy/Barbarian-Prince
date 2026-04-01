export const useHistory = () => {
  const storage: string = "barbarian-prince";

  const addToHistory = (id: string, title: string) => {
    const history = JSON.parse(localStorage.getItem(storage) || "[]");
    const filtered = history.filter((item: any) => item.id !== id);
    const updated = [{ id, title }, ...filtered].slice(0, 10);
    localStorage.setItem(storage, JSON.stringify(updated));
  };

  const getHistory = () => {
    return JSON.parse(localStorage.getItem(storage) || "[]");
  };

  return { addToHistory, getHistory };
};
