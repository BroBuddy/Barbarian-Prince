import { Link, useLocation } from "react-router-dom";
import "./MobileNav.scss";

type Links = {
  to: string;
  icon: string;
  label: string;
};

const links: Links[] = [
  { to: "/", icon: "⚔️", label: "Game" },
  { to: "/table", icon: "🎲", label: "Tables" },
  { to: "/history", icon: "⏳", label: "History" },
  { to: "/map", icon: "🗺️", label: "Map" },
];

const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="mobile-nav">
      {links.map(({ to, icon, label }) => {
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
            <span className="mr-1">{icon}</span>
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNav;
