import { Link, useLocation } from "react-router-dom";
import {
  CalendarDays,
  Map,
  ScrollText,
  ShieldUser,
  Castle,
  Skull,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import styles from "./NavBar.module.scss";

type Links = {
  to: string;
  icon: ReactNode;
};

const links: Links[] = [
  { to: "/", icon: <Castle /> },
  { to: "/sheet", icon: <ScrollText /> },
  { to: "/character", icon: <ShieldUser /> },
  { to: "/follower", icon: <Users /> },
  { to: "/enemy", icon: <Skull /> },
  { to: "/map", icon: <Map /> },
];

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className={styles.mobileNav}>
      {links.map(({ to, icon }) => {
        const isActive = location.pathname === to;

        return (
          <Link
            key={to}
            to={to}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              opacity: isActive ? 0.6 : 1,
              pointerEvents: isActive ? "none" : "auto",
              cursor: isActive ? "default" : "pointer",
            }}
            className={` ${isActive ? "active" : ""}`}
          >
            <span>{icon}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
