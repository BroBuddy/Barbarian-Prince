import React from "react";
import { useHexCanvas } from "../hooks/useHexCanvas";
import { MoveModal } from "../components/MoveModal";

const HexCanvas: React.FC = () => {
  const {
    canvasRef,
    containerRef,
    handleClick,
    modalState,
    onAdvance,
    onClose,
  } = useHexCanvas();

  return (
    <div
      ref={containerRef}
      className="bg-black"
      style={{
        paddingTop: "20px",
        width: "100%",
        height: "calc(100vh - 50px)",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <canvas
        ref={canvasRef}
        tabIndex={-1}
        onClick={handleClick}
        className="bg-black pointer"
        style={{
          outline: "none",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
          WebkitTouchCallout: "none",
        }}
      />

      {modalState && (
        <MoveModal state={modalState} onAdvance={onAdvance} onClose={onClose} />
      )}
    </div>
  );
};

export default HexCanvas;
