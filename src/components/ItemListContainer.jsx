import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import getData, { getCategoryData } from "../data/mockService";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();

  useEffect(() => {
    const asyncFunc = categoryID ? getCategoryData : getData;

    asyncFunc(categoryID)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.error(error));
  }, [categoryID]);

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
