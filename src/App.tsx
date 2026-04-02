import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import MobileNav from "./components/MobileNav";
import "./App.scss";
import Header from "./components/Header";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="pt-1">
        <Outlet />
      </div>
      <MobileNav />
    </>
  );
}

export default App;
