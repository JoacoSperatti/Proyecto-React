import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryID } = useParams();

  useEffect(() => {
    setLoading(true);
    const productsRef = collection(db, "products");
    const q = categoryID
      ? query(productsRef, where("category", "==", categoryID))
      : productsRef;

    getDocs(q)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [categoryID]);

  if (loading)
    return <h2 style={{ textAlign: "center" }}>Cargando productos...</h2>;

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {products.map((prod) => (
          <div key={prod.id} className="card-producto">
            <img src={prod.img} alt={prod.title} />
            <h3>{prod.title}</h3>
            <p className="price">$ {prod.price}</p>
            <Link to={`/product/${prod.id}`}>
              <button>Ver detalle</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
