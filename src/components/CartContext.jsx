// src/context/CartContext.jsx
import { createContext, useState, useContext } from "react";

// 1. Crear el contexto
const CartContext = createContext();

// 2. Crear el componente proveedor (Provider)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const addItem = (item, quantity) => {
    // Verificamos si ya está en el carrito
    if (isInCart(item.id)) {
      // Si ya está, sumamos la cantidad nueva a la existente
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      // Si no está, lo agregamos con su cantidad
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Función auxiliar para saber si está en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  // Función para calcular la cantidad total de items (para el widget)
  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Hook personalizado para usar el contexto más fácil
export const useCart = () => useContext(CartContext);