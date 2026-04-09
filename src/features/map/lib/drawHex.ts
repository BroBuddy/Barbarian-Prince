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
  const textColor = "#000";
  const fillColor = "#fff";

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

  if (label) {
    ctx.save();
    ctx.font = `bold ${size * 0.3}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = textColor;
    ctx.lineWidth = 3;

    const words = label.split(" ");
    const lines =
      words.length > 1
        ? [
            words.slice(0, Math.ceil(words.length / 2)).join(" "),
            words.slice(Math.ceil(words.length / 2)).join(" "),
          ]
        : [label];

    const lineHeight = size * 0.32;
    const startY =
      lines.length > 1 ? y + h * 0.78 - lineHeight / 2 : y + h * 0.78;

    for (const [i, line] of lines.entries()) {
      const lineY = startY + i * lineHeight;
      ctx.strokeText(line, x + size, lineY);
      ctx.fillStyle = fillColor;
      ctx.fillText(line, x + size, lineY);
    }

    ctx.restore();
  }
}
