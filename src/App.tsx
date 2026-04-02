import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import MobileNav from "./components/MobileNav";
import Header from "./components/Header";
import "./App.scss";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <MobileNav />
    </>
  );
}

export default App;
