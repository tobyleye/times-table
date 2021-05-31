import { useMemo, useState } from "react";
import TimesTable from "./TimesTable";

const useNumberInput = (initialValue = "") => {
  const [rawValue, setRawValue] = useState(initialValue);

  const onChange = (e) => {
    const { value } = e.target;
    setRawValue(value);
  };

  const value = useMemo(() => {
    let number = Number(rawValue);
    if (Number.isNaN(number)) {
      number = 0;
    }
    return number;
  }, [rawValue]);

  return [
    value,
    {
      type: "number",
      onChange,
      value: rawValue,
    },
  ];
};

function App() {
  const [x, bindX] = useNumberInput(12);
  const [y, bindY] = useNumberInput(12);

  return (
    <div className="App">
      <h3>Times table</h3>
      <p>Say hello to virtualizing</p>
      <div>
        <input {...bindX} placeholder="x" />
        <input {...bindY} placeholder="y" />
      </div>
      <TimesTable x={x} y={y} />
    </div>
  );
}

export default App;
