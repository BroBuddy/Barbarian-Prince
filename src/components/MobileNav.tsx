import { Link, useLocation } from "react-router-dom";
import "./MobileNav.scss";

type Links = {
  to: string;
  label: string;
};

const links: Links[] = [
  { to: "/", label: "Game" },
  { to: "/event", label: "Events" },
  { to: "/history", label: "History" },
];

const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="mobile-nav">
      {links.map(({ to, label }) => {
        const isActive = location.pathname === to;
        return (
          <Link key={to} to={to} className={isActive ? "active" : ""}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNav;
