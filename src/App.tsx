import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Header from "./components/Header";
import "./App.scss";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Header />

      <div className="pt-5">
        <Outlet />
      </div>

      <NavBar />
    </>
  );
}

export default App;
