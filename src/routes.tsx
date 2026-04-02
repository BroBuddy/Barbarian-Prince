import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Preloader from "./components/Preloader";

const Game = lazy(() => import("./pages/Game"));
const EventOverview = lazy(
  () => import("./features/events/pages/EventOverview"),
);
const EventDetail = lazy(() => import("./features/events/pages/EventDetail"));
const History = lazy(() => import("./pages/History"));
const TableOverview = lazy(
  () => import("./features/table/pages/TableOverview"),
);
const TableDetail = lazy(() => import("./features/table/pages/TableDetail"));
const TreasureTable = lazy(
  () => import("./features/table/pages/TreasureTable"),
);
const SearchingRuinsTable = lazy(
  () => import("./features/table/pages/SearchingRuins"),
);
const MapOverview = lazy(() => import("./features/map/pages/MapOverview"));
const RuleOverview = lazy(() => import("./features/rule/pages/RuleOverview"));
const RuleDetail = lazy(() => import("./features/rule/pages/RuleDetail"));

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Game /> },
      { path: "/rule", element: <RuleOverview /> },
      { path: "/rule/:tag", element: <RuleDetail /> },
      { path: "/event", element: <EventOverview /> },
      { path: "/event/:tag", element: <EventDetail /> },
      { path: "/table", element: <TableOverview /> },
      { path: "/table/treasure", element: <TreasureTable /> },
      { path: "/table/ruins", element: <SearchingRuinsTable /> },
      { path: "/table/:id", element: <TableDetail /> },
      { path: "/map", element: <MapOverview /> },
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
