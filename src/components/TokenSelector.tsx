type Denomination = {
  value: number;
  count: number;
};

type TokenSelectorProps = {
  denominations: Denomination[];
  active: Record<string, boolean>;
  onChange: (active: Record<string, boolean>, total: number) => void;
  color?: string;
};

const TokenSelector = ({
  denominations,
  active,
  onChange,
  color = "#15803d",
}: TokenSelectorProps) => {
  const toggle = (key: string) => {
    const next = { ...active, [key]: !active[key] };
    const total = denominations
      .flatMap(({ value, count }) =>
        Array.from({ length: count }, (_, i) => {
          const k = `${value}_${i}`;
          return next[k] ? value : 0;
        }),
      )
      .reduce((a, b) => a + b, 0);
    onChange(next, total);
  };

  return (
    <div className="flex flex-col gap-2">
      {denominations.map(({ value, count }) => (
        <div key={value} className="flex flex-row gap-1 items-center">
          {Array.from({ length: count }, (_, i) => {
            const key = `${value}_${i}`;
            const isActive = !!active[key];

            return (
              <button
                key={key}
                onClick={() => toggle(key)}
                style={{
                  backgroundColor: isActive ? color : "transparent",
                  borderColor: color,
                  width: 36,
                  height: 36,
                  border: "2px solid",
                  borderRadius: 4,
                  color: isActive ? "#fff" : color,
                  fontSize: 11,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {value}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TokenSelector;
