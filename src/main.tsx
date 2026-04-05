import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes";
import { DataProvider } from "./context/DataProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider>
      <AppRouter />
    </DataProvider>
  </StrictMode>,
);
