import { Link, useLocation } from "react-router-dom";
import styles from "./MobileNav.module.scss";

type Links = {
  to: string;
  icon: string;
};

const links: Links[] = [
  { to: "/", icon: "📖" },
  { to: "/rule/r203", icon: "📅" },
  { to: "/map", icon: "🗺️" },
  { to: "/character", icon: "🧍" },
  { to: "/follower", icon: "🧑‍🤝‍🧑" },
  { to: "/helper", icon: "📜" },
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
