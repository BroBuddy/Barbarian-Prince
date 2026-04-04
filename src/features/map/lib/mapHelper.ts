const imageCache: Record<string, HTMLImageElement> = {};

export function loadImage(src: string): Promise<HTMLImageElement> {
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

export function drawHex({ ctx, x, y, size, img, label, rotate }: DrawHexType) {
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
  // ctx.strokeStyle = "black";
  // ctx.stroke();

  if (label) {
    ctx.save();
    ctx.font = `bold ${size * 0.3}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeText(label, x + size, y + h * 0.78);
    ctx.fillStyle = "white";
    ctx.fillText(label, x + size, y + h * 0.78);
    ctx.restore();
  }
}
