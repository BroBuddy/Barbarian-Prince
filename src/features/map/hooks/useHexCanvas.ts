import { useRef, useEffect, useCallback } from "react";
import { drawHex, loadImage } from "@/lib/mapHelper";
import useGameStore from "@/features/game/store/gameStore";
import { hexData } from "../data/hexData";

const HEX_SIZE = 30;
const HEX_WIDTH = 2 * HEX_SIZE;
const HEX_HEIGHT = Math.sqrt(3) * HEX_SIZE;
const HEX_VERTICAL_SPACING = HEX_HEIGHT;

export function useHexCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerPosition = useGameStore((state) => state.playerPosition);
  const setPlayerPosition = useGameStore((state) => state.setPlayerPosition);

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

  const drawAll = useCallback(
    async (ctx: CanvasRenderingContext2D, position: typeof playerPosition) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const offscreen = document.createElement("canvas");
      offscreen.width = canvas.width;
      offscreen.height = canvas.height;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      for (const [cIdx, col] of hexData.entries()) {
        const xOffset = cIdx * (HEX_WIDTH * 0.75);
        const yOffset = cIdx % 2 !== 0 ? HEX_VERTICAL_SPACING / 2 : 0;

        for (const [rIdx, tile] of col.entries()) {
          const x = xOffset;
          const y = rIdx * HEX_VERTICAL_SPACING + yOffset;

          try {
            const img = await loadImage(`/images/terrains/${tile.terrain}.png`);
            drawHex({
              ctx: offCtx,
              x,
              y,
              size: HEX_SIZE,
              img,
              label: tile.label,
              rotate: tile.rotate,
            });
          } catch {
            console.warn(`Bild nicht gefunden: ${tile.terrain}.png`);
          }

          if (position?.col === cIdx && position?.row === rIdx) {
            offCtx.save();
            try {
              const markerImg = await loadImage("/images/marker.png");
              const cx = x + HEX_SIZE;
              const cy = y + HEX_HEIGHT / 2;
              const radius = HEX_SIZE * 0.6;
              offCtx.beginPath();
              offCtx.arc(cx, cy, radius, 0, Math.PI * 2);
              offCtx.clip();
              offCtx.drawImage(
                markerImg,
                cx - radius,
                cy - radius,
                radius * 2,
                radius * 2,
              );
            } catch {
              console.warn("Marker nicht gefunden");
            }
            offCtx.restore();
          }
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(offscreen, 0, 0);
    },
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const totalCols = hexData.length;
    const totalRows = Math.max(...hexData.map((col) => col.length));
    canvas.width = totalCols * (HEX_WIDTH * 0.75) + HEX_WIDTH * 0.25;
    canvas.height = totalRows * HEX_VERTICAL_SPACING + HEX_VERTICAL_SPACING / 2;

    drawAll(ctx, playerPosition).then(() => {
      if (playerPosition)
        scrollToMarker(playerPosition.col, playerPosition.row);
    });
  }, [playerPosition, drawAll, scrollToMarker]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    const col = Math.floor(px / (HEX_WIDTH * 0.75));
    const yOffset = col % 2 !== 0 ? HEX_VERTICAL_SPACING / 2 : 0;
    const row = Math.floor((py - yOffset) / HEX_VERTICAL_SPACING);

    if (
      col >= 0 &&
      col < hexData.length &&
      row >= 0 &&
      row < hexData[col].length
    ) {
      setPlayerPosition(col, row);
    }
  };

  return { canvasRef, containerRef, handleClick };
}
