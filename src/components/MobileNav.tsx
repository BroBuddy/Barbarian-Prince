import { Link, useLocation } from "react-router-dom";
import {
  CalendarDays,
  Map,
  ScrollText,
  UserPlus,
  ShieldUser,
  Castle,
} from "lucide-react";
import type { ReactNode } from "react";
import styles from "./MobileNav.module.scss";

type Links = {
  to: string;
  icon: ReactNode;
};

const links: Links[] = [
  { to: "/", icon: <Castle /> },
  { to: "/rule/r203", icon: <CalendarDays /> },
  { to: "/map", icon: <Map /> },
  { to: "/character", icon: <ShieldUser /> },
  { to: "/follower", icon: <UserPlus /> },
  { to: "/helper", icon: <ScrollText /> },
];

const MobileNav = () => {
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
              opacity: isActive ? 0.4 : 1,
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

export default MobileNav;
