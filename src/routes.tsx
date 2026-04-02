import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Preloader from "./components/Preloader";
import Game from "./pages/Game";
import EventOverview from "./features/events/pages/EventOverview";
import EventDetail from "./features/events/pages/EventDetail";
import History from "./pages/History";
import TableOverview from "./features/table/pages/TableOverview";
import TableDetail from "./features/table/pages/TableDetail";
import TreasureTable from "./features/table/pages/TreasureTable";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Game /> },
      { path: "/event", element: <EventOverview /> },
      { path: "/event/:tag", element: <EventDetail /> },
      { path: "/table", element: <TableOverview /> },
      { path: "/table/treasure", element: <TreasureTable /> },
      { path: "/table/:id", element: <TableDetail /> },
      { path: "/history", element: <History /> },
    ],
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
