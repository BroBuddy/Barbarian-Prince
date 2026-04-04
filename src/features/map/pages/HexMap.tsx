import React, { useRef, useEffect } from "react";
import { hexData } from "./hexData";
import { drawHex } from "@/lib/drawMap";
import useGameStore from "@/features/game/store/gameStore";

const HEX_SIZE = 30;
const HEX_WIDTH = 2 * HEX_SIZE;
const HEX_HEIGHT = Math.sqrt(3) * HEX_SIZE;
const HEX_VERTICAL_SPACING = HEX_HEIGHT;

const imageCache: Record<string, HTMLImageElement> = {};

function loadImage(src: string): Promise<HTMLImageElement> {
  if (imageCache[src]) return Promise.resolve(imageCache[src]);

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      imageCache[src] = img;
      resolve(img);
    };
    img.onerror = reject;
    img.src = src;
  });
}

const HexCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const playerPosition = useGameStore((state) => state.playerPosition);
  const setPlayerPosition = useGameStore((state) => state.setPlayerPosition);

  const drawAll = async (ctx: CanvasRenderingContext2D) => {
    for (const [cIdx, col] of hexData.entries()) {
      const xOffset = cIdx * (HEX_WIDTH * 0.75);
      const yOffset = cIdx % 2 !== 0 ? HEX_VERTICAL_SPACING / 2 : 0;

      for (const [rIdx, tile] of col.entries()) {
        const x = xOffset;
        const y = rIdx * HEX_VERTICAL_SPACING + yOffset;

        try {
          const img = await loadImage(`/images/terrains/${tile.terrain}.png`);

          drawHex({
            ctx,
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

        if (playerPosition?.col === cIdx && playerPosition?.row === rIdx) {
          ctx.save();
          const markerImg = await loadImage("/images/terrains/marker.png");
          const cx = x + HEX_SIZE;
          const cy = y + HEX_HEIGHT / 2;
          const radius = HEX_SIZE * 0.6;

          ctx.beginPath();
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.clip();

          ctx.drawImage(
            markerImg,
            cx - radius,
            cy - radius,
            radius * 2,
            radius * 2,
          );
          ctx.restore();
        }
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const totalCols = hexData.length;
    const totalRows = Math.max(...hexData.map((col) => col.length));

    canvas.width = totalCols * (HEX_WIDTH * 0.75) + HEX_WIDTH * 0.25;
    canvas.height = totalRows * HEX_VERTICAL_SPACING + HEX_VERTICAL_SPACING / 2;

    drawAll(ctx);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawAll(ctx);
  }, [playerPosition]);

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

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#000",
        height: "calc(100vh - 0)",
        marginTop: "-6px",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <canvas
        ref={canvasRef}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default HexCanvas;
