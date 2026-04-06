import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Preloader from "./components/Preloader";

const GamePage = lazy(() => import("./features/game/pages/GamePage"));
const CharacterPage = lazy(
  () => import("./features/character/pages/CharacterPage"),
);
const FollowerPage = lazy(
  () => import("./features/follower/pages/FollowerPage"),
);
const EnemyPage = lazy(() => import("./features/enemy/pages/EnemyPage"));
const EventPage = lazy(() => import("./features/events/pages/EventPage"));
const EventDetailPage = lazy(
  () => import("./features/events/pages/EventDetailPage"),
);
const MapPage = lazy(() => import("./features/map/pages/MapPage"));
const RulePage = lazy(() => import("./features/rule/pages/RulePage"));
const RuleDetailPage = lazy(
  () => import("./features/rule/pages/RuleDetailPage"),
);
const SheetPage = lazy(() => import("./pages/SheetPage"));

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <GamePage /> },
      { path: "/rule", element: <RulePage /> },
      { path: "/rule/:tag", element: <RuleDetailPage /> },
      { path: "/event", element: <EventPage /> },
      { path: "/event/:tag", element: <EventDetailPage /> },
      { path: "/map", element: <MapPage /> },
      { path: "/character", element: <CharacterPage /> },
      { path: "/follower", element: <FollowerPage /> },
      { path: "/enemy", element: <EnemyPage /> },
      { path: "/sheet", element: <SheetPage /> },
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
