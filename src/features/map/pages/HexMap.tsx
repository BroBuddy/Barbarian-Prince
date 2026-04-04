import React, { useRef, useEffect } from "react";
import { hexData } from "./hexData";
import { drawHex } from "@/lib/drawMap";

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const totalCols = hexData.length;
    const totalRows = Math.max(...hexData.map((col) => col.length));

    canvas.width = totalCols * (HEX_WIDTH * 0.75) + HEX_WIDTH * 0.25;
    canvas.height = totalRows * HEX_VERTICAL_SPACING + HEX_VERTICAL_SPACING / 2;

    const drawAll = async () => {
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
            console.warn(`Bild nicht gefunden: ${tile}.png`);
          }
        }
      }
    };

    drawAll();
  }, []);

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
      <canvas ref={canvasRef} />
    </div>
  );
};

export default HexCanvas;
