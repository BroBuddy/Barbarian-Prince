interface MapSelectorProps {
  selectedMap: number;
  onSelect: (num: number) => void;
}

export default function MapSelector({
  selectedMap,
  onSelect,
}: MapSelectorProps) {
  return (
    <div className="flex flex-wrap w-12 mb-1">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <div
          key={num}
          className={`w-3 h-3 mr-1 mb-1 pointer flex items-center justify-center rounded 
            ${num === selectedMap ? "bg-purple" : "bg-orange"} text-white text-sm`}
          onClick={() => onSelect(num)}
        >
          {num}
        </div>
      ))}
    </div>
  );
}
