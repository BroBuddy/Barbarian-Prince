import Card from "@/components/Card";
import { useEffect, useState } from "react";
import MapImage from "../components/MapImage";
import type { MarkerType } from "../components/Marker";

function MapOverview() {
  const [selectedMap, setSelectedMap] = useState<number>(() => {
    const saved = localStorage.getItem("map_selected");
    return saved ? parseInt(saved) : 1;
  });

  const [marker, setMarker] = useState<MarkerType | null>(() => {
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

  const handleImageClick = (x: number, y: number) => {
    setMarker({ x, y });
  };

  return (
    <Card title="🗺️ Map">
      <MapImage
        selectedMap={selectedMap}
        marker={marker}
        onImageClick={handleImageClick}
        onMapChange={handleBadgeClick}
      />
    </Card>
  );
}

export default MapOverview;
