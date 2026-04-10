import TokenButton from "./TokenButton";

export type Token = { label: number };

export type TokenGridProps = {
  rows: Token[][];
  active: Record<number, boolean>;
  color: string;
  onToggle: (value: number) => void;
};
const TokenGrid = ({ rows, active, color, onToggle }: TokenGridProps) => (
  <div className="flex flex-col items-center gap-1">
    {rows.map((row, ri) => (
      <div key={ri} className="flex flex-wrap text-center gap-1">
        {row.map(({ label }) => {
          return (
            <TokenButton
              key={label}
              label={label}
              isActive={!!active[label]}
              color={color}
              onClick={() => onToggle(label)}
            />
          );
        })}
      </div>
    ))}
  </div>
);

export default TokenGrid;
