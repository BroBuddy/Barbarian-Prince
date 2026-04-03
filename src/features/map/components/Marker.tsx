import "./Marker.scss";

export interface MarkerType {
  x: number;
  y: number;
}

export default function Marker({ x, y }: MarkerType) {
  return (
    <div
      className="marker"
      style={{
        top: y,
        left: x,
      }}
    >
      BP
    </div>
  );
}
