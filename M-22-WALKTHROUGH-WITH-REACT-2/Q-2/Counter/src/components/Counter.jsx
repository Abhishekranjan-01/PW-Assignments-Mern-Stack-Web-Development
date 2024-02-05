import { useState } from "react";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import Count from "./count";

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div
      style={{
        width: "fit-content",
        margin: "0 auto",
        padding: "30px 60px",
        borderRadius: "16px",
        backgroundColor: "#e55039",
      }}
    >
      <Count count={count} />

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <IncrementButton count={count} setCount={setCount} />
        <DecrementButton count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default Counter;
