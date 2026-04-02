import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Preloader from "./components/Preloader";
import Game from "./pages/Game";
import EventOverview from "./features/events/pages/EventOverview";
import EventDetail from "./features/events/pages/EventDetail";
import History from "./pages/History";
import TravelOverview from "./features/travel/pages/TravelOverview";
import TravelDetail from "./features/travel/pages/TravelDetail";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Game /> },
      { path: "/event", element: <EventOverview /> },
      { path: "/event/:tag", element: <EventDetail /> },
      { path: "/travel", element: <TravelOverview /> },
      { path: "/travel/:id", element: <TravelDetail /> },
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
