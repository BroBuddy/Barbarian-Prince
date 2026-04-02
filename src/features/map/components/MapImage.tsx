import Marker, { type MarkerType } from "./Marker";
import MapDirections from "./MapDirections";
import "./MapImage.scss";

interface MapImageProps {
  selectedMap: number;
  marker: MarkerType | null;
  onImageClick: (x: number, y: number) => void;
  onMapChange: (newMap: number) => void;
}

const GRID_COLS = 3;
const GRID_ROWS = 3;

const REGION_NAMES: Record<number, string> = {
  1: "Northwest",
  2: "North",
  3: "Northeast",
  4: "West",
  5: "Center",
  6: "East",
  7: "Southwest",
  8: "South",
  9: "Southeast",
};

function getGridPos(map: number) {
  const col = (map - 1) % GRID_COLS;
  const row = Math.floor((map - 1) / GRID_COLS);

  return { col, row };
}

function getMapNumber(row: number, col: number) {
  return row * GRID_COLS + col + 1;
}

export default function MapImage({
  selectedMap,
  marker,
  onImageClick,
  onMapChange,
}: MapImageProps) {
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const target = e.target as HTMLImageElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - 22;
    const y = e.clientY - rect.top - 22;
    onImageClick(x, y);
  };

  const { col, row } = getGridPos(selectedMap);

  const canGoUp = row > 0;
  const canGoDown = row < GRID_ROWS - 1;
  const canGoLeft = col > 0;
  const canGoRight = col < GRID_COLS - 1;

  const moveOnMap = (dRow: number, dCol: number) => {
    onMapChange(getMapNumber(row + dRow, col + dCol));
  };

  return (
    <>
      <p className="text-center mb-2">
        Northlands · {REGION_NAMES[selectedMap]}
      </p>

      <div className="map-container">
        <img
          src={`/images/image_part_00${selectedMap}.png`}
          alt={`Map part ${selectedMap}`}
          className="map-image"
          onClick={handleClick}
        />

        <MapDirections
          canGoUp={canGoUp}
          canGoDown={canGoDown}
          canGoLeft={canGoLeft}
          canGoRight={canGoRight}
          onMove={moveOnMap}
        />

        {marker && <Marker x={marker.x} y={marker.y} />}
      </div>
    </>
  );
}
