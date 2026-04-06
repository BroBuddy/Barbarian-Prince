import { createContext } from "react";
import type { DataContextType } from "./types/ContextType";

export const DataContext = createContext<DataContextType | null>(null);
