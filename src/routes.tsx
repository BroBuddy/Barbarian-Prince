import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Preloader from "./components/Preloader";
import Game from "./pages/Game";
import EventOverview from "./features/events/pages/EventOverview";
import EventDetail from "./features/events/pages/EventDetail";
import History from "./pages/History";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Game /> },
      { path: "/event", element: <EventOverview /> },
      { path: "/event/:tag", element: <EventDetail /> },
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
