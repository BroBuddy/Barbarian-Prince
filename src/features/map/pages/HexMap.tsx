import React from "react";
import { useHexCanvas } from "../hooks/useHexCanvas";

const HexCanvas: React.FC = () => {
  const { canvasRef, containerRef, handleClick } = useHexCanvas();

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
    </div>
  );
};

export default HexCanvas;
