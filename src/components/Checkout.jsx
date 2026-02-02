import { useState } from "react";
import { useCart } from "./CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    emailConfirm: "",
    telefono: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.email !== formData.emailConfirm) {
      setError("Los emails no coinciden, por favor verifícalos.");
      return;
    }

    const order = {
      buyer: {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        telefono: formData.telefono,
      },
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
      setError("Hubo un error al procesar tu orden, intenta nuevamente.");
    }
  };

  if (orderId) {
    return (
      <div className="order-success">
        <h2>¡Gracias por tu compra! 🎉</h2>
        <p>Tu orden se ha generado correctamente.</p>
        <strong>{orderId}</strong>
        <p>Guarda este código para seguimiento.</p>
        <Link to="/">
          <button className="checkout-btn" style={{ marginTop: "20px" }}>
            Volver al Inicio
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Finalizar Compra</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="nombre"
          className="form-input"
          placeholder="Nombre"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellido"
          className="form-input"
          placeholder="Apellido"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telefono"
          className="form-input"
          placeholder="Teléfono"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="emailConfirm"
          className="form-input"
          placeholder="Confirmar Email"
          onChange={handleChange}
          required
        />

        <div className="checkout-total">
          Total a pagar: <span>${totalPrice().toLocaleString()}</span>
        </div>

        {error && <p className="error-msg">{error}</p>}

        <button type="submit" className="checkout-btn">
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
};

export default Checkout;
