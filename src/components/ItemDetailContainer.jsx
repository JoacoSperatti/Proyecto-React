import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { getItemData } from "../data/mockService";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";

function ItemDetailContainer() {
  const { itemID } = useParams();
  const [product, setProduct] = useState({});
  const { addItem } = useCart();

  useEffect(() => {
    getItemData(itemID).then((response) => setProduct(response));
  }, [itemID]);

  const handleAdd = (count) => {
    addItem(product, count);
    toast.success(`Se agregaron ${count} items al carrito`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>{product.title}</h2>
      <hr />
      <img
        src={product.img}
        alt={product.title}
        style={{ maxWidth: "300px", margin: "20px 0" }}
      ></img>
      <p>{product.description}</p>
      <h4>$ {product.price}</h4>

      <ItemCount onAdd={handleAdd} />
    </section>
  );
}

export default ItemDetailContainer;
