import React from "react";
import { useHexCanvas } from "../hooks/useHexCanvas";

const HexCanvas: React.FC = () => {
  const { canvasRef, containerRef, handleClick } = useHexCanvas();

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        backgroundColor: "#000",
        height: "calc(100vh - 50px)",
        marginTop: "-6px",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <canvas ref={canvasRef} onClick={handleClick} className="pointer" />
    </div>
  );
};

export default HexCanvas;
