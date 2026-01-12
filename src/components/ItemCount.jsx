import { useState } from "react";

export default function ItemCount({ onAdd }) {
  const [count, setCount] = useState(1);

  function handleResta() {
    if (count > 1) setCount(count - 1);
  }

  function handleSuma() {
    setCount(count + 1);
  }

  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={handleResta}>-</button>
        <span style={{ margin: "0 10px", fontWeight: "bold" }}>{count}</span>
        <button onClick={handleSuma}>+</button>
      </div>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}
