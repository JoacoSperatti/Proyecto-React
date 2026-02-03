import { useState } from "react";

export default function ItemCount({ onAdd, stock }) {
  const [count, setCount] = useState(1);

  function handleResta() {
    if (count > 1) setCount(count - 1);
  }

  function handleSuma() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  return (
    <div className="item-count-container">
      <div className="counter-controls">
        <button className="counter-btn" onClick={handleResta}>
          -
        </button>
        <span className="counter-value">{count}</span>
        <button
          className="counter-btn"
          onClick={handleSuma}
          disabled={count === stock}
          style={{ opacity: count === stock ? 0.5 : 1 }}
        >
          +
        </button>
      </div>

      <button
        className="add-to-cart-btn"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin Stock" : "Agregar al Carrito 🛒"}
      </button>
    </div>
  );
}
