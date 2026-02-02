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
    <div className="item-count-container">
      <div className="counter-controls">
        <button className="counter-btn" onClick={handleResta}>
          -
        </button>
        <span className="counter-value">{count}</span>
        <button className="counter-btn" onClick={handleSuma}>
          +
        </button>
      </div>
      <button className="add-to-cart-btn" onClick={() => onAdd(count)}>
        Agregar al Carrito 🛒
      </button>
    </div>
  );
}
