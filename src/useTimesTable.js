import { useMemo } from "react";

const useTimesTable = (x, y) => {
  const grid = useMemo(() => {
    const grid = [];
    for (let i = 1; i <= x; i++) {
      let column = [];
      for (let j = 1; j <= y; j++) {
        column.push(i * j);
      }
      grid.push(column);
    }
    return grid;
  }, [x, y]);

  return grid;
};

export { useTimesTable };
