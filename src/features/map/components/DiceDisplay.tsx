function DiceDisplay({
  isRolling,
  displayRoll,
}: {
  isRolling: boolean;
  displayRoll: number | null;
}) {
  if (!displayRoll) return null;
  return (
    <p className="text-red" style={{ fontSize: "1rem", minHeight: "1rem" }}>
      🎲 {isRolling ? displayRoll : <strong>{displayRoll}</strong>}
    </p>
  );
}

export default DiceDisplay;
