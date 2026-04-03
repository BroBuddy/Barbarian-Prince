import { Link, useLocation } from "react-router-dom";
import "./MobileNav.scss";

type Links = {
  to: string;
  label: string;
};

const links: Links[] = [
  { to: "/", label: "Game" },
  { to: "/rule/r203", label: "Actions" },
  { to: "/map", label: "Map" },
  { to: "/helper", label: "Helper" },
];

const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="mobile-nav">
      {links.map(({ to, label }) => {
        const isActive = location.pathname === to;

        return (
          <Link
            key={to}
            to={to}
            aria-label={`Navigate to ${label}`}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            className={` ${isActive ? "active" : ""}`}
          >
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNav;
