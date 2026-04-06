import { BookOpen, Sparkles } from "lucide-react";
import type { Edition, EditionType } from "../types/GameType";

export const editions: EditionType[] = [
  {
    id: "original" as Edition,
    label: "Original Edition",
    icon: <BookOpen size={20} />,
  },
  {
    id: "42th" as Edition,
    label: "42nd Edition",
    icon: <Sparkles size={20} />,
  },
  {
    id: "ultimate" as Edition,
    label: "Ultimate Edition",
    icon: <Sparkles size={20} />,
  },
];
