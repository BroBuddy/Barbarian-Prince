import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Preloader from "./components/Preloader";
import Game from "./features/pages/Game";
import EventOverview from "./features/events/pages/EventOverview";
import EventDetail from "./features/events/pages/EventDetail";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Game /> },
      { path: "/event", element: <EventOverview /> },
      { path: "/event/:tag", element: <EventDetail /> },
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
