import { createContext } from "react";
import type { DataContextType } from "./ContextType";

export const DataContext = createContext<DataContextType | null>(null);
