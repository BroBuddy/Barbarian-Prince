type TokenButtonProps = {
  label: number;
  isActive: boolean;
  color: string;
  onClick: () => void;
};

const TokenButton = ({ label, isActive, color, onClick }: TokenButtonProps) => (
  <button
    onClick={onClick}
    style={{
      minWidth: 33,
      height: 33,
      padding: "0 5px",
      border: `2px solid ${color}`,
      borderRadius: 4,
      backgroundColor: isActive ? color : "transparent",
      color: isActive ? "#fff" : color,
      fontSize: 11,
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    {label}
  </button>
);

export default TokenButton;
