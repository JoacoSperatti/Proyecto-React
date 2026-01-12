import { useParams } from 'react-router-dom'; // O 'react-router'
import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';
import { getItemData } from '../data/mockService';
import { useCart } from './CartContext'; // Ruta corregida

function ItemDetailContainer(){
  const { itemID } = useParams();
  const [product, setProduct] = useState({});
  const { addItem } = useCart(); 

  useEffect( () => {
    getItemData(itemID).then( response => setProduct(response))
  }, [itemID])

  const handleAdd = (count) => {
    console.log(`Agregando al carrito: ${product.title}, cantidad: ${count}`);
    addItem(product, count); 
    alert("Producto agregado al carrito"); 
  }
  
  return(    
   <section style={{ padding: "50px", textAlign: "center" }}>
    <h2>{product.title}</h2>
    <hr/>
    <img src={product.img} alt={product.title} style={{ maxWidth: "300px", margin: "20px 0" }}></img>
    <p>{product.description}</p>
    <h4>$ {product.price}</h4>
    
    <ItemCount onAdd={handleAdd} />
  </section>
  )
}

export default ItemDetailContainer;