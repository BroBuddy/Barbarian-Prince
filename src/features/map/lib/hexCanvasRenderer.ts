import { drawHex } from "./drawHex";
import { loadImage } from "./loadImage";
import {
  HEX_SIZE,
  HEX_WIDTH,
  HEX_HEIGHT,
  HEX_VERTICAL_SPACING,
} from "./hexConstants";
import { isAdjacent } from "./hexUtils";

export async function drawAllHexes(
  ctx: CanvasRenderingContext2D,
  hexData: any[][],
  position?: { col: number; row: number },
) {
  const offscreen = document.createElement("canvas");
  offscreen.width = ctx.canvas.width;
  offscreen.height = ctx.canvas.height;
  const offCtx = offscreen.getContext("2d");
  if (!offCtx) return;

  for (const [cIdx, col] of hexData.entries()) {
    const xOffset = cIdx * (HEX_WIDTH * 0.75);
    const yOffset = cIdx % 2 !== 0 ? HEX_VERTICAL_SPACING / 2 : 0;

    for (const [rIdx, tile] of col.entries()) {
      const x = xOffset;
      const y = rIdx * HEX_VERTICAL_SPACING + yOffset;

      try {
        const path = tile.variant
          ? `/images/terrains/${tile.terrain}-${tile.variant}.png`
          : `/images/terrains/${tile.terrain}.png`;
        const img = await loadImage(path);
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
        console.warn(`Terrain not found: ${tile.terrain}`);
      }

      if (
        position &&
        !(position.col === cIdx && position.row === rIdx) &&
        !isAdjacent(position.col, position.row, cIdx, rIdx)
      ) {
        drawHexOverlay(offCtx, x, y);
      }

      if (position?.col === cIdx && position?.row === rIdx) {
        await drawMarker(offCtx, x, y);
      }
    }
  }

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(offscreen, 0, 0);
}

function drawHexOverlay(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.beginPath();
  ctx.moveTo(x + HEX_SIZE / 2, y);
  ctx.lineTo(x + (3 * HEX_SIZE) / 2, y);
  ctx.lineTo(x + HEX_WIDTH, y + HEX_HEIGHT / 2);
  ctx.lineTo(x + (3 * HEX_SIZE) / 2, y + HEX_HEIGHT);
  ctx.lineTo(x + HEX_SIZE / 2, y + HEX_HEIGHT);
  ctx.lineTo(x, y + HEX_HEIGHT / 2);
  ctx.closePath();
  ctx.fillStyle = "rgba(0,0,0,0.95)";
  ctx.fill();
}

async function drawMarker(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.save();
  try {
    const markerImg = await loadImage("/images/marker.png");
    const cx = x + HEX_SIZE;
    const cy = y + HEX_HEIGHT / 2;
    const radius = HEX_SIZE * 0.6;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(markerImg, cx - radius, cy - radius, radius * 2, radius * 2);
  } catch {
    console.warn("Marker not found!");
  }
  ctx.restore();
}
