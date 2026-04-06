import { useRef, useEffect, useCallback } from "react";
import useGameStore from "@/features/game/store/gameStore";
import { hexData } from "../data/hexData";
import {
  HEX_WIDTH,
  HEX_VERTICAL_SPACING,
  HEX_SIZE,
  HEX_HEIGHT,
} from "../lib/hexConstants";
import { isAdjacent } from "../lib/hexUtils";
import { useMoveModal } from "./useMoveModal";
import { drawAllHexes } from "../lib/hexCanvasRenderer";

export function useHexCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerPosition = useGameStore((state) => state.playerPosition);
  const setPlayerPosition = useGameStore((state) => state.setPlayerPosition);
  const clearPlayerPosition = useGameStore(
    (state) => state.clearPlayerPosition,
  );
  const {
    state: modalState,
    openModal,
    advancePhase,
    closeModal,
  } = useMoveModal();

  const scrollToMarker = useCallback((col: number, row: number) => {
    const container = containerRef.current;
    if (!container) return;

    const xOffset = col * (HEX_WIDTH * 0.75);
    const yOffset = col % 2 !== 0 ? HEX_VERTICAL_SPACING / 2 : 0;
    const cx = xOffset + HEX_SIZE;
    const cy = row * HEX_VERTICAL_SPACING + yOffset + HEX_HEIGHT / 2;

    container.scrollTo({
      left: cx - container.clientWidth / 2,
      top: cy - container.clientHeight / 2,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const totalCols = hexData.length;
    const totalRows = Math.max(...hexData.map((col) => col.length));
    canvas.width = totalCols * (HEX_WIDTH * 0.75) + HEX_WIDTH * 0.25;
    canvas.height = totalRows * HEX_VERTICAL_SPACING + HEX_VERTICAL_SPACING / 2;

    drawAllHexes(ctx, hexData, playerPosition ?? undefined).then(() => {
      if (playerPosition)
        scrollToMarker(playerPosition.col, playerPosition.row);
    });
  }, [playerPosition, scrollToMarker]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    const col = Math.floor(px / (HEX_WIDTH * 0.75));
    const yOffset = col % 2 !== 0 ? HEX_VERTICAL_SPACING / 2 : 0;
    const row = Math.floor((py - yOffset) / HEX_VERTICAL_SPACING);
    const isClickOnMarker =
      playerPosition?.col === col && playerPosition?.row === row;

    if (
      col < 0 ||
      col >= hexData.length ||
      row < 0 ||
      row >= hexData[col].length
    )
      return;

    if (isClickOnMarker) {
      clearPlayerPosition();
      return;
    }

    if (!playerPosition) {
      setPlayerPosition(col, row);
      return;
    }

    if (isAdjacent(playerPosition.col, playerPosition.row, col, row)) {
      const fromTile = hexData[playerPosition.col][playerPosition.row];
      const toTile = hexData[col][row];
      openModal(fromTile.terrain, toTile.terrain, col, row);
    }
  };

  const onAdvance = () => {
    const result = advancePhase();
    if (result) setPlayerPosition(result.col, result.row);
  };

  return {
    canvasRef,
    containerRef,
    handleClick,
    modalState,
    onAdvance,
    onClose: closeModal,
  };
}
