export const MOVE_RANGE = 3;

export function isAdjacent(
  col: number,
  row: number,
  targetCol: number,
  targetRow: number,
  range: number = MOVE_RANGE,
): boolean {
  if (range === 0) return col === targetCol && row === targetRow;

  const oddCol = col % 2 !== 0;

  const neighbors = oddCol
    ? [
        [col - 1, row],
        [col + 1, row],
        [col, row - 1],
        [col, row + 1],
        [col - 1, row + 1],
        [col + 1, row + 1],
      ]
    : [
        [col - 1, row],
        [col + 1, row],
        [col, row - 1],
        [col, row + 1],
        [col - 1, row - 1],
        [col + 1, row - 1],
      ];

  return neighbors.some(
    ([c, r]) =>
      (c === targetCol && r === targetRow) ||
      isAdjacent(c, r, targetCol, targetRow, range - 1),
  );
}
