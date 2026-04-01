import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Preloader from "./components/Preloader";
import Game from "./features/pages/Game";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [{ path: "/", element: <Game /> }],
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
