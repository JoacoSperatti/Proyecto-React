import { useParams, Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function ItemDetailContainer() {
  const { itemID } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "products", itemID);
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          setProduct({ id: doc.id, ...doc.data() });
        }
      })
      .finally(() => setLoading(false));
  }, [itemID]);

  const handleAdd = (count) => {
    addItem(product, count);
    setIsAdded(true);
    toast.success(`Agregado al carrito!`, {
      theme: "dark",
      position: "bottom-right",
    });
  };

  if (loading)
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Cargando detalle...</h2>
      </div>
    );
  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <section className="detail-container">
      <div className="detail-image-column">
        <img src={product.img} alt={product.title} className="detail-img" />
      </div>

      <div className="detail-content-column">
        <h2 className="detail-title">{product.title}</h2>
        <hr className="detail-divider" />
        <p className="detail-price">$ {product.price.toLocaleString()}</p>
        <p className="detail-description">{product.description}</p>

        {isAdded ? (
          <div className="detail-actions">
            <Link to="/cart">
              <button className="btn-go-cart">Ir al Carrito</button>
            </Link>
            <Link to="/">
              <button className="btn-continue">Seguir comprando</button>
            </Link>
          </div>
        ) : (
          <div style={{ marginTop: "20px" }}>
            <ItemCount onAdd={handleAdd} />
          </div>
        )}
      </div>
    </section>
  );
}

export default ItemDetailContainer;
