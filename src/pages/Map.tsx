import Badge from "@/components/Badge";
import Card from "@/components/Card";
import { useEffect, useState } from "react";

interface Marker {
  x: number;
  y: number;
}

function Map() {
  const [selectedMap, setSelectedMap] = useState<number>(() => {
    const saved = localStorage.getItem("map_selected");
    return saved ? parseInt(saved) : 1;
  });

  const [marker, setMarker] = useState<Marker | null>(() => {
    const saved = localStorage.getItem("map_marker");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("map_selected", selectedMap.toString());
  }, [selectedMap]);

  useEffect(() => {
    if (marker) {
      localStorage.setItem("map_marker", JSON.stringify(marker));
    } else {
      localStorage.removeItem("map_marker");
    }
  }, [marker]);

  const handleBadgeClick = (num: number) => {
    setSelectedMap(num);
    setMarker(null);
  };

  const handleImageClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLImageElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - 10;
    const y = e.clientY - rect.top - 10;

    setMarker({ x, y });
  };

  return (
    <Card title="Map">
      <div className="flex mb-2">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="pointer"
            onClick={() => handleBadgeClick(num)}
          >
            <Badge
              icon="🗺️"
              text={num.toString()}
              variant={num === selectedMap ? "dark" : "default"}
            />
          </div>
        ))}
      </div>

      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={`/images/map_${selectedMap}.webp`}
          alt={`Map part ${selectedMap}`}
          className="pointer"
          onClick={handleImageClick}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />

        {marker && (
          <div
            style={{
              position: "absolute",
              top: marker.y,
              left: marker.x,
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              backgroundColor: "#7c1d78",
              border: "2px solid white",
            }}
          />
        )}
      </div>
    </Card>
  );
}

export default Map;
