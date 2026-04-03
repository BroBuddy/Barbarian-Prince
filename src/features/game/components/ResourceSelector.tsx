type ResourceSelectorProps = {
  max: number;
  value: number;
  onChange: (val: number) => void;
  color?: string;
};

const ResourceSelector = ({
  max,
  value,
  onChange,
  color = "#888",
}: ResourceSelectorProps) => {
  const boxColor = "#ddd";

  return (
    <div className="flex flex-row flex-wrap">
      {Array.from({ length: max + 1 }, (_, i) => i).map((index: number) => (
        <div
          key={index}
          onClick={() => onChange(index)}
          style={{
            width: "25px",
            height: "25px",
            border: "1px solid #000",
            backgroundColor: index <= value ? color : boxColor,
            color: index <= value ? "#fff" : "#000",
            cursor: "pointer",
          }}
        >
          {index}
        </div>
      ))}
    </div>
  );
};

export default ResourceSelector;
