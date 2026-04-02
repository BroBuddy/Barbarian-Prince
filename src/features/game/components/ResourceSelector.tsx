const ResourceSelector = ({
  max,
  value,
  onChange,
}: {
  max: number;
  value: number;
  onChange: (val: number) => void;
}) => {
  return (
    <div className="flex flex-row flex-wrap">
      {Array.from({ length: max + 1 }, (_, i) => i).map((i) => (
        <div
          key={i}
          onClick={() => onChange(i)}
          style={{
            width: "25px",
            height: "25px",
            border: "1px solid #000",
            backgroundColor: i <= value ? "#b36a46" : "#fff",
            cursor: "pointer",
          }}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default ResourceSelector;
