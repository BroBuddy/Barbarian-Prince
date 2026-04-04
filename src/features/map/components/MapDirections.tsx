import styles from "./MapDirections.module.scss";

interface Props {
  canGoUp: boolean;
  canGoDown: boolean;
  canGoLeft: boolean;
  canGoRight: boolean;
  onMove: (dRow: number, dCol: number) => void;
}

const directions = [
  {
    label: "🔼",
    ariaLabel: "Nach oben",
    style: { top: 8, left: "50%", transform: "translateX(-50%)" },
    delta: [-1, 0] as const,
    can: (p: Props) => p.canGoUp,
  },
  {
    label: "🔽",
    ariaLabel: "Nach unten",
    style: { bottom: 8, left: "50%", transform: "translateX(-50%)" },
    delta: [1, 0] as const,
    can: (p: Props) => p.canGoDown,
  },
  {
    label: "◀️",
    ariaLabel: "Nach links",
    style: { left: 8, top: "50%", transform: "translateY(-50%)" },
    delta: [0, -1] as const,
    can: (p: Props) => p.canGoLeft,
  },
  {
    label: "▶️",
    ariaLabel: "Nach rechts",
    style: { right: 8, top: "50%", transform: "translateY(-50%)" },
    delta: [0, 1] as const,
    can: (p: Props) => p.canGoRight,
  },
];

function MapDirections(props: Props) {
  return directions.map(({ label, ariaLabel, style, delta, can }) => (
    <div key={ariaLabel} style={{ position: "absolute", ...style }}>
      <button
        className={`${styles.arrowBtn}${!can(props) ? ` ${styles.arrowBtnDisabled}` : ""}`}
        onClick={() => props.onMove(delta[0], delta[1])}
        aria-label={ariaLabel}
      >
        {label}
      </button>
    </div>
  ));
}

export default MapDirections;
