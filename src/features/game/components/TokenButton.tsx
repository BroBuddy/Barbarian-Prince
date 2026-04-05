type TokenButtonProps = {
  label: number | string;
  isActive: boolean;
  color: string;
  onClick: () => void;
};

const TokenButton = ({ label, isActive, color, onClick }: TokenButtonProps) => (
  <button
    onClick={onClick}
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
      cursor: "pointer",
    }}
  >
    {label}
  </button>
);

export default TokenButton;
