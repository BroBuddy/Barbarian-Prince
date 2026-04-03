import React, { useRef, useEffect } from "react";
import { hexData } from "./hexData";

const HEX_SIZE = 30;
const HEX_WIDTH = 2 * HEX_SIZE;
const HEX_HEIGHT = Math.sqrt(3) * HEX_SIZE;
const HEX_VERTICAL_SPACING = HEX_HEIGHT;

interface TileImageMap {
  [key: string]: string;
}

const tileImages: TileImageMap = {
  farmland: "/images/terrain/farmland.png",
  countryside: "/images/terrain/countryside.png",
  forest: "/images/terrain/forest.png",
  hills: "/images/terrain/hills.png",
  mountains: "/images/terrain/mountains.png",
  swamp: "/images/terrain/swamp.png",
  desert: "/images/terrain/desert.png",
  village: "/images/terrain/village.png",
};

interface DrawHexType {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  size: number;
  text: string;
  imageSrc: string;
  xPixel?: number;
  yPixel?: number;
}

function drawHex({
  ctx,
  x,
  y,
  size,
  text,
  imageSrc,
  xPixel = 0,
  yPixel = 0,
}: DrawHexType) {
  const w = 2 * size;
  const h = Math.sqrt(3) * size;

  ctx.save();

  // Hex clip
  ctx.beginPath();
  ctx.moveTo(x + size / 2, y);
  ctx.lineTo(x + (3 * size) / 2, y);
  ctx.lineTo(x + w, y + h / 2);
  ctx.lineTo(x + (3 * size) / 2, y + h);
  ctx.lineTo(x + size / 2, y + h);
  ctx.lineTo(x, y + h / 2);
  ctx.closePath();
  ctx.clip();

  const img = new Image();
  img.src = imageSrc;
  img.onload = () => {
    ctx.drawImage(img, x + xPixel, y + yPixel, w, h);
  };

  ctx.restore();

  // Hex Kontur
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

  // Text
  ctx.fillStyle = "white";
  ctx.font = "bold 12px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x + size, y + h / 2);
}

const HexCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 600;

    hexData.forEach((col, cIdx) => {
      const xPixel = 0;
      const yPixel = 0;
      const xOffset = cIdx * (HEX_WIDTH * 0.75) + xPixel;
      const yOffset = cIdx % 2 !== 0 ? HEX_VERTICAL_SPACING / 2 + yPixel : 0;

      col.forEach((tile, rIdx) => {
        const x = xOffset;
        const y = rIdx * HEX_VERTICAL_SPACING + yOffset;
        drawHex({
          ctx,
          x,
          y,
          size: HEX_SIZE,
          text: tile[0].toUpperCase(),
          imageSrc: tileImages[tile],
          xPixel: 0,
          yPixel: 0,
        });
      });
    });
  }, []);

  return <canvas ref={canvasRef} style={{ border: "1px solid black" }} />;
};

export default HexCanvas;
