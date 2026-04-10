type TokenButtonProps = {
  label: number | string;
  isActive?: boolean;
  color: string;
  disabled?: boolean;
  onClick: () => void;
};

const TokenButton = ({
  label,
  isActive,
  color,
  disabled,
  onClick,
}: TokenButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      minWidth: 30,
      height: 30,
      padding: "0 5px",
      border: `2px solid ${color}`,
      borderRadius: 5,
      backgroundColor: isActive ? color : "transparent",
      color: isActive ? "#fff" : color,
      fontSize: 11,
      fontWeight: "bold",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.35 : 1,
    }}
  >
    {label}
  </button>
);

export default TokenButton;
