import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Preloader from "./components/Preloader";

const Game = lazy(() => import("./features/game/pages/GameOverview"));
const GameCharacter = lazy(
  () => import("./features/character/pages/GameCharacter"),
);
const GameFollower = lazy(
  () => import("./features/follower/pages/GameFollower"),
);
const EventOverview = lazy(
  () => import("./features/events/pages/EventOverview"),
);
const EventDetail = lazy(() => import("./features/events/pages/EventDetail"));
const Helper = lazy(() => import("./pages/Helper"));
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
const HexMap = lazy(() => import("./features/map/pages/HexMap"));
const RuleOverview = lazy(() => import("./features/rule/pages/RuleOverview"));
const RuleDetail = lazy(() => import("./features/rule/pages/RuleDetail"));

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Game /> },
      { path: "/character", element: <GameCharacter /> },
      { path: "/follower", element: <GameFollower /> },
      { path: "/rule", element: <RuleOverview /> },
      { path: "/rule/:tag", element: <RuleDetail /> },
      { path: "/event", element: <EventOverview /> },
      { path: "/event/:tag", element: <EventDetail /> },
      { path: "/table", element: <TableOverview /> },
      { path: "/table/treasure", element: <TreasureTable /> },
      { path: "/table/ruins", element: <SearchingRuinsTable /> },
      { path: "/table/:id", element: <TableDetail /> },
      { path: "/map", element: <HexMap /> },
      { path: "/helper", element: <Helper /> },
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
