export interface Position {
  top: number;
  left: number;
}

export function uniquePosition(count: number): Position[] {
  const position: Position[] = [];
  const minDistance = 100;
  const maxWidth = window.innerWidth * 0.5;
  const maxHeight = window.innerHeight * 0.6;
  const leftMargin = 60;

  const isOverlap = (top: number, left: number) => {
    return position.some((position) => {
      const distance = Math.sqrt(
        Math.pow(top - position.top, 2) + Math.pow(left - position.left, 2)
      );
      return distance < minDistance;
    });
  };

  for (let i = 0; i < count; i++) {
    let top = 0;
    let left = 0;

    do {
      top = Math.floor(Math.random() * maxHeight);
      left = leftMargin + Math.floor(Math.random() * (maxWidth - leftMargin));
    } while (isOverlap(top, left));
    position.push({ top, left });
  }

  return position;
}
