export function getDayAndWeek(day: number): string {
  const dayOfWeek = ((day - 1) % 7) + 1;
  const week = Math.ceil(day / 7);
  return `D${dayOfWeek} · W${week}`;
}

export function tagToPath(tag: string): string {
  const lower = tag.toLowerCase();
  if (lower.startsWith("e")) return `/event/${lower}`;
  if (lower.startsWith("r")) return `/rule/${lower}`;
  return `/`;
}

export function getLinkClass(tag: string): string {
  const base = "flex flex-row";

  if (tag.toLowerCase().startsWith("e")) {
    return `${base} text-purple`;
  }

  return base;
}
