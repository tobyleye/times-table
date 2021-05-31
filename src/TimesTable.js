import { useTimesTable } from "./useTimesTable";
import { FixedSizeGrid as Grid } from "react-window";

export default function TimesTable({ x, y }) {
  const grid = useTimesTable(x, y);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Grid
        columnCount={grid[0]?.length}
        columnWidth={50}
        height={500}
        width={500}
        rowCount={grid.length}
        rowHeight={30}
        itemData={grid}
      >
        {Cell}
      </Grid>
      {/* <List height={200} itemCount={grid.length} itemSize={50} itemData={grid}>
        {Row}
      </List> */}
    </div>
  );
}

function Cell({ data, columnIndex, rowIndex, style }) {
  return <div style={style}>{data[rowIndex][columnIndex]}</div>;
}

// function Row({ data, index, style }) {
//   return (
//     <div style={{ ...style, display: "flex" }}>
//       {data[index].map((item, key) => (
//         <span key={key}>{item}</span>
//       ))}
//     </div>
//   );
// }
