import Marker, { type MarkerType } from "./Marker";

interface MapImageProps {
  selectedMap: number;
  marker: MarkerType | null;
  onImageClick: (x: number, y: number) => void;
}

export default function MapImage({
  selectedMap,
  marker,
  onImageClick,
}: MapImageProps) {
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const target = e.target as HTMLImageElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - 20;
    const y = e.clientY - rect.top - 20;
    onImageClick(x, y);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={`/images/image_part_00${selectedMap}.png`}
        alt={`Map part ${selectedMap}`}
        className="pointer"
        onClick={handleClick}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      {marker && <Marker x={marker.x} y={marker.y} />}
    </div>
  );
}
