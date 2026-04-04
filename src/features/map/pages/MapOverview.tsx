import Card from "@/components/Card";
import { useEffect, useState } from "react";
import MapImage from "../components/MapImage";
import type { MarkerType } from "../components/Marker";
import { REGION_NAMES } from "@/lib/constants";

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

  const handleMapChange = (num: number) => {
    setSelectedMap(num);
    setMarker(null);
  };

  const handleMapClick = (x: number, y: number) => {
    setMarker({ x, y });
  };

  return (
    <Card title={`Northlands · ${REGION_NAMES[selectedMap]}`}>
      <MapImage
        selectedMap={selectedMap}
        marker={marker}
        onMapClick={handleMapClick}
        onMapChange={handleMapChange}
      />
    </Card>
  );
}

export default MapOverview;
