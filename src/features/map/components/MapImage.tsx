import Marker, { type MarkerType } from "./Marker";
import MapDirections from "./MapDirections";
import "./MapImage.scss";

interface MapImageProps {
  selectedMap: number;
  marker: MarkerType | null;
  onMapClick: (x: number, y: number) => void;
  onMapChange: (newMap: number) => void;
}

const GRID_COLS = 3;
const GRID_ROWS = 3;

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
  onMapClick,
  onMapChange,
}: MapImageProps) {
  const rectModifier = 20;

  const handleMapClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLImageElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rectModifier;
    const y = e.clientY - rect.top - rectModifier;
    onMapClick(x, y);
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
      <div className="map-container">
        <img
          src={`/images/image_part_00${selectedMap}.png`}
          alt={`Map part ${selectedMap}`}
          className="map-image"
          onClick={handleMapClick}
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
