import { useHexCanvas } from "../hooks/useHexCanvas";
import { MoveModal } from "../components/MoveModal";
import MidnightModal from "../components/MidnightModal";
import DailyActionsModal from "../components/DailyActionsModal";

function MapPage() {
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
      style={{
        width: "100%",
        maxWidth: "768px",
        height: "calc(100vh - 50px)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        paddingTop: "15px",
      }}
    >
      <DailyActionsModal />
      <MidnightModal />

      <div
        ref={containerRef}
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
