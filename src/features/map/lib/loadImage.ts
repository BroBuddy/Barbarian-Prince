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
