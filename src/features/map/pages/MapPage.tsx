import { useHexCanvas } from "../hooks/useHexCanvas";
import { MoveModal } from "../components/MoveModal";
import { useState } from "react";
import { MidnightModal } from "../components/MidnightModal";
import { Moon } from "lucide-react";

function MapPage() {
  const {
    canvasRef,
    containerRef,
    handleClick,
    modalState,
    onAdvance,
    onClose,
  } = useHexCanvas();

  const [midnightOpen, setMidnightOpen] = useState<boolean>(false);

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 50px)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        paddingTop: "15px",
      }}
    >
      <div
        className="pointer text-white bg-black rounded py-1"
        style={{
          position: "absolute",
          bottom: "40px",
          right: "23px",
          zIndex: 10,
        }}
      >
        <button
          onClick={() => setMidnightOpen(true)}
          className="flex items-center text-white pointer"
        >
          <Moon />
        </button>
      </div>

      <div
        ref={containerRef}
        className="bg-black"
        style={{
          flex: 1,
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
          <MoveModal
            state={modalState}
            onAdvance={onAdvance}
            onClose={onClose}
          />
        )}

        {midnightOpen && (
          <MidnightModal onClose={() => setMidnightOpen(false)} />
        )}
      </div>
    </div>
  );
}

export default MapPage;
