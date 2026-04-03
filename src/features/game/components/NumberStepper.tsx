type NumberStepperProps = {
  value: number;
  min?: number;
  max: number;
  onChange: (value: number) => void;
};

const NumberStepper = ({
  value,
  min = 0,
  max,
  onChange,
}: NumberStepperProps) => {
  return (
    <div className="flex items-center gap-2">
      <button
        style={{ border: "none" }}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="px-3 py-1 bg-dark-grey text-white"
      >
        -
      </button>

      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) =>
          onChange(Math.min(max, Math.max(min, Number(e.target.value))))
        }
        className="w-6 text-center bg-grey"
      />

      <button
        style={{ border: "none" }}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="px-3 py-1 bg-dark-grey text-white"
      >
        +
      </button>
    </div>
  );
};

export default NumberStepper;
