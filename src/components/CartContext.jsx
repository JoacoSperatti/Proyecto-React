import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod,
        ),
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const incrementItem = (id) => {
    setCart(
      cart.map((prod) =>
        prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod,
      ),
    );
  };

  const decrementItem = (id) => {
    setCart(
      cart.map((prod) =>
        prod.id === id && prod.quantity > 1
          ? { ...prod, quantity: prod.quantity - 1 }
          : prod,
      ),
    );
  };

  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
