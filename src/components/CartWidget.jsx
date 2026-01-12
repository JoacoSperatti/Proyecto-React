import { useCart } from "../context/CartContext"; // Importamos el hook

const CartWidget = () => {
    const { totalQuantity } = useCart(); // Sacamos la función del contexto

    const quantity = totalQuantity(); // Ejecutamos para obtener el número

    return (
        <div className="cart-widget">
            🛒
            {/* Solo mostramos el badge si hay items (opcional) */}
            {quantity > 0 && <span className="cart-notification">{quantity}</span>}
        </div>
    );
};

export default CartWidget;