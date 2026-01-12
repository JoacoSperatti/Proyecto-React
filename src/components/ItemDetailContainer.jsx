import { useParams } from 'react-router-dom'; // Ajusta si usas 'react-router' o 'react-router-dom'
import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';
import { getItemData } from '../data/mockService';
import { useCart } from '../context/CartContext'; // Importamos el hook del carrito

function ItemDetailContainer(){
  const { itemID } = useParams();
  const [product, setProduct] = useState({});
  const { addItem } = useCart(); // Traemos la función para agregar

  useEffect( () => {
    getItemData(itemID).then( response => setProduct(response))
  }, [itemID]) // Agregamos itemID a dependencias

  // Esta función se ejecutará cuando el hijo (ItemCount) haga click
  const handleAdd = (count) => {
    console.log(`Agregando al carrito: ${product.title}, cantidad: ${count}`);
    addItem(product, count); // Guardamos en el contexto global
    alert("Producto agregado al carrito"); // Feedback temporal
  }
  
  return(    
   <section style={{ padding: "50px", textAlign: "center" }}>
    <h2>{product.title}</h2>
    <hr/>
    <img src={product.img} alt={product.title} style={{ maxWidth: "300px", margin: "20px 0" }}></img>
    <p>{product.description}</p>
    <h4>$ {product.price}</h4>
    
    {/* Pasamos la función handleAdd al hijo */}
    <ItemCount onAdd={handleAdd} />
  </section>
  )
}

export default ItemDetailContainer;