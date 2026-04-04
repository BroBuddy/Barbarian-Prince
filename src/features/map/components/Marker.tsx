import styles from "./Marker.module.scss";

export interface MarkerType {
  x: number;
  y: number;
}

export default function Marker({ x, y }: MarkerType) {
  return (
    <div
      className={styles.marker}
      style={{
        top: y,
        left: x,
      }}
    >
      BP
    </div>
  );
}
