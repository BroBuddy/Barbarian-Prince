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
    const x = e.clientX - rect.left - 17;
    const y = e.clientY - rect.top - 17;

    setMarker({ x, y });
  };

  return (
    <Card title="Map">
      <div className="flex flex-wrap w-12 mb-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div
            key={num}
            className={`w-3 h-3 mr-1 mb-1 pointer flex items-center justify-center rounded 
        ${num === selectedMap ? "bg-purple" : "bg-orange"} text-white text-sm`}
            onClick={() => handleBadgeClick(num)}
          >
            {num}
          </div>
        ))}
      </div>

      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={`/images/image_part_00${selectedMap}.png`}
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
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              backgroundColor: "transparent",
              border: "5px solid #7c1d78",
            }}
          />
        )}
      </div>
    </Card>
  );
}

export default Map;
