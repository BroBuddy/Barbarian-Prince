import { useHexCanvas } from "../hooks/useHexCanvas";
import { MoveModal } from "../components/MoveModal";
import { Sun } from "lucide-react";
import useGameStore from "@/features/game/store/gameStore";

function MapPage() {
  const {
    canvasRef,
    containerRef,
    handleClick,
    modalState,
    onAdvance,
    onClose,
  } = useHexCanvas();
  const nextDay = useGameStore((state) => state.nextDay);

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 50px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={nextDay}
        className="flex items-center text-bold text-white pointer mt-2 ml-5 pt-3 mx-1"
      >
        <Sun /> <span className="ml-1">Next Day</span>
      </button>

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
      </div>
    </div>
  );
}

export default MapPage;
