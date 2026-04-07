import Card from "@/components/Card";
import useGameStore from "@/features/game/store/gameStore";
import { Check, Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";

function CharacterBackpack() {
  const { backpack, addBackpackItem, updateBackpackItem, removeBackpackItem } =
    useGameStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<string>("");

  const handleAdd = () => {
    addBackpackItem();
  };

  const handleEdit = (id: string, currentText: string) => {
    setEditingId(id);
    setDraft(currentText);
  };

  const handleSave = (id: string) => {
    if (!draft.trim()) return;
    updateBackpackItem(id, draft);
    setEditingId(null);
    setDraft("");
  };

  return (
    <Card title="Backpack">
      <button className="cardBtn" onClick={() => handleAdd()} title="Remove">
        <Plus />
      </button>

      {backpack.length === 0 && (
        <p className="text-center">Backpack is empty yet.</p>
      )}

      <ul className="mx-2 mt-3">
        {backpack.map((item) => (
          <li
            key={item.id}
            className="flex flex-row items-center my-2 justify-between w-full"
          >
            {editingId === item.id ? (
              <>
                <button onClick={() => handleSave(item.id)} title="Speichern">
                  <Check size={20} />
                </button>
                <input
                  className="input w-30"
                  value={draft}
                  autoFocus
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSave(item.id)}
                />
              </>
            ) : (
              <>
                <button
                  onClick={() => handleEdit(item.id, item.text)}
                  title="Bearbeiten"
                >
                  <Pencil size={20} />
                </button>
                <span className="w-30">{item.text}</span>
                <button
                  onClick={() => removeBackpackItem(item.id)}
                  title="Entfernen"
                >
                  <Trash size={20} />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default CharacterBackpack;
