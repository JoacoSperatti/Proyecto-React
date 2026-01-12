import { useState, useEffect } from "react"

export default function ItemCount(){
  const [count, setCount] = useState(1);

  console.log("1. Montaje -> Carga/render inicial en el DOM")
  console.log("2. Actualizacion de ItemCount")
  // ? 3. Desmontaje -> Eliminamos el componente del DOM  
  
  useEffect( () =>{
    // efecto de Montaje
    console.log("🔴Petición de datos a la base de datos")
    return () => { console.log("Tarea de desmontaje")}    
  }, []); // array de depenencias 


  function handleResta(){
    // Antes de calcular, validamos si llegamos al mínimo (2)
    setCount(count - 1);
  }

  function handleSuma(){      
    // Antes de calcular, validamos si llegamos al máx
      setCount(count + 1);
  }

  return (
    <div>
    <div>
        <button onClick={ handleResta }>-</button>
        <span>{count}</span>
        <button onClick={ handleSuma }>+</button>
    </div>
    <button>Agregar al carrito</button>
    </div>
  )
}