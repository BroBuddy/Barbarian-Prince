function ChoiceButton({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex justify-center text-bold items-center gap-4 pointer"
    >
      {children}
    </button>
  );
}

export default ChoiceButton;
