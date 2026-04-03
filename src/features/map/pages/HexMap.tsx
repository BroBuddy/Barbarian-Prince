import React, { useRef, useEffect } from "react";
import { hexData } from "./hexData";

const HEX_SIZE = 30;
const HEX_WIDTH = 2 * HEX_SIZE;
const HEX_HEIGHT = Math.sqrt(3) * HEX_SIZE;
const HEX_VERTICAL_SPACING = HEX_HEIGHT;

const tileColors: { [key: string]: string } = {
  farmland: "#ffeb3b",
  countryside: "#b5cd85",
  forest: "#8bae7c",
  hills: "#a78885",
  mountains: "#bdb1c2",
  swamp: "#acd0cd",
  desert: "#fdf4d1",
  village: "#5e4541",
};

const tileIcons: { [key: string]: string } = {
  farmland: "🌾",
  countryside: "🌱",
  forest: "🌳",
  hills: "⛰️",
  mountains: "🏔️",
  swamp: "🪷",
  desert: "🌵",
  village: "🏘️",
};

interface DrawHexType {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  size: number;
  color: string;
  text: string;
}

function drawHex({ ctx, x, y, size, color, text }: DrawHexType) {
  const w = 2 * size;
  const h = Math.sqrt(3) * size;

  ctx.beginPath();
  ctx.moveTo(x + size / 2, y);
  ctx.lineTo(x + (3 * size) / 2, y);
  ctx.lineTo(x + w, y + h / 2);
  ctx.lineTo(x + (3 * size) / 2, y + h);
  ctx.lineTo(x + size / 2, y + h);
  ctx.lineTo(x, y + h / 2);
  ctx.closePath();

  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();

  ctx.fillStyle = "white";
  ctx.font = `bold ${size * 0.8}px 'Segoe UI Emoji', sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x + size, y + h / 2 + size * 0.2);
}

const HexCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    hexData.forEach((col: string[], cIdx: number) => {
      const xPixel = 0;
      const yPixel = 0;
      const xOffset = cIdx * (HEX_WIDTH * 0.75) + xPixel;
      const yOffset = cIdx % 2 !== 0 ? HEX_VERTICAL_SPACING / 2 + yPixel : 0;

      col.forEach((tile: string, rIdx: number) => {
        const x = xOffset;
        const y = rIdx * HEX_VERTICAL_SPACING + yOffset;
        drawHex({
          ctx,
          x,
          y,
          size: HEX_SIZE,
          color: tileColors[tile],
          text: tileIcons[tile],
        });
      });
    });
  }, []);

  return <canvas ref={canvasRef} style={{ border: "1px solid black" }} />;
};

export default HexCanvas;
