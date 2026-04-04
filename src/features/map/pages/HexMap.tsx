import React, { useRef, useEffect } from "react";
import { hexData } from "./hexData";

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

interface DrawHexType {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  size: number;
  img: HTMLImageElement;
  label?: string;
  rotate?: number;
}

function drawHex({ ctx, x, y, size, img, label, rotate }: DrawHexType) {
  const w = 2 * size;
  const h = Math.sqrt(3) * size;

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + size / 2, y);
  ctx.lineTo(x + (3 * size) / 2, y);
  ctx.lineTo(x + w, y + h / 2);
  ctx.lineTo(x + (3 * size) / 2, y + h);
  ctx.lineTo(x + size / 2, y + h);
  ctx.lineTo(x, y + h / 2);
  ctx.closePath();
  ctx.clip();

  if (rotate) {
    const cx = x + size;
    const cy = y + h / 2;
    ctx.translate(cx, cy);
    ctx.rotate((rotate * 60 * Math.PI) / 180);
    ctx.translate(-cx, -cy);
  }

  ctx.drawImage(img, x, y, w, h);

  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(x + size / 2, y);
  ctx.lineTo(x + (3 * size) / 2, y);
  ctx.lineTo(x + w, y + h / 2);
  ctx.lineTo(x + (3 * size) / 2, y + h);
  ctx.lineTo(x + size / 2, y + h);
  ctx.lineTo(x, y + h / 2);
  ctx.closePath();
  ctx.strokeStyle = "black";
  ctx.stroke();

  if (label) {
    ctx.font = `bold ${size * 0.3}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeText(label, x + size, y + h * 0.78);
    ctx.fillStyle = "white";
    ctx.fillText(label, x + size, y + h * 0.78);
  }
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
        height: "calc(100vh - 120px)",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <canvas ref={canvasRef} style={{ border: "1px solid black" }} />
    </div>
  );
};

export default HexCanvas;
