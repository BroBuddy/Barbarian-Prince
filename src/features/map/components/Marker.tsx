export interface MarkerType {
  x: number;
  y: number;
}

export default function Marker({ x, y }: MarkerType) {
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        backgroundColor: "transparent",
        border: "5px solid #7c1d78",
      }}
    />
  );
}
