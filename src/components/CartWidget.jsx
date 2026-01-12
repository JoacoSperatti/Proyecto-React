import { useCart } from "./CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  const quantity = totalQuantity();

  return (
    <div className="cart-widget">
      🛒
      {quantity > 0 && <span className="cart-notification">{quantity}</span>}
    </div>
  );
};

export default CartWidget;
