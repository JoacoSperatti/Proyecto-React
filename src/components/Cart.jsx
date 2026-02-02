import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalQuantity, totalPrice, removeItem, clearCart } = useCart();

  if (totalQuantity() === 0) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>El carrito está vacío 😢</h2>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#f39c12",
            fontSize: "1.2rem",
          }}
        >
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Tu Carrito</h2>
      {cart.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            padding: "10px 0",
          }}
        >
          <img src={prod.img} alt={prod.title} style={{ width: "80px" }} />
          <div style={{ flex: 1, marginLeft: "20px" }}>
            <h4>{prod.title}</h4>
            <p>Precio unit: ${prod.price}</p>
            <p>Cant: {prod.quantity}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontWeight: "bold" }}>
              Subtotal: ${prod.price * prod.quantity}
            </p>
            <button
              onClick={() => removeItem(prod.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <h3>Total a pagar: ${totalPrice()}</h3>
        <button
          onClick={clearCart}
          style={{
            marginRight: "10px",
            padding: "10px",
            background: "#555",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Vaciar Carrito
        </button>
        <Link to="/checkout">
          <button
            style={{
              padding: "10px 20px",
              background: "#f39c12",
              color: "white",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Terminar Compra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
