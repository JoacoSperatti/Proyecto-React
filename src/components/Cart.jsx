import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, totalQuantity, totalPrice, removeItem, clearCart, incrementItem, decrementItem } = useCart();

  const handleClearCart = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Se eliminarán todos los productos del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "¡Borrado!",
          text: "Tu carrito ha sido vaciado.",
          icon: "success",
        });
      }
    });
  };

  if (totalQuantity() === 0) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>El carrito está vacío 😢</h2>
        <Link to="/" style={{ textDecoration: "none", color: "#f39c12", fontSize: "1.2rem" }}>
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Tu Carrito</h2>
      {cart.map((prod) => (
        <div key={prod.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd", padding: "10px 0" }}>
          <img src={prod.img} alt={prod.title} style={{ width: "80px" }} />
          
          <div style={{ flex: 1, marginLeft: "20px" }}>
            <h4>{prod.title}</h4>
            <p>Precio unit: ${prod.price}</p>
            
            <div style={{display: "flex", alignItems: "center", gap: "10px", margin: "10px 0"}}>
                <button onClick={() => decrementItem(prod.id)} className="btn-edit-qty">-</button>
                <span style={{fontWeight: "bold", fontSize: "1.1rem"}}>{prod.quantity}</span>
                <button onClick={() => incrementItem(prod.id)} className="btn-edit-qty">+</button>
            </div>
            
          </div>
          
          <div style={{ textAlign: "right" }}>
            <p style={{ fontWeight: "bold" }}>Subtotal: ${prod.price * prod.quantity}</p>
            <button onClick={() => removeItem(prod.id)} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <h3>Total a pagar: ${totalPrice().toLocaleString()}</h3>

        <button onClick={handleClearCart} style={{ marginRight: "10px", padding: "10px", background: "#555", color: "white", border: "none", cursor: "pointer" }}>
          Vaciar Carrito
        </button>

        <Link to="/checkout">
          <button style={{ padding: "10px 20px", background: "#f39c12", color: "white", border: "none", fontWeight: "bold", cursor: "pointer" }}>
            Terminar Compra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;